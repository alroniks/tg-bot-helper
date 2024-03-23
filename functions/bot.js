const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

const messages = {
  "donate": "Каманда, якая паказвае тэкст пра данаты",
  "knigi": "Каманда, што піша пра кнігі",
  "suviaz": "Каманда для сувязі",
};

Object.keys(messages).forEach(function(command) {
  console.log(`Received '${command}'' command`);
  bot.command(command, async (ctx) => await ctx.reply(messages[command]));
});


// bot.start(ctx => {
//   console.log("Received /start command")
//   try {
//     return ctx.reply("Вітаю! Гэта бот і ён прызначаны, каб вітацца!")
//   } catch (e) {
//     console.error("error in start action:", e)
//     return ctx.reply("Error occurred")
//   }
// })

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}
