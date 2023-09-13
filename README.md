# Interactive Video Intro

## Getting Started

This project was initialized with [vite.js](https://vitejs.dev/) using the command `pnpm create vite video-test`. It also has [prettier](https://prettier.io/) setup for autoformatting in [VSCode](https://code.visualstudio.com/).

Run the following commands to start the application:

```
pnpm install
pnpm dev
```

## Build

To build the project run `pnpm build`, which will create a list of files inside the `dist` folder.

## HTML

All the HTML exists inside [index.html](./index.html).

## JavaScript

The scripts are initialized from [main.js](./main.js).
You may notice commented out `console.logs`` for easier debugging.
The code relies on onTimeUpdate listener for the video, while keeping track of current video info just before the video starts playing.

## CSS

All CSS exists inside [style.css](./style.css).
I left some styling that were provided by vite.js by default since it looks more refined than no styling.
