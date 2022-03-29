# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./img/screenshot.jpeg)

### Links

- Live Site URL: [See the demo on Github Pages](https://jimi-s-frontend-mentor-cs.github.io/Ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS
- Mobile-first workflow
- [Font Awesome](https://fontawesome.com) for Icons

### What I learned

I learned how to customize invalid inputs, and I also further explored pseudo elements and flexbox design, especially the ```place-items``` CSS selector to align
a container in the middle of the page.

I also used SASS to better improve my knowledge of this CSS pre-processor. I tried to use the ```@use``` directive, as well as some ```@mixins``` inside some abstracts and partials css, however I haven't figure out how to make them work :(

### Continued development

I still need to learn more about SASS and flexbox in general, so I will continue to research new content about those topics

### Useful resources

- [Kevin Powell](https://www.youtube.com/kepowob) - This amazing guy helped me A TON getting me back into Web Development, refreshing by knowledge and also teaching me new stuffs and tricks (especially with CSS and flexbox).
- [This article on Progress Telerik](https://www.telerik.com/blogs/building-html5-form-validation-bubble-replacements) - This article explains how to remove the default validation bubble message
- [This Stack Overflow answer](https://stackoverflow.com/a/23414620/2695796) - This answer shows how to use the ```:invalid``` CSS selector to customize an invalid input

## Author

- Frontend Mentor - [@JimiIT92](https://www.frontendmentor.io/profile/JimiIT92)

## Acknowledgments

Big shoutout to [Kevin Powell](https://www.youtube.com/kepowob), [GANI](https://stackoverflow.com/a/23414620/2695796), and [David Prieto](https://stackoverflow.com/a/33239790/2695796) for sharing their resources to the public, so other developers like me can learn new stuff!
