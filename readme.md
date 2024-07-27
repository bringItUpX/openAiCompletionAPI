This is an example for using the simple Completion API of openAI ChatGPT - as Node.js Programm in TypeScript.

In the opposite to the Assistant openAI Api - with the Completion API you have to hold a memory variable in your programm that contains the conversation histoy - by yourself.

With every added new message in the thread (hold in you programm) you have to send the whole thread to openAI chatgpt, together with the system prompt 

This means - as longer a thread conversation is - as more Tokens are used by your completion request (every additional new question costs more).

It is just a console program, to be focused on the OpenAi Completion API for involving ChatGPT in this console Question and Answer program.

This console program requires chatgpt to only answer questions related to a bike shop (through the system prompt). During every interaction with ChatGPT the whole system prompt is send every time along with the conversation thread.