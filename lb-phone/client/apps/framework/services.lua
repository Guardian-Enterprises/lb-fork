local callsDisabled = Config.Companies.DefaultCallsDisabled == true

if Config.Companies.DefaultCallsDisabled then
    TriggerServerEvent("phone:phone:disableCompanyCalls", true)
end

local function getCompany(company)
    for i = 1, #Config.Companies.Services do
        local jobData = Config.Companies.Services[i]

        if jobData.job == company then
            return jobData
        end
    end
end

local function formatRecentMessages(messages)
    for i = 1, #messages do
        local message = messages[i]
        local jobData = getCompany(message.company)

        message.number = message.phone_number
        message.lastMessage = message.last_message

        if jobData then
            message.company = {
                icon = jobData.icon,
                name = jobData.name,
                job = jobData.job
            }
        end
    end

    return messages
end

local function FormatMessages(messages)
    for i = 1, #messages do
        local message = messages[i]

        message.content = message.message
    end

    return messages
end

local antiSpamActions = { "sendMessage", "depositMoney", "withdrawMoney", "hireEmployee", "fireEmployee", "setGrade", "toggleDuty" }

RegisterNUICallback("Services", function(data, cb)
    if not currentPhone then
        return
    end

    local action = data.action
    debugprint("Services:" .. (action or ""))

    if contains(antiSpamActions, action) then
        if not CanInteract() then
            return cb(false)
        end
    end

    if action == "getCompanies" then
        lib.TriggerCallback("phone:services:getOnline", cb)
    elseif action == "getCompany" then
        local companyData = GetCompanyData(function(data)
            data.receiveCalls = not callsDisabled
            cb(data)
        end)

        if companyData ~= nil then
            companyData.receiveCalls = not callsDisabled
            cb(companyData)
        end
    elseif action == "depositMoney" and Config.Companies.Management.Deposit then
        local newBalance = DepositMoney(data.amount, cb)

        if newBalance ~= nil then
            cb(newBalance)
        end
    elseif action == "withdrawMoney" and Config.Companies.Management.Withdraw then
        local newBalance = WithdrawMoney(data.amount, cb)

        if newBalance ~= nil then
            cb(newBalance)
        end
    elseif action == "hireEmployee" and Config.Companies.Management.Hire then
        local employeeData = HireEmployee(data.source, cb)

        if employeeData ~= nil then
            cb(employeeData)
        end
    elseif action == "fireEmployee" and Config.Companies.Management.Fire then
        local success = FireEmployee(data.employee, cb)

        if success ~= nil then
            cb(success)
        end
    elseif action == "setGrade" and Config.Companies.Management.Promote then
        local success = SetGrade(data.employee, data.grade, cb)

        if success ~= nil then
            cb(success)
        end
    elseif action == "toggleDuty" and ToggleDuty and Config.Companies.Management.Duty then
        ToggleDuty()
        cb(true)
    elseif action == "toggleCalls" then
        callsDisabled = not callsDisabled
        TriggerServerEvent("phone:phone:disableCompanyCalls", callsDisabled)
        cb(not callsDisabled)
    elseif action == "customIconClick" then
        local jobData = getCompany(data.company)
        if jobData?.onCustomIconClick then
            jobData.onCustomIconClick()
        end
    elseif action == "getEmployees" then
        lib.TriggerCallback("phone:services:getEmployees", cb, data.company)
    end

    if action == "sendMessage" then
        -- company, number, content
        lib.TriggerCallback("phone:services:sendMessage", cb, data.id, data.company, data.content)
    elseif action == "getRecentMessages" then
        lib.TriggerCallback("phone:services:getRecentMessages", function(messages)
            cb(formatRecentMessages(messages))
        end, data.page)
    elseif action == "getChannelId" then
        lib.TriggerCallback("phone:services:getChannelId", cb, data.company)
    elseif action == "getMessages" then
        lib.TriggerCallback("phone:services:getMessages", function(messages)
            cb(FormatMessages(messages))
        end, data.id, data.page)
    elseif action == "deleteChannel" then
        lib.TriggerCallback("phone:services:deleteChannel", cb, data.id)
    end

    if Config.Framework == "qb" then
        local timer = GetGameTimer() + 1500
        while GetGameTimer() < timer do
            Wait(100)
            exports["qb-menu"]:closeMenu()
        end
    end
end)

RegisterNetEvent("phone:services:updateOpen", function(job, open)
    SendReactMessage("services:updateOpen", {
        job = job,
        open = open
    })
end)

RegisterNetEvent("phone:services:newMessage", function(data)
    SendReactMessage("services:newMessage", data)
end)

exports("SendCompanyMessage", function(company, message, anonymous)
    assert(type(company) == "string", "Expected string for company")
    assert(type(message) == "string", "Expected string for message")

    debugprint("SendCompanyMessage triggered")
    return lib.TriggerCallbackSync("phone:services:sendMessage", nil, company, message, anonymous == true)
end)

exports("SendCompanyCoords", function(company, coords, anonymous)
    assert(type(company) == "string", "Expected string for company")

    if not coords then
        coords = GetEntityCoords(PlayerPedId())
    end

    assert(type(coords) == "vector3", "Coords is not defined")

    debugprint("SendCompanyCoords triggered")
    return lib.TriggerCallbackSync("phone:services:sendMessage", nil, company, ("<!SENT-LOCATION-X=%.2fY=%.2f!>"):format(coords.x, coords.y), anonymous == true)
end)

RegisterNetEvent("phone:services:channelDeleted", function(channelId)
    SendReactMessage("services:channelDeleted", channelId)
end)
