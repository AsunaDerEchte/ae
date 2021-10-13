//Start

const Discord = require("discord.js")


const client = new Discord.Client()

const config = require("./config.json")

const token = config.token

client.on("ready", () => {

    console.clear()

    console.log("ok ")
    console.log(" ")

    
    client.user.setActivity("😇", {
        name: "a",
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=Z8gE8R0OneY"

    });


    
})

client.login(token)