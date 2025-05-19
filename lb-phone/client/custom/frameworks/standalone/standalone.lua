if Config.Framework ~= "standalone" then
    return
end

while not NetworkIsSessionStarted() do
    Wait(500)
end

while not LocalPlayer["state"]["Active"] do
    Wait(500)
end

FrameworkLoaded = true
