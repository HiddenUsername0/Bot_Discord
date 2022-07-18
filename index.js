const{ Client } = require("discord.js");
const client = new Client({intents: 1}); //look at intents calculator
const{ Token } = require("./config.json");

client.once("ready", () => {
    console.log("Bot is online!");
    client.user.setActivity("I am Kiwi Flip's bot", {type: "WATCHING"})
});

client.login(Token);

client.on("messageCreate", message => {
 if (message.content === "Hello") {
   message.reply(`Hello ${message.author.username}`);
 }
});