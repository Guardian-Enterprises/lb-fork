if Config.Framework ~= "standalone" then
    return
end

local vRP = exports["vrp"]:getvRP()

---@param source number
---@return VehicleData[] vehicles
function GetPlayerVehicles(source)
    local tempVehicles = {}

    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local vehicles = exports["oxmysql"]:executeSync("SELECT * FROM player_vehicles WHERE user_id = ? AND work = 0",{ user_id })

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

---@param source number
---@param plate string
---@return table? vehicleData
function GetVehicle(source, plate)
    return nil
end
