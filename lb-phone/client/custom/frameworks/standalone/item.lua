if Config.Framework ~= "standalone" then
    return
end

---@param itemName string
---@return boolean
function HasItem(itemName)
    local Ped = PlayerPedId()
    if not LocalPlayer["state"]["Active"] or IsPauseMenuActive() or LocalPlayer["state"]["Buttons"] or LocalPlayer["state"]["Commands"] or LocalPlayer["state"]["Handcuff"] or LocalPlayer["state"]["Cancel"] or IsPedReloading(Ped) then
        return false
    end


    return lib.callback.await("lb-phone:server:checkItem", 1000)
end
