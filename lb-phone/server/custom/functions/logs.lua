local discordColors = {
    info = tonumber("3498DB", 16),
    success = tonumber("66FFA3", 16),
    warning = tonumber("F1C40F", 16),
    error = tonumber("E74C3C", 16),
}

local avatars = {}

local function GetAvatar(source)
    if avatars[source] then
        return avatars[source]
    end

    local avatar
    local discord = GetPlayerIdentifierByType(source, "discord")
    local steam = GetPlayerIdentifierByType(source, "steam")
    local fivem = GetPlayerIdentifierByType(source, "fivem")

    discord = discord and discord:sub(9)
    steam = steam and steam:sub(7)
    fivem = fivem and fivem:sub(7)

    local avatarPromise = promise.new()

    if discord and DISCORD_TOKEN then
        PerformHttpRequest("https://discord.com/api/v9/users/" .. discord, function(status, response)
            if status == 200 then
                local data = json.decode(response)

                if data.avatar then
                    avatar = "https://cdn.discordapp.com/avatars/" .. discord .. "/" .. data.avatar .. ".png"
                end
            end

            avatarPromise:resolve()
        end, "GET", "", { ["Authorization"] = "Bot " .. DISCORD_TOKEN })
    elseif steam then
        PerformHttpRequest("https://steamcommunity.com/profiles/" .. tonumber(steam, 16), function(status, response)
            if status == 200 then
                avatar = response:match('<meta name="twitter:image" content="(.-)"')
            end

            avatarPromise:resolve()
        end, "GET", "", {})
    elseif fivem then
        PerformHttpRequest("https://policy-live.fivem.net/api/getUserInfo/" .. fivem, function(statusCode, response, headers)
            if statusCode == 200 then
                local data = json.decode(response)

                if data.avatar_template then
                    avatar = "https://forum.cfx.re" .. data.avatar_template:gsub("{size}", "512")
                end
            end

            avatarPromise:resolve()
        end, "GET", "", {["Content-Type"] = "application/json"})
    end

    Citizen.Await(avatarPromise)

    avatars[source] = avatar

    return avatar or ("https://cdn.discordapp.com/embed/avatars/" .. math.random(0, 5) .. ".png")
end

function GetTimestampISO()
    return os.date("!%Y-%m-%dT%H:%M:%S.000Z")
end

---@param source? number
---@param action string
---@param level "info" | "success" | "warning" | "error"
---@param title string
---@param metadata? table<string, any> | string
---@param image? string
local function LogToDiscord(source, action, level, title, metadata, image)
    if not LOGS[action] then
        infoprint("error", "No webhook set for action " .. action .. " and no default webhook set in lb-phone/server/apiKeys.lua")
        return
    end

	local cleanedUpIdentifiers = {}
	local accounts = {}
	local description = ""
	local accountsCount = 0

    if type(metadata) == "table" then
        description = json.encode(metadata, { indent = true }) .. "\n\n"
    elseif type(metadata) == "string" then
        description = metadata .. "\n\n"
    end

    if source then
        local identifiers = GetPlayerIdentifiers(source)

        for i = 1, #identifiers do
            local identifierTypeIndex = identifiers[i]:find(":")

            if not identifierTypeIndex then
                goto continue
            end

            local identifierType = identifiers[i]:sub(1, identifierTypeIndex - 1)
            local identifier = identifiers[i]:sub(identifierTypeIndex + 1)

            if identifierType == "steam" then
                accountsCount += 1
                accounts[accountsCount] = "- Steam: https://steamcommunity.com/profiles/" .. tonumber(identifier, 16)
            elseif identifierType == "discord" then
                accountsCount += 1
                accounts[accountsCount] = "- Discord: <@" .. identifier .. ">"
            end

            if identifierType ~= "ip" then
                cleanedUpIdentifiers[identifierType] = identifier
            end

            ::continue::
        end
    end

	if accountsCount > 0 then
		description = description .. "**Accounts:**\n"
		for i = 1, accountsCount do
			description = description .. accounts[i] .. "\n"
		end
	end

	description = description .. "**Identifiers:**"

	for identifierType in pairs(cleanedUpIdentifiers) do
		description = description .. "\n- **" .. identifierType .. ":** " .. cleanedUpIdentifiers[identifierType]
	end

	local embed = {
		title = title,
		description = description,
		color = discordColors[level],
		timestamp = GetTimestampISO(),
        image = image and { url = image } or nil,
		author = source and {
			name = GetPlayerName(source) .. " | " .. source,
			-- icon_url = "https://cdn.discordapp.com/embed/avatars/" .. math.random(0, 5) .. ".png"
            icon_url = GetAvatar(source)
		},
		footer = {
			text = "LB Tablet",
			icon_url = "https://docs.lbscripts.com/images/icons/icon.png"
		}
	}

    ---@diagnostic disable-next-line: param-type-mismatch
	PerformHttpRequest(LOGS[action], function() end, "POST", json.encode({
		username = "LB Tablet",
        avatar_url = "https://docs.lbscripts.com/images/icons/icon.png",
		embeds = { embed }
	}), { ["Content-Type"] = "application/json" })
