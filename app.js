const TwitchBot = require('twitch-bot')
let pillSteal = 7802

if(pillSteal % 2 !== 0){
  Math.floor(pillSteal)
}

const Bot = new TwitchBot({
    username : 'berdygaming',
    oauth    : 'oauth:r97suc9ce2xz75lygkuy31g21g59z4',
    channels  : ['mushytales']
  })
  console.log(Bot)

Bot.on("join", channel => {
  console.log("Joined channel: ${channel}")
  }
)

Bot.on("err", err => {
  console.log(err)
})

Bot.on("message", chatter => {
  if(chatter.message.includes("Everyone that escaped has been caught and returned to The Asylum...Let's hope no-one tries to !runaway again.")){
    setTimeout(function(){
      Bot.say("!runaway")
      console.log("You participated in a !runaway")
    }, 12000
   )

   }

})

Bot.on("message", chatter => {
  if(chatter.message.includes("The coast is clear. Someone can try to !steal (amount).")){
    setTimeout(function(){
      Bot.say("!steal " + pillSteal)
      console.log("You participated in a !steal")
    }, 12000
   )

   }

})

/*Bot.on("message", chatter => {
  if(chatter.message.includes("!pillowfight")){
    setTimeout(function(){
      Bot.say("!pillowfight")
    }, 12000
   )

   }

})
*/
Bot.on("message", chatter => {
  if(chatter.message.includes("Here's what happened...") && chatter.message.includes("berdygaming")) {
    pillSteal = pillSteal + (pillSteal / 2)
    console.log("You won the !steal")
  }
  })

Bot.on("message", chatter => {
  if(chatter.message.includes("Here's what happened...") && !chatter.message.includes("berdygaming")){
      pillSteal = pillSteal - (pillSteal / 2)
      console.log("You lost the !steal")
  }
})

Bot.on("message", chatter => {
  if(chatter.message.includes(" It's over. There are pills everywhere.") && chatter.message.includes("berdygaming")){
      console.log("You won the !runaway")
  }
})

Bot.on("message", chatter => {
  if(chatter.message.includes(" It's over. There are pills everywhere.") && !chatter.message.includes("berdygaming")){
      console.log("You lost the !runaway")
  }
})
