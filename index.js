require("dotenv").config();
const Discord = require('discord.js');
const token = process.env.TOKEN;
const {GatewayIntentBits} = require('discord.js');

const client = new Discord.Client({
  intents:[
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
})

client.on('ready',async ()=>{
  console.log(`Hello ${client.user.tag}`)
})

client.on('messageCreate', async (message)=>{
  console.log(message);
  if(message.content == "hi"){
    message.reply("hello");
  }
  if(message.content == "how are you"){
    message.reply("fine");
  }
  if(message.content == "goodbye"){
    message.reply("goodbye, see you soon!");
  }
})

client.login(token);