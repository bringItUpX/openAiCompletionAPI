This is an example for using the simple Completion API of openAI ChatGPT - as Node.js Programm in TypeScript.

In the opposite to the Assistant OpenAI Api - with the Completion OpenAI API you have to hold a memory variable in your program that contains the conversation history - by yourself.

With every added new message in the thread (hold in your program) you have to send the whole thread to openAI chatgpt, together with the system prompt.

This means - as longer a thread conversation is - as more Tokens are used by your completion request (every additional new question costs more).

It is just a console program, to be focused on the OpenAi Completion API for involving ChatGPT in this console Question and Answer program.

This console program requires chatgpt to only answer questions related to a bike shop (through the system prompt). During every interaction with ChatGPT the whole system prompt is send every time along with the conversation thread.

Then you download this repo you have to create an additonal file .env in this repo - with your API Key for the ChatGPT OpenAI API.

And to install the required packages type "npm install" in a terminal inside this repo (npm needs to be installed first before this command).

Through the .vscode directory VS Code is instructed to run the TypeScript compiler and run the program on a 'F5' key press in VS Code.