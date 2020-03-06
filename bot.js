const botconfig = require("./botconfig.json")
const Discord = require("discord.js")
const bot = new Discord.Client()
bot.login(botconfig.token)
bot.on("message", async message => {
	if(message.channel.type === "dm") return
	let messageArray = message.content.split(" ")
	let cmd = messageArray[0]
	let args = messageArray.slice(1)
while(true)
	return message.channel.send(`@everyone`)
})