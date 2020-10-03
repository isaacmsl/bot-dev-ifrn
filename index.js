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

client.on('ready', () => {
    const guild = client.guilds.cache.get(GUILD_ID)
    const channel = guild.channels.cache.get(CHANNEL_ID)

    try {
        channel.send('Ainda não consigo acessar o Github :cry: Por favor, me ajude contribuindo em https://github.com/isaacmsl/bot-dev-ifrn')

        if (debug) {
            debug(`Enviei uma messagem ao canal ${channel.id} nome ${channel.name}`)
        }
    } catch (error) {
        if (debugErrors) {
            debugErrors(error)
        }
    }
})

client.login(BOT_TOKEN)