const Discord = require('discord.js')
const client = new Discord.Client()

let debug
let debugErrors
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
    debug = require('debug')('test')
    debugErrors = require('debug')('test:errors')
}

const { BOT_TOKEN, GUILD_ID, CHANNEL_ID } = process.env

client.on('ready', async () => {
    const guild = client.guilds.cache.get(GUILD_ID)
    const channel = guild.channels.cache.get(CHANNEL_ID)
    
    try {
        await channel.send('Testando... testando... Alguém por aí?')

        if (debug) {
            debug(`Enviei uma messagem ao canal ${channel.id} nome ${channel.name}`)
        }
    } catch (error) {
        if (debugErrors) {
            debugErrors(error)
        }
    } finally {
        client.destroy()   
    }    
})

client.login(BOT_TOKEN)