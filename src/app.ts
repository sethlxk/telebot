import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import {message} from 'telegraf/filters'
dotenv.config();
const app = new Telegraf(process.env.TOKEN as string);

app.start((ctx, next) => {
  ctx.reply("Hello, welcome to SplitNOW! Type in '/begin' to start!"), next();
});

app.command("begin", (ctx, next) => {
  ctx.reply("Please enter the event detail!"), next();
});

app.use((ctx) => {
  if(ctx.has(message("text"))){
    const eventName = ctx.message.text;
  }
  ctx.reply("Please enter the total amount for this event")
})

app.launch();
