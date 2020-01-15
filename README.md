---
title: ipress - markdown to web page
description: create web pages using markdown
---

## ipress

ipress is a command-line interface that focuses on simplicity when creating web pages using markdown and front-matter. You can use it to quickly get a simple post, or you can use it to build a static driven blog or simple web site. 

> Don't know what markdown is? Check out https://daringfireball.net/projects/markdown/
>
> It is a simple text language that focuses on creating content for html pages.

### Prequesites

* [NodeJS](https://nodejs.org)
* Text Editor - RECOMMENDED [VSCode](https://code.visualstudio.com[)

### Getting Started

Install `ipress`

```
npm install -g ipress
```

Create a simple markdown file called `index.md`

```
---
title: My First Page
---

# My First Web Page

This is a sample markdown page
```

Use `ipress` to build your html page

```
ipress index.md > index.html
```

Open in your web browser

```
open index.html
```

### Deploying Options

* [RECOMMENDED] Zeit - zeit.co/now

* Netlify - https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git

* Surge - https://surge.sh

### Styles

When you build your markdown files, you can create a `style.css` file that is configured to be the css file used to style your generated html file. There is a sister project designed to make it easy to add styles to your pages. Check out https://github.com/twilson63/istyle


### Other Tools

- Spell Checker

Spell Check your article

```
npm i spellchecker-cli -g
spellchecker --files example.md
```

- Write Good

Grammar checking your article

```
npm i write-good -g
write-good example.md
```

### HTML Headers

When creating a post you may want to setup the title of the site, and a description. You can also add open graph resources like an image.

```
---
title: My Web Page Title
description: My description for the web page
image_url: https://fillmurray.com/300/300
image_alt: Bill Murray
---
```

This html headers adds nice data when users post the links to social media sites.

## Contributing

PULL Requests welcome

## Thank you

- JavaScript Community
- NodeJS Community
- marked Creators and Contributors
- ejs Creators and Contributors
