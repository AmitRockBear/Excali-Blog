---
title: "SSG vs SPA vs SSR"
description: "A quick overview of SSG, SPA, and SSR"
type: "Webdev"
publishDate: 2023-11-05
---

For those of you who prefer to watch a video I made on my channel regarding this subject:

<iframe class="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/j-zylOoX80g" title="SSG vs SPA vs SSR In 6 Minutes!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

### SSG - Static Site Generation

With this approach, the server serves the client with the page's pre-rendered HTML file that was completely rendered at build time. The page doesn't use Javascript and, therefore, is not interactive (static).

#### Advantages:

- The client served with a fully rendered page very quickly.

#### Disadvantages:

- The page is not interactive.

#### Diagram:

![SSG](/images/posts/ssg-vs-spa-vs-ssr/SSG.PNG)

#### When should I use this rendering method?

SSG is mostly used for sites where content doesn't change very often like blog or documentation sites.

### SPA - Single Page App

With this approach, the server serves the client with a very 'shallow' HTML, as seen in Create-React-App's default HTML file.:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Well, that looks like a very empty HTML file, so what's the catch?

With this approach, the content of the page is generated using Javascript, **which runs on the client**.

#### Disadvantages:

- JavaScript is one of the slowest assets that you can load per-byte, which means that our clients may see a blank page for an extended period, especially if their internet connection is slow.
- Web crawlers, which are used by search engines to determine which sites to recommend, do not execute JavaScript on your site. As a result, they will see a blank page and, therefore, will not recommend your site.

#### Diagram:

![SPA](/images/posts/ssg-vs-spa-vs-ssr/SPA.PNG)

#### When should I use this rendering method?

SPA is mostly used for highly interactive sites that don't have a lot of content, much like [ExcaliDraw](https://excalidraw.com/), the site I used for creating the diagrams and the video above.

### SSR - Server Side Rendering

With this approach, the server loads and then runs the JavaScript before serving it to the client, which means our clients will see content much earlier than they would with SPA. The tradeoff made here is that after being served with the site's content, the client has to load and then run the JavaScript as well so that the page will become interactive.

#### Advantages:

- Compared to SPA, the client sees content relatively faster using this rendering method.
- Compared to SPA, web crawlers will be served with the site's content, increasing the likelihood that your site will be recommended by the search engine.

#### Disadvantages:

- It takes a bit longer to fully render the page (since JavaScript is being loaded twice), but usually, it's a reasonable tradeoff to make.

#### Diagram:

![SSR](/images/posts/ssg-vs-spa-vs-ssr/SSR.PNG)

#### When should I use this rendering method?

SSR is mostly used by sites that aren't highly interactive and do have static content.
