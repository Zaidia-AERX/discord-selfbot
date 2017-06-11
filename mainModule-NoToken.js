//Variables and Constants located here.
const Discord = require("discord.js");
const selfBot = new Discord.Client();
const jsonRead = require("fs");
const prefixBot = ".";
const selfToken = "TokenHere";

//SelfBot Check if it's on
selfBot.on('ready', () =>{
	console.log("MiX Self-Bot has been activated!");
})


//Functions

let selfbotResponses = {
	"lenny": "( ͡° ͜ʖ ͡°)",
	"lol": "l0l"
}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

//Commands

selfBot.on('message', message => {
	if(selfbotResponses[message.content]) {
		message.edit(selfbotResponses[message.content]);
	}
});


selfBot.on('message', message => {
	if (message.author.id === "156914300718415872") {
		if(message.content.startsWith(prefixBot + "embed")) {
			let args = message.content.split(" ").slice(0); 
			let description = args.slice(1).join(" ");
			message.channel.sendEmbed({
				author: {
					name: selfBot.user.username,
					icon_url: selfBot.user.avatarURL
				},
				description: `${description}`,
				timestamp: new Date(),
				footer: {
					text: '© MiX'
				},
				color: 3447003
			});
		}
	}
});

selfBot.on('message', message => {
	if (message.author.id === "156914300718415872") {
	  const evalargs = message.content.split(" ").slice(1);

	  if (message.content.startsWith(prefixBot + "eval")) {
	    try {
	      var code = evalargs.join(" ");
	      var evaled = eval(code);

	      if (typeof evaled !== "string")
	        evaled = require("util").inspect(evaled);

	      message.channel.sendCode("xl", clean(evaled));
	    } catch (err) {
	      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	    }
	  }
	}
});

selfBot.on('message', message => {
	if (message.author.id === "156914300718415872") {
		if (message.content.startsWith(prefixBot + "id")) {
			message.channel.sendMessage ("```His ID is: " + message.mentions.users.first().id + "```")
		}
	}
});

selfBot.on('message', message => {
	if (message.author.id === "156914300718415872") {
		if (message.content.startsWith(prefixBot + "kick")) {
			if (message.channel.type === 'dm') return;
			const userMentioned = message.mentions.users.first();
				message.channel.sendEmbed({
					author: {
						name: selfBot.user.username,
						icon_url: selfBot.user.avatarURL
					},
					description: `${userMentioned} has been kicked.`,
					timestamp: new Date(),
					footer: {
						text: '© MiX'
					},
					color: 3447003
				});
			message.guild.member(userMentioned).kick();
		}
	}
});

selfBot.on('message', message => {
	if(message.author.id === "156914300718415872") {
		if (message.content.startsWith(prefixBot + "trigger")) {
			message.delete();
		}
	}
});

selfBot.on('message', message => {
	if (message.author.id === "156914300718415872") {
		if(message.content === ".ping") {
			message.edit("```" + selfBot.ping + " ms" + "```")
		}
	}
});

//SelfBot Login Token
selfBot.login(selfToken);
