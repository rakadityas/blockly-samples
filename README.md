# Tree Generator Using Blockly

## Purpose

This app show cases how Blockly is can be utilized for generating tree based (in this case DFS based) user interfaces. Merely a very rough prove of concept, this code does not offers running functionality, only visualization.

## Quick Start

1. [Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) npm if you haven't before.
2. Run `npm install` to install the required dependencies.
3. Run `npm run start` to run the development server and see the app in action.
4. If you make any changes to the source code, just refresh the browser while the server is running to see them.

## Structure

- `package.json` contains basic information about the app. This is where the scripts to run, build, etc. are listed.
- `package-lock.json` is used by npm to manage dependencies
- `webpack.config.js` is the configuration for webpack. This handles bundling the application and running our development server.
- `src/` contains the rest of the source code.
- `dist/` contains the packaged output (that you could host on a server, for example). This is ignored by git and will only appear after you run `npm run build` or `npm run start`.

### Source Code
#### General
- `index.html` contains the skeleton HTML for the page. This file is modified during the build to import the bundled source code output by webpack.
- `index.js` is the entry point of the app. It configures Blockly and sets up the page to show the blocks, the generated code, and the output of running the code in JavaScript.
- `serialization.js` has code to save and load the workspace using the browser's local storage. This is how your workspace is saved even after refreshing or leaving the page. You could replace this with code that saves the user's data to a cloud database instead.

#### Important Ones
- `blocks/text.js` this is where your custom blocks specifications declared. Generated using https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
- `generators/javascript.js` once the block has been placed, generator script will run to parse block's data into code. Generated using https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
- `toolbox.js` final step, for attaching your created blocks to the UI. Once attached you can see your created blocks there.

### Visualization Example
This visualization is to reflect the tree and blockly implementation.
- Uses DFS traversal
- From left to right AND operation.
- From top to bottom OR operation.

#### Tree Node
![Screenshot 2024-02-18 at 4 08 37 PM](https://github.com/rakadityas/blockly-tree-generator/assets/37207252/a67b3731-ade4-4470-ba21-56552926930d)

#### Blockly Example
<img width="992" alt="Screenshot 2024-02-18 at 3 35 57 PM" src="https://github.com/rakadityas/blockly-tree-generator/assets/37207252/f96da2d2-7a24-438e-865c-429e878007c2">
