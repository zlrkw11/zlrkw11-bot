
//discord.js node module
const Discord = require("discord.js");

const Client = new Discord.Client({
   intents: [
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.Guilds
   ], partials: [
    Discord.Partials.Message,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
    Discord.Partials.User,
    Discord.Partials.GuildScheduledEvent
   ]
});

//define a ready event when bot online 
Client.on("ready", (client) => {
   console.log("This bot is now online " + client.user.tag);
});


Client.login("MTEyMjQ5OTIzMzUzOTQ0NDc3Ng.GCv0ST.z-PQLKMnQx_TeWWnK-CJDzDibPv03k8sBum3Sw");

//L49 messages
Client.on("messageCreate", (message)=>{
   //lowercase message content

   //only msg by user will have the tick
   if (message.author.bot) {return};

   console.log("A new message is written!");

   //only allow non-bots to perform any code execution
   if (message.author.bot == false) {
      message.reply("Hello world! You're not a bot! STFU!")
   }
});