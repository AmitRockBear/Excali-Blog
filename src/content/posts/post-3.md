---
title: "The One 'Gotcha' of Tailwind Dynamic Class Names"
description: "One thing I wish I knew before trying to write a dynamic class using Tailwind"
type: "Coding"
publishDate: 2023-11-01
---

**_Disclaimer:_** This post is intended for individuals who are new to Tailwind. If you have extensive experience with Tailwind, the content may seem familiar to you.

While building this blog, I stumbled upon a problem when trying to create a chip component. For no particular reason, I decided that every chip would have a random color. Well, that sounds easy; I can generate a random color name and use it like this:

```astro
<div class={`bg-${randomColor}-400 text-${randomColor}-900 (...more CSS classes)`}>
  {chipText}
</div>
```

However, it turns out that this approach doesn't work. After spending a couple of hours debugging my app and searching the web, I couldn't figure out why my Chip component didn't have any color applied to it. The weirdest thing was that when inspecting the component in Chrome, it did include the class names:

![Inspect Chip](/images/posts/post-3/inspect.PNG)
![Chip With No Style](/images/posts/post-3/no-style-chip.PNG)

This made me wonder if the class did not exist. As Tailwind states in its documentation:

> "Tailwind CSS is incredibly performance focused and aims to produce the smallest CSS file possible by only generating the CSS you are actually using in your project."

### Tailwind's Dynamic Class Names

Digging through the documentation I finally found [this section of the documentation](https://tailwindcss.com/docs/content-configuration#dynamic-class-names). It turns out that since Tailwind generates the CSS you actually need at build time, it can't tell that the `randomColor` variable is used in the "construction" of a class name. As a result, it doesn't generate the classes "constructed" using the `randomColor` variable, leading to the problem I encountered.

#### So How Can This Problem Be Solved?

Well, it's actually quite simple, according to the official documentation:

> "The most important implication of how Tailwind extracts class names is that it will **only** find classes that exist as **complete unbroken** strings in your source files."

This means that instead of generating the `randomColor` variable and "constructing" a class name with it, all I had to do was generate the value of a `randomBg` variable randomly from an array of unbroken Tailwind background color class names, and similarly generate the value of a `randomTextColor` variable from an array of unbroken Tailwind text color class names. This would make our code look like this:

```astro
<div class=`${randomBg} ${randomTextColor} (...more css classes)`>
  {chipText}
</div>
```

#### Is There Any Other Way?

Apparently, there is. According to a comment I found on Stackoverflow while writing this article, you can simply add the unbroken strings of Tailwind class names you want to use as comments somewhere in your code. This will cause Tailwind to extract those classes at build time. However, I didn't find this approach quite appealing since it makes your website rely on comments in your code, which is a bit unusual.

### My Chip Component

```ts
---
interface Props {
  text: string
}

const TAILWIND_COLORS = [
  {
    background: "bg-slate-400",
    textColor: "text-slate-900",
  },
  {
    background: "bg-gray-400",
    textColor: "text-gray-900",
  },
  {
    background: "bg-zinc-400",
    textColor: "text-zinc-900",
  },
  {
    background: "bg-neutral-400",
    textColor: "text-neutral-900",
  },
  (... More objects)
]

const { background, textColor } =
  TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)]

const { text } = Astro.props
---

<div
  class=`${background} ${textColor} (...more css classes)`
>
  {text}
</div>

```

#### Future Plans

- Move the `TAILWIND_COLORS` variable to another file that is more "global". For now, it doesn't bother me since it is the only file that uses this kind of array.
- Generate same random color for the same chipText appearing in multiple places on this blog.
