# ipress

Convert Markdown Files to full HTML pages, this utility wraps your HTML generated markdown with a full HTML page with title, link to a style.css page and a div that wraps your markdown generated HTML with a wrapper id.

## Styles

You can copy any of the styles from http://markedstyle.com/styles to style your markdown, or you can create your own styles by creating your own style.css file.

## Why

I wanted to create a CLI that allows me to publish a blog article either to `dat` or `now`.

> I while back there was a blogger who shared an idea of creating a different color scheme per article, and I liked that, so this is my attempt to make it a simple process.

## Usage

```
npm install ipress -g
echo '# Hello World' > example.md
ipress example.md > example.html
```

## Other Tools

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

- Dat Archive

Ship article to the P2P Web

```
npm i dat -g
dat share .
```

## Contributing

All bug fixes are welcome

## Thank you

- JavaScript Community
- NodeJS Community
- marked Creators and Contributors
- ejs Creators and Contributors
