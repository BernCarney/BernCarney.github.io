+++
author = "Bern Carney"
categories = ["Hugo","Static Site","Github","Netlify","Development","Design"]
description = "Updating my personal site using a static site generator and my thoughts on it"
featured = "programming.jpg"
featuredalt = "Programming Picture"
featuredpath = "date"
linktitle = ""
title = "Designing a Better Static Site"
type = "post"
date = "2017-12-05"

+++

Ever since I got access to the Internet, back in the days of dial-up and AOL, I wanted to be a part of it in one way or another. I've created countless websites, if you want to call most of them that, and never went anywhere with them. I guess I enjoyed the challenge and learning it more than actually using it. I started with static HTML sites with simple styling and later graduated to building sites in Photoshop, slicing them, and building them off of those slices. Dreamweaver came and went and I ended up using Geocities, Wordpress, Blogger, and ghost blogs or sites. Here I am, over 15 years later, and I've come full circle and am back to making a static HTML site. Lucky for me, creating a static site is a lot different than opening up Notepad and trying to align tables for 12 hours now.

# Static Site Generators

Enter the modern marvel that is a Static Site Generator (SSD for short). In the latest trend to move back towards serving static sites using Javascript, CSS, and HTML; static site generators have become overwhelmingly popular. I won't get into the details of all the different generators that are out there, there are a lot, because they all do the same thing in one way or another. They take templates and convert them into a static site that can be hosted just about anywhere with performace that dynamic sites can't touch. Not only are they more performant, but they are also more secure and very easily backed up and/or migrated. If the server hosting your site goes down, you don't have to worry about databases and the like, you just need to move your static files to a new host and you're back up and running in no time. You can even host your site for free on sites like [Github][71c6d423] and [Netlify][ad97d98f] (where this one is hosted).

# Hugo

The static site generator I ended up going with was [Hugo][c639f24c] and decided to host it on [Netlify][ad97d98f] for all it's CDN and automatic-deployment goodness. The reason I chose [Hugo][c639f24c] was because it's being actively developed and it's written in Go; so even in the rare event that my personal site becomes hundreds of posts large, it will still compile in under a minute even on my crappy old laptop. Before, I built my personal site from the ground up with HTML, CSS, and a touch of jQuery. While it accomplished what I was trying to do, it had a few problems that ultimately lead to this version of my personal site. The shortlist, in no particular order...

## Difficult to Add New Content

If I wanted to add experience, skills, or anything for that matter, I couldn't do it without having to double check everything to see if it would break. Also, the more I added, the less maintainable it became. Now, if I want to add a position or skill, it's as easy as adding another list item and forgetting about it. I don't have to worry about what order it's in or what style I used for the other positions, it's just easy. Here's what a job looks like in the data file that feeds my personal site:

```yaml
- position: My Title
  company: The Company
  dates: February 1995 - April 1999
  location: Middle, OfNowhere
  summary: A short summary
  duties:
    - Things
    - That I
    - Did there
```

## Lacked Depth of Content

Part of the reason in having some sort of web presence, is to set yourself apart as well as show a different side that you can't show on a traditional resume. While version one did that to an extent, it ultimately ended up being a fancier resume online. The goal with this version was not only to create a unique place to showcase my skill-set, but to continue to be do that after the site was completed. Rather than update my resume, in whatever form every few years, I can now have more regular updates to show what projects I am working on. This shifts the thought process from "_Is this important enough to warrant space on my resume_" to "_What is the best way to showcase this and what have I learned from it_"

## Not Easily Extensible

Let's say I want to add a page with some sort of content on it. Right now I can just create a new folder, update my config to add a link to the section, and start posting content to that section. All of which would take roughly 3 minutes. On my old site, I would need to update the main page to either add another section (since it's a single column site), or I would have to create a new page from scratch. Afterwards I would need to style it, and then make sure everything works and is responsive. I couldn't use any shortcuts or partials, and it would be fairly time consuming.

This allows me to be agile with the content I choose to share with people. If I have new projects that I want to dedicate more realestate to, I can spin up another section easily. If I decide that things are no longer relevant, I can remove them or reorder them easily without having to worry about breaking the rest of my site. Ultimately, this leads to me actually using the site more instead of setting it up and forgetting about it.

# TLDR;

I decided to go with a static site generator, specifically [Hugo][c639f24c], for version two of my personal site and am really glad that I did. It allows me the flexibilty to provide relevant content without worrying about having to rework elements of the page. In addition to creating a more suitable platform to express myself, I also learned new technologies in the process, adding to my bag of tricks.

--------------------------------------------------------------------------------

_In the future I plan to write-up more about my experience in researching and choosing a static generator, as well as how I went about setting everything up._

[71c6d423]: https://www.github.com "Github"
[ad97d98f]: https://www.netlify.com/ "Netlify"
[c639f24c]: https://gohugo.io/ "Hugo"
