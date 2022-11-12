# ZViewer - image viewer for JS
ZViewer allows you to enlarge photo to full screen and see it better.

**[DEMO DEMO DEMO DEMO DEMO](https://codepen.io/zgoly/full/OJEmBJR)**

## Features:
 - Fast
 - Light
 - Simple
 - Beautiful
 - Comfortable
 - Free & open source

# Getting started
## Installation
Add this line to your HTML file:
```html
<script src=https://cdn.statically.io/gh/zgoly/zviewer/main/zviewer.js></script>
```
Or if you have downloaded `zviewer.js`:
```html
<script src='/path/to/zviewer.js'></script>
```
## Usage
It's simple - just use `zviewer(image)` function, where `image` can be:
1. Reference to element
2. Link to image

## Examples
Image, when clicked, opens in full screen
```html
<script src=https://cdn.statically.io/gh/zgoly/zviewer/main/zviewer.js></script>

<img onclick='zviewer(this)' src='https://picsum.photos/1920/1080/?random'>
```

<br>

Button, when clicked, opens random image in full screen
```html
<script src=https://cdn.statically.io/gh/zgoly/zviewer/main/zviewer.js></script>

<button onclick='window.zviewer("https://picsum.photos/1080/1080/?random&" + new Date().getTime())'>Random image!</button>
```
