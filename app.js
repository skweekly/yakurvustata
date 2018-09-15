const TwitchBot = require('twitch-bot')
let pillNum = 77522
let pillSteal = Math.floor(pillNum)
let currentPills

const Bot = new TwitchBot({
    username : 'berdygaming',
    oauth    : 'oauth:9chop2wdusouwz4webw2vg6uv3nl0z',
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
      Bot.say("!steal " + Math.floor(pillSteal))
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
      pillSteal = Math.floor(pillSteal - (pillSteal / 2))
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

/* Bot.on("message", chatter => {
    if(chatter.message.includes("Top pill hoarders - Naughty inmates..." && chatter.message.includes("berdygaming ("){
        currentPills = str.substring(str.indexOf("berdygaming (") + 1);
        console.log("You are in the Top 10. You have " + currentPills)
*/
