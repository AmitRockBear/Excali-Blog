---
title: "Don't Overcomplicate TypeScript"
description: "A quick rant intended to encourage you to use TypeScript."
type: "Webdev"
publishDate: 2023-11-12
---

For those of you who prefer to watch a video I made on my channel regarding this subject:

<iframe class="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/cqud0ew9URg" title="Don't Overcomplicate TypeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

> Don't overcomplicate TypeScript.

In recent discussions with colleagues from my previous job about TypeScript, a recurring narrative has emerged:

- Some have expressed that TypeScript can slow you down.
- Others find TypeScript to be complicated.
- Almost everyone has heard about [a company that recently dropped TypeScript](https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01).

While I understand these concerns, having avoided TypeScript for a while myself. My initial reluctance came from encountering complex tutorials on the web, guiding me through the intricacies of writing complicated generic functions, which portrayed TypeScript as a bother.

However, my journey has led me to a different perspective. TypeScript is not something to be "learned"; it's a tool that you "learn by doing", much like Git. **Git is something you "learn by doing".** The beginning is always challenging; who doesn't remember the first time they used Git and accidentally wiped out their entire codebase with one command, only to discover the existence of `git reflog`?

My goal with this article is to encourage you to just **start using TypeScript**. You don't have to do those generics type gymnastics and spend hours on types. Start small, even by adding a primitive type to a function input, you can prevent errors like `Uncaught TypeError: 'undefined' is not a function`.

> Your goal with TypeScript is to write the least amount of types to help avoid bugs in production.

For those transitioning from statically typed languages, did you know that TypeScript offers auto-complete? It's a remarkable feature and one of the main reasons I appreciate TypeScript. While most people mention that TypeScript helps avoid bugs in production, for me, it goes beyond that; it enhances my overall development experience.
