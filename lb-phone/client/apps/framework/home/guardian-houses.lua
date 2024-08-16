if Config.HouseScript ~= "guardian-houses" then
    return
end

RegisterNUICallback("Home",function(data,cb)
    local action = data.action
    if action == "getHomes" then
        local playerHouses = exports["guardian-homes"]:GetPlayerHouses(source)
        local tempHouses = {}

        for k,v in pairs(playerHouses) do
            tempHouses[#tempHouses+1] = {
                owner = v["owner"],
                id = v["id"],
                label = v["name"],
                uniqueId = v["name"],
                locked = exports["guardian-homes"]:houseLocked(v["name"]),
                keyholders = v["owner"] == 1 and exports["guardian-homes"]:getPlayersInHouse(v["name"]) or {}
            }
        end

        cb(tempHouses)
    elseif action == "removeKeyholder" then
        local houseData = data.houseData
        if houseData["owner"] ~= 1 then
            TriggerEvent("phone:sendNotification", {
                app = "Home",
                title = "Residencias",
                content = "Você não pode remover pessoas dessa residencia!",
            })
            return
        end

        TriggerServerEvent("homes:removePlayerFromHouse",houseData["uniqueId"],data["identifier"])
        Wait(500)

        cb(exports["guardian-homes"]:getPlayersInHouse(houseData["uniqueId"]))
    elseif action == "addKeyholder" then
        local houseData = data.houseData
        if houseData["owner"] ~= 1 then
            TriggerEvent("phone:sendNotification", {
                app = "Home",
                title = "Residencias",
                content = "Você não pode adicionar pessoas a esta residencia!",
            })
            return
        end

        TriggerServerEvent("homes:addPlayerToHouse",houseData["uniqueId"],tonumber(data["source"]))
        Wait(500)

        cb(exports["guardian-homes"]:getPlayersInHouse(houseData["uniqueId"]))
    elseif action == "toggleLocked" then
        local houseData = data.houseData

        TriggerServerEvent("homes:lockHouse",houseData["uniqueId"])
        cb(exports["guardian-homes"]:houseLocked(houseData["uniqueId"]))
    elseif action == "setWaypoint" then
        local houseData = data.houseData
        local homeList = exports["guardian-homes"]:homeList()

        SetNewWaypoint(homeList[houseData["uniqueId"]][1],homeList[houseData["uniqueId"]][2])
        cb(true)
    end
end)