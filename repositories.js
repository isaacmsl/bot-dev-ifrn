const Discord = require('discord.js')
const client = new Discord.Client()
const axios = require('axios')

let debug
let debugErrors
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
    debug = require('debug')('repositories')
    debugErrors = require('debug')('repositories:errors')
}

const { BOT_TOKEN, GUILD_ID, CHANNEL_ID } = process.env

client.on('ready', async () => {
    try {
        const guild = client.guilds.cache.get(GUILD_ID)
        const channel = guild.channels.cache.get(CHANNEL_ID)
        
        const ghResponse = await axios.get('https://api.github.com/search/repositories?q=ifrn+sort:updated')
        const repositories = await ghResponse.data.items

        const recentlyRepo = repositories[0]

        await channel.send(`Contribua para o projeto **${recentlyRepo.name}**\n\n"${recentlyRepo.description}"\n\n**Linguagem**: ${(recentlyRepo.language) ? recentlyRepo.language: 'Não especificada'}\n\n${recentlyRepo.html_url}`)

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