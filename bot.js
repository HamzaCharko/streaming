const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Hamza`);
        console.log(`----------------`);

    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
   
const prefix = "-"

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '523159342095269898') return;

if (message.content.startsWith(prefix + 'sp')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'sw')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'sl')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'ss')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});
 


client.login(process.env.BOT_TOKEN);
