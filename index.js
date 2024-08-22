import { Telegraf, Markup } from "telegraf";
import "dotenv/config";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать в horoscopeApp!\nНажмите на кнопку ниже, чтобы запустить приложение",
    Markup.keyboard([
      Markup.button.webApp("Запустить", process.env.WEB_APP_URL),
    ])
  );
});

bot.launch();
