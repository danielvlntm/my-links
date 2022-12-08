# My Links

[My links](https://danielvlntm.github.io/my-links/) is a simple page that groups social links for social medias. Inspired by Rocketseat Rocket Links project.

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Links](#links)
- [References](#references)

## Overview

My links is a simple page that do social linking similarly to linktree.

## My process

### Built with

- Semantic HTML5
- CSS
- Flexbox
- Responsive design with media queries
- Javascript
- Fontawesome Icons

### What I learned

In this project I've implemented the light theme (dark is the default) changing elements background color and text color using Javascript.

```js
function transformKey(key) {
  return '--' + key;
}

function changeColors(colors) {
  Object.keys(colors).map(key => {
    html.style.setProperty(transformKey(key), colors[key]);
  })
}
```

### Links

You can check the project online [here](https://danielvlntm.github.io/my-links/)!

### References

- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Linktree](https://linktr.ee/)
- [My Links](https://danielvlntm.github.io/my-links/)

