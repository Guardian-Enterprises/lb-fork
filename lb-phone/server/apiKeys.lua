-- Webhook for instapic posts, recommended to be a public channel
INSTAPIC_WEBHOOK = "https://discord.com/api/webhooks/1297742861076402238/ZUEmuOGjkaNY_ItXKy9fvSBjWYTrH4ETbl7N0E_b-Uo9xcLI4PIL6P4OjpayMvHGEG09"
-- Webhook for birdy posts, recommended to be a public channel
BIRDY_WEBHOOK = "https://discord.com/api/webhooks/1297742971369820160/tzWHtxvDosvDa2yJOFogavvTClmsI9GWA6rwjjks2ecp4T5Jgcz2sk95aBCqEAqtScom"

-- Discord webhook for server logs
LOGS = {
    Default = "https://discord.com/api/webhooks/964020811071627315/xWYLtnw9wokBNchBPQZFejimd9Sgghyb-Z4-Ke3T4zl2oTkODmhEUu8qHKKeIG-d6RjA", -- set to false to disable
    Calls = "https://discord.com/api/webhooks/1297741563106951189/EZCCyDRVtXQwKC9tTHzCLCcwXsRsNgnVf-GbYtULOylQ6k3HgRcJchGirOMqoz1GaP8Y", -- set to false to disable
    Messages = "https://discord.com/api/webhooks/1297741700512350383/Fe6tvd21X9C9YDpEkJe9Wz6QpA0NSCK6wTjt0nZ4Mi7yeRO3XkfcpNfoI48CsvzAIUTw",
    InstaPic = "https://discord.com/api/webhooks/1297741813456568424/_6_400gjU23MM1KRgn6iLg57NyL4UPqBQGPCcU4PWBjJx_AAvaTfbNMLWhrdxQIVa_aG",
    Birdy = "https://discord.com/api/webhooks/1297741895493091369/8O2BHGPMzeZfZB7kgGLm274py7GURkqUnAR64OoVyXxPVzzFwAho5hZj6GxTyVyPYQbt",
    YellowPages = "https://discord.com/api/webhooks/1297742022660329482/MtCww6-fxRxwMUryRdZYuFURGvkjKMU0YcMmDqO-gHo_EsSjdTpbkp9RdXxWoQj2kW0l",
    Marketplace = "https://discord.com/api/webhooks/1297742127509274735/NO3_Tyf5YIPtsxLiFtxdp6MGbtyR4lPYN2tjL6nrrRa7lqeRfETxpJokZ-DAhkpF1IZ5",
    Mail = "https://discord.com/api/webhooks/1297742215115702272/J41SLezeC-L8hFMXxd9UdrkdOflZVZtVJf33vNDdiCnV_EbvkLmN43fK04TU0MMtoeYN",
    Wallet = "https://discord.com/api/webhooks/1297742318723534881/PYglrXuNhAPXoABMSuApLcQgW0qyHAJzX3eHNbXe7I2ANm8lTSvG0qC61omUMPWPghIx",
    DarkChat = "https://discord.com/api/webhooks/1297742400772374611/jx2C3I1yyQYT3VC_xfUvCdgMgpWC4NSIpVnf2CCb3Ywogm2ZXRQiRB41WVPVzWJXFlk8",
    Services = "https://discord.com/api/webhooks/1297742490551455824/oi19aES4O3RU7r3xqRnrSU0s8Z4JCSRBempIegzr8IgmByA8mkJtl7140ffYUB6hWwwt",
    Crypto = "https://discord.com/api/webhooks/1297742565130375272/E9b8sQqLpeFzwl9wNV26m0QoQlqi4IUPXt-S_YzeOudLha4NviX5P82aIpOYQcwAPQGc",
    Trendy = "https://discord.com/api/webhooks/1297742639629860935/PidjnVcLZcR-8o_S2Sn2nwGqQ4kj2c5cd_92uiO9KtQQJEpN-TNsygzF0HCwkezQr1cR",
    Uploads = "https://discord.com/api/webhooks/1297742710798553128/N-O5TKgi32d_wviJnvCNZiUAEtvtkwM2wqSCCy9lerEEzcgO9kV707Z9bNtVzxXD8Jnj" -- all camera uploads will go here
}

DISCORD_TOKEN = nil -- you can set a discord bot token here to get the players discord avatar for logs

-- Set your API keys for uploading media here.
-- Please note that the API key needs to match the correct upload method defined in Config.UploadMethod.
-- The default upload method is Fivemanage
-- We STRONGLY discourage using Discord as an upload method, as uploaded files may become inaccessible after a while.
-- You can get your API keys from https://fivemanage.com/
-- A video tutorial for how to set up Fivemanage can be found here: https://www.youtube.com/watch?v=y3bCaHS6Moc
API_KEYS = {
    Video = "TYTgNks8I4uhB5l8DQ6z6rslMCwkFWh1",
    Image = "TYTgNks8I4uhB5l8DQ6z6rslMCwkFWh1",
    Audio = "TYTgNks8I4uhB5l8DQ6z6rslMCwkFWh1",
}

WEBRTC = {
    -- You can get your credentials from https://dash.cloudflare.com/?to=/:account/realtime/turn/overview
    TokenID = nil,
    APIToken = nil,
}
