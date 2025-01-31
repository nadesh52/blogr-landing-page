# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Overview

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

Major part of this subject is learned how to adjust background image.
Code snippets example see below:

```tsx
<div
  className="h-[600px] bg-intro-mobile bg-[1324px_] bg-mobile-origin bg-no-repeat desktop:bg-intro-desktop desktop:bg-[3175px_] desktop:bg-desktop-origin"
>...</div>
```

```json
{
  "backgroundPosition": {
    "desktop-origin": "top -1340px left -440px",
    "mobile-origin": "top -250px left -320px",
    "desktop-circle": "top -500px left -214px",
    "mobile-circle": "top -220px left -100px"
  }
}
```
