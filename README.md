# Invoiced

A React web application that allows users to create, manage, and track invoices. Features include responsive design, form validations, draft/pending/paid invoice status filtering, light and dark mode, yearly report and localStorage integration for data persistence.

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### Features

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode

### Screenshot

![](./src/assets/images/preview.jpg)

### Links

- [Repo](https://github.com/diaasaur/invoiced)
- [Live](https://invoiced-gamma.vercel.app)

## My process

### Built with

- React
- CSS Modules + PostCSS (custom media queries)
- [React Hook Forms](https://www.react-hook-form.com)
- [Zustand](https://zustand-demo.pmnd.rs) lightweight state management 🐻
- [Nivo](https://nivo.rocks) for pie and line chart
- [Radix UI Primitives](https://www.radix-ui.com) for headless accessible components (Select, Dialog, Popover, Checkbox)

### What I learned

rhf, nivo, zustand and radix-ui were new to me and I had so much fun playing around with them :3 Used CSS variables for light/dark mode and can't help but wonder how messy it would be maintaining so many variables for each mode in a big project.

### Continued development

There are so many things to make this project even better:

- Import/Export Invoices to/from a file.
- A full blown dashboard with weekly/monthly/yearly dataviz. (I just did yearly overview for now) + option to download the report
- Make nivo charts accessible? Expore how to even do that T^T
- Making this a fullstack app ✨

### Useful resources

- [So you think you can build a Dropdown](https://www.youtube.com/watch?v=pcMYcjtWwVI) - Stumbled across this and went with radix-ui lol

## Acknowledgments

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
