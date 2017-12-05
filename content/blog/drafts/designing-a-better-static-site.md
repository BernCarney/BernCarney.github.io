+++
author = "Bern Carney"
categories = [""]
description = ""
featured = ""
featuredalt = ""
featuredpath = ""
linktitle = ""
title = "Designing a Better Static Site"
type = "post"
draft = "true"

+++

Ever since I got access to the Internet, back in the days of dial-up and AOL, I wanted to be a part of it in one way or another. I've created countless websites, if you want to call most of them that, and never really went anywhere with them. I guess I enjoyed the challenge and learning it more than actually using it. I started with static HTML sites with simple styling and later graduated to building sites in Photoshop, slicing them, and building them off of those slices. Dreamweaver came and went and I eventually used multiple iterations of Geocities, Wordpress, Blogger, and ghost blogs or sites. Here I am, over 15 years later, and I've come full circle and am back to making a static HTML site. Fortunately, it's a lot different than opening up Notepad and trying to align tables for 12 hours.

## Static Site Generators

Enter the modern marvel that is a Static Site Generator (SSD for short). In the latest trend to move back towards serving static sites with only Javascript, CSS, and HTML; static site generators have become very popular. I won't get into the details of all the different generators that are out there, there are a lot, because they all do the same thing in one way or another. They take templates and convert them into a static site that can be hosted just about anywhere with performace that dynamic sites can't touch. Not only are they more performant, but they are also more secure and very easily backed up and/or migrated. If the server hosting your site goes down, you don't have to worry about databases and the like, you just need to move your static files to a new host and you're back up and running in no time. You can even host your site for free on sites like [Github][71c6d423] and [Netlify][ad97d98f] (where this one is hosted).

## Hugo

The static site generator I ended up going with was [Hugo][c639f24c] and decided to host it on [Netlify][ad97d98f] for all it's CDN and automatic-deployment goodness. The reason I chose [Hugo][c639f24c] was because it's being actively developed and it's written in Go; so even in the rare event that my personal site becomes hundreds of posts large, it will still compile in under a minute even on my crappy old laptop. Before, I built my personal site from the ground up with HTML, CSS, and a touch of jQuery. While it accomplished what I was trying to do, it had a few problems that ultimately lead to this version of my personal site. The shortlist, in no particular order...

### Difficult to add content
If I wanted to add experience, skills, or anything for that matter, I couldn't do it without having to double check everything to see if it would break. Also, the more I added, the less maintainable it became. Now, if I want to add a position or skill, it's as easy as adding another list item and forgetting about it. Here's what a job looks like in the data file that feeds my personal site:

```yaml
  position: My Title
  company: The Company
  dates: February 1995 - April 1999
  location: Middle, OfNowhere
  summary: A short summary
  duties:
    - Things
    - That I
    - Did there
```
### Lacked Depth
Part of the reason in having some sort of web presence, is to set yourself apart as well as show a different side that you can't show in a traditional resume. 

  [71c6d423]: https://www.github.com "Github"
  [ad97d98f]: https://www.netlify.com/ "Netlify"
  [c639f24c]: https://gohugo.io/ "Hugo"
