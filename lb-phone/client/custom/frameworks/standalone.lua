if Config.Framework ~= "standalone" then
    return
end

Tunnel = module("vrp","lib/Tunnel")
Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPC = Tunnel.getInterface("vRP")

cRP = {}
Tunnel.bindInterface(GetCurrentResourceName(),cRP)
vSERVER = Tunnel.getInterface(GetCurrentResourceName())


while not NetworkIsSessionStarted() do
    Wait(500)
end

while not LocalPlayer["state"]["Active"] and not LocalPlayer["state"]["onCreate"] do
    Wait(500)
end

loaded = true

function HasPhoneItem(number)
    if not Config.Item.Require then
        return true
    end

    if Config.Item.Unique then
        return HasPhoneNumber(number)
    end

    return vSERVER.hasPhone()
end

function HasJob(jobs)
    return false
end

---Apply vehicle mods
---@param vehicle number
---@param vehicleData table
function ApplyVehicleMods(vehicle, vehicleData)
end

---Create a vehicle and apply vehicle mods
---@param vehicleData table
---@param coords vector3
---@return number? vehicle
function CreateFrameworkVehicle(vehicleData, coords)
end

-- Company app
function GetCompanyData(cb)
    cb {}
end

function DepositMoney(amount, cb)
    cb(false)
end

function WithdrawMoney(amount, cb)
    cb(false)
end

function HireEmployee(source, cb)
    cb(false)
end

function FireEmployee(identifier, cb)
    cb(false)
end

function SetGrade(identifier, newGrade, cb)
    cb(false)
end

function ToggleDuty()
    return false
end
