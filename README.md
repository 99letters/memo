# 🎨 AI Memo for Figma

someone adviced me need.
memo ai test now.ERROR NOW.
Added "Build AI" button to summarize entered text.
need API KEY. This is test prototype for figma community help form.
https://forum.figma.com/t/error-in-plugin-implementation-using-open-ai-api/62968

![bca5ca85f48033ccbac452ace3de021b438e8148](https://github.com/99letters/memo/assets/75833079/a4b2ab2c-5528-47e8-929a-9bb1384593ac)

(Hmm, I'm continuing to develop Figma plugins. We created a "Build AI" button that allows you to summarize the text you enter using Open AI's API. I tried setting the API endpoint according to the Open AI documentation, but an error occurs. Is it possible for someone kind to tell me?)

--------------------------------------------------------------------------------------------------

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/plugin-quickstart-guide/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
