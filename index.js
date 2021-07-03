const { Telegraf } = require("telegraf");
const bot = new Telegraf("1736724394:AAE9OK9oLUydZ4DRj2Tx0QEbp6GwSxu6Xws");
var gima1 = Math.floor(Math.random() * 10) + 1;
bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, "hey YOu,let's talk dirty with me", {});
});

bot.hears("sendpic", (ctx) => {
  console.log(ctx.from);
  let animalMessage = `want some pic of mine bae!`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "gima",
            callback_data: "gima",
          },
        ],
        [
          {
            text: "mine",
            callback_data: "mithi",
          },
        ],
        [
          {
            text: "somenudes",
            callback_data: "somenudes",
          },
        ],
      ],
    },
  });
});

//method that returns image of a dog

bot.action("gima", (ctx) => {
  var gima1 = Math.floor(Math.random() * 21) + 1;
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "gima/" + gima1 + ".jpg",
  });
});

bot.action("mithi", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "mithi/1.jpg",
  });
});

bot.action("somenudes", (ctx) => {
  var some1 = Math.floor(Math.random() * 5) + 1;
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "somenudes/" + some1 + ".png",
  });
});

bot.hears("yeahbae", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "mithi/1.jpg",
  });
});

bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.hears("i wanna fuck u", (ctx) => ctx.reply("ok fuck me when u want"));
bot.hears("ilu", (ctx) => ctx.reply("i luv u too bae"));
bot.hears("i want a kiss", (ctx) => ctx.reply("ok chick par kar lena"));
bot.hears("can i kiss your boob", (ctx) =>
  ctx.reply("aap ka hi to hai sabkuch")
);

bot.launch();
