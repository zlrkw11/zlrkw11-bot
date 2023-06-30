
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


Client.login("MTEyMjQ5OTIzMzUzOTQ0NDc3Ng.G4YYN4.Ug2-O3sUR5_lRE4SytCtQN_1ZlNsI8cjyP2sPo");

//when a message is created/posted
Client.on("messageCreate", (message)=>{
   //lowercase message content
   const userInputText = message.content.toLowerCase();

   //only msg by user will have the tick
   if (message.author.bot) {return};

   console.log("A new message is written!");

   //only allow non-bots to perform any code execution
   if (message.author.bot == false) {
      //message.reply("Hello world! You're not a bot! STFU!")
   }

   //commands
   if (userInputText == "!commands" || userInputText == "!help"){
      message.reply("This bot operates on the following commands: !help !commans !age !math")
   }

   //basic math functions
   if(userInputText == "!math"){
      message.reply("5 + 2 - 1 * 5/2 - 4 + 7 * 3 % 5 = " + (5 + 2 - 1 * 5/2 - + 7 * 3 % 5));
   }

   //server age and member age in server
   if (userInputText == "!age") {
      //console.log(message.channel)
      console.log(message.guild.createdTimestamp); //ms since 1970/01/01
      console.log(message.guild.createdAt); //date when server created
      message.reply("Server was created at " + message.guild.createdAt.toString()); //date to string
      console.log(new Date(message.guild.createdTimestamp).toString()); //converted to actual date

   

   //fetch a guild members returns a promise.
      message.guild.members.fetch().then(
         (value) => {
            //console.log(value);
            //print the id of the author of msg
            value.forEach(user => { //user = guild.member     2nd user = property   id=class
               console.log(user.user.id + " " + message.author.id); //every user + author user
               console.log(user.joinedTimestamp); //print joined timestamp
               let date = new Date(user.joinedTimestamp); //ms --> date first

               message.reply(user.displayName + " joined at " + date.toString()); //date --> string
            });
         }, 
         (error) => {
            console.log(error);
         }
      );

   };
   
});