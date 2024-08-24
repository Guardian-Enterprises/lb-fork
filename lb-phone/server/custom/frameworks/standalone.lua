if Config.Framework ~= "standalone" then
    return
end

-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
Tunnel = module("vrp","lib/Tunnel")
Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPC = Tunnel.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTIONS
-----------------------------------------------------------------------------------------------------------------------------------------
cRP = {}
Tunnel.bindInterface(GetCurrentResourceName(),cRP)
vCLIENT = Tunnel.getInterface(GetCurrentResourceName())


--- @param source number
--- @return string | nil
function GetIdentifier(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return tostring(user_id)
    end
    return nil
end

---Check if a player has a phone with a specific number
---@param source any
---@param number string
---@return boolean
function HasPhoneItem(source, number)
    if not Config.Item.Require then
        return true
    end

    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local itemAmount = vRP.itemAmount(user_id, Config.Item.Name)
        if itemAmount >= 1 then
            return true
        end
    end
    return false
end

---Get a player's character name
---@param source any
---@return string # Firstname
---@return string # Lastname
function GetCharacterName(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local identity = vRP.getUserIdentity(user_id)
        if identity then
            return identity["name"],identity["name2"]
        end
    end
    return "",""
end

---Get an array of player sources with a specific job
---@param job string
---@return table # Player sources
function GetEmployees(job)
    return {}
end

---Get the bank balance of a player
---@param source any
---@return integer
function GetBalance(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.getBank(user_id)
    end
    return 0
end

---Add money to a player's bank account
---@param source any
---@param amount integer
---@return boolean # Success
function AddMoney(source, amount)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        vRP.addBank(user_id,amount)
        return true
    end
end

---Remove money from a player's bank account
---@param source any
---@param amount integer
---@return boolean # Success
function RemoveMoney(source, amount)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.paymentBank(user_id,amount) then
            return true
        end
    end

    TriggerClientEvent("Notify",source,"error","Dinheiro insuficiente.",5000)
    return false
end

---Send a message to a player
---@param source number
---@param message string
function Notify(source, message)
    TriggerClientEvent("Notify",source,"cellphone",message,8000)
end

-- GARAGE APP

---@param source number
---@return VehicleData[] vehicles An array of vehicles that the player owns
function GetPlayerVehicles(source)
    local tempVehicles = {}

    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local vehicles = exports["oxmysql"]:executeSync("SELECT * FROM player_vehicles WHERE user_id = ? AND work = 'false'",{ user_id })

        for k,v in pairs(vehicles) do
            local state = ""
            local vehicleOut = exports["guardian-garages"]:vehicleOut(v["plate"])
            if vehicleOut ~= nil then
                state = "Fora"
            elseif v["arrest"] then
                state = "Detido"
            elseif v["dismantle"] then
                state = "Desmanchado"
            else
                state = v["parkedGarage"] == "0" and "Garagem" or v["parkedGarage"]
            end
            
            local vehData = vRP.vehicleData(v["vehicle"])
            local newCar = {
                plate = v["plate"],
                type =  vehData["class"],
                impounded = v["arrest"],
                location = state,
                statistics = {
                    engine = math.floor(v["engine"] / 10 + 0.5),
                    body = math.floor(v["body"] / 10 + 0.5),
                    fuel = v["fuel"]
                },
            }

            newCar.model = tonumber(vehData.hash)
            tempVehicles[#tempVehicles+1] = newCar
        end
    end

    return tempVehicles
end

---Get a specific vehicle
---@param source number
---@param plate string
---@return table? vehicleData
function GetVehicle(source, plate)
end

function IsAdmin(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.hasRank(user_id,"Admin",0)
    end
end

-- COMPANIES APP
function GetJob(source)
    return "unemployed"
end

function RefreshCompanies()
    return {}
end

function cRP.hasPhone()
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local itemAmount = vRP.itemAmount(user_id, Config.Item.Name)
        if itemAmount >= 1 then
            return true
        end
    end

    TriggerClientEvent("Notify",source,"error","Você possui um <b>"..vRP.itemName(Config.Item.Name).."</b>.")
    return false    
end