# Frontend Mentor - Huddle landing page with a single introductory section with Vue Js and

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Desktop Preview](./screenshots/desktop.png)
![Mobile Preview](./screenshots/mobile.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/huddle-landing-page-with-a-single-introductory-section-with-vue-js-and-ItGJXmCbrU)
- Live Site URL: [QR Code Component](https://ndro.github.io/huddle-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- [Vue Js](https://vuejs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Vite](https://vitejs.dev/) - Build Tool

### What I learned

Tailwind CSS come with much default value that we can use in the project. But customization in tailwind is easy. Custom as global variable or locally.

This is example for global value, we can add in the config:

```js
tailwind.config.js

theme: {
  extend: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem', // sm
        md: '2rem',
        lg: '1rem'
      }
    },
    colors: {
      'soft-magenta': 'hsl(300, 69%, 71%)'
    },
    fontFamily: {
      'heading': ['Poppins', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
    }
  },
}
```
or implement locally
```html
<p class="text-[15px] text-[hsl(218, 44%, 22%)]">
  This page content
</p>
```


## Author

- Frontend Mentor - [@ndro](https://www.frontendmentor.io/profile/ndro)
- Twitter - [@ndroTB](https://www.twitter.com/ndroTB)
