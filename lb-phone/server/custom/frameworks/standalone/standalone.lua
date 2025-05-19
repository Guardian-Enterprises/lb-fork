if Config.Framework ~= "standalone" then
    return
end

local vRP = exports["vrp"]:getvRP()

function IsAdmin(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.hasRank(user_id,"Admin",60)
    end
end

---@param source number
---@return string | nil
function GetIdentifier(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return tostring(user_id)
    end
    return nil
end

---@param source number
---@param itemName string
function HasItem(source, itemName)
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.checkItem(user_id,Config.Item.Name,1)        
    end
end

lib.callback.register("lb-phone:server:checkItem",function(source)
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.checkItem(user_id,Config.Item.Name,1)        
    end
end)

---Get a player's character name
---@param source number
---@return string # Firstname
---@return string # Lastname
function GetCharacterName(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.getUserIdentity(user_id,"fullName")
    end
    return "",""
end