end

---@param action string
---@param source? number
---@param level "info" | "success" | "warning" | "error"
---@param title string
---@param metadata? table<string, any> | string
---@param image? string
function Log(action, source, level, title, metadata, image)
	if not Config.Logs?.Enabled or not Config.Logs.Actions[action] then
		return
	end

	if Config.Logs.Service == "ox_lib" then
        ---@diagnostic disable-next-line: undefined-global
        if not lib or GetResourceState("ox_lib") ~= "started" then
            infoprint("error", "Config.Logs.Service is set to 'ox_lib', but ox_lib is not started. To log using ox_lib, you need to install ox_lib from https://github.com/overextended/ox_lib/releases/latest.")
            return
        end

        ---@diagnostic disable-next-line: undefined-global
        lib.Logger(source or -1, level, title)
    elseif Config.Logs.Service == "fivemanage" then
        if GetResourceState("fmsdk") ~= "started" then
            infoprint("error", "Config.Logs.Service is set to 'fivemanage', but fmsdk is not started. To log using Fivemanage, you need to install fmsdk from https://github.com/fivemanage/sdk/releases/latest.")
            return
        end

        if not metadata then
            metadata = {}
        end

        if type(metadata) == "string" then
            metadata = { message = metadata }
        end

        metadata.playerSource = source

        exports.fmsdk:LogMessage(level, title, metadata)
    elseif Config.Logs.Service ~= "discord" then
        infoprint("error", "Config.Logs.Service is set to an invalid value")
		return
	end

    Citizen.CreateThreadNow(function()
        LogToDiscord(source, action, level, title, metadata, image)
    end)
end

Wait(0)

if Config.Logs?.Enabled and Config.Logs?.Service == "ox_lib" then
	debugprint("Logs set to ox_lib, loading...")

	local oxInit = LoadResourceFile("ox_lib", "init.lua")

    if oxInit then
        load(oxInit)()
		debugprint("Loaded ox_lib")
	else
        Config.Logs.Enabled = false

        infoprint("error", "Failed to load ox_lib")
    end
end

if Config.Logs?.Enabled and Config.Logs?.Service == "discord" then
    ---@type string?
    local defaultWebhook = LOGS?.Default

    if not defaultWebhook or defaultWebhook == "https://discord.com/api/webhooks/" then
        defaultWebhook = nil
    end

    if not defaultWebhook then
        infoprint("warning", "No default webhook set in lb-phone/server/apiKeys.lua")
    end

    for action, enabled in pairs(Config.Logs.Actions) do
        if not enabled then
            goto continue
        end

        local webhook = LOGS[action]

        if not webhook or webhook == "https://discord.com/api/webhooks/" then
            if defaultWebhook then
                debugprint("Using default webhook for ^5" .. action .. "^7")
            else
                infoprint("warning", "No webhook set for action " .. action .. " and no default webhook set in lb-phone/server/apiKeys.lua")
            end

            LOGS[action] = defaultWebhook
        end

        ::continue::
    end
end

AddEventHandler("playerDropped", function()
    avatars[source] = nil
end)
