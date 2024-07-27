import dotenv from 'dotenv';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { readLine } from './inputHelpers.js';
import fs from 'fs';

dotenv.config({ path: '.env' });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
// for Azure OpenAI it would be like this:
//const openai = new OpenAI({
//  baseURL: process.env.AZURE_OPENAI_BASE_URL,
//  defaultQuery: { 'api-version': '2024-05-01-preview' },
//  defaultHeaders: { 'api-key': process.env.AZURE_OPENAI_API_KEY },
//});

const systemPrompt = await fs.promises.readFile('system-prompt.md', { encoding: 'utf-8' });
const messages: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content: systemPrompt,
  },
  {
    role: 'assistant',
    content: 'Hello, how can I help you selecting the correct bike for your needs? Which usecase do you have for your new bike?',
  },
];

while (true) {
  console.log(messages[messages.length - 1].content);

  const userMessage = await readLine('You: ');

  messages.push({
    role: 'user',
    content: userMessage,
  });


// for OpenAI completion API it would be like this:
  const response = await openai.chat.completions.create({
    messages,
    model: 'gpt-4o',
  });
  // for Azure OpenAI Completion API it would be like this:
  //const response = await openai.chat.completions.create({
  //  messages,
  //  model: 'gpt-4o',
  //}, {
  //  path: `openai/deployments/${process.env.MODEL}/chat/completions`
  //});

  messages.push({ role: 'assistant',
    content: response.choices[0].message.content
  });
}