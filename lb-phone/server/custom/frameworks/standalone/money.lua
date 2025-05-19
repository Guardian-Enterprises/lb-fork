if Config.Framework ~= "standalone" then
    return
end

local vRP = exports["vrp"]:getvRP()

---Get the bank balance of a player
---@param source number
---@return integer
function GetBalance(source)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return exports["guardian-bank"]:GetBankSync(user_id)
    end
    return 0
end
---Add money to a player's bank account
---@param source number
---@param amount integer
---@return boolean success
function AddMoney(source, amount)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        exports["guardian-bank"]:AddBank(user_id,amount,"Celular")
        return true
    end
    return false
end

---Remove money from a player's bank account
---@param source number
---@param amount integer
---@return boolean success
function RemoveMoney(source, amount)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if exports["guardian-bank"]:PaymentBankSync(user_id,amount,"Celular") then
            return true
        end
    end

    TriggerClientEvent("Notify",source,"vermelho","Dinheiro insuficiente.",5000)
    return false
end