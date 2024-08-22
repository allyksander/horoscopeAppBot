import { Telegraf, Markup } from 'telegraf';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const WEB_APP_URL = process.env.WEB_APP_URL || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать в horoscopeApp!\nНажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([Markup.button.webApp('Запустить', WEB_APP_URL)]),
  );
});

bot.launch();

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
