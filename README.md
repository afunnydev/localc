## Local C
Project that use Prepros, Hugo, SASS

---
## Requirements
* [git](http://git-scm.com)
* [hugo](https://gohugo.io)

---
## Installation
These should only be needed to be done the first you are setting up your site.

#### Git
```bash
# clone the repo


```

#### Hugo
Install Hugo with Homebrew
```bash
brew update && brew install hugo
```

---
## Starting the build process
When you are ready to start working all that is needed is a simple call to Hugo
```bash
#starts the build task and serves your site on a local server
hugo server
```
This will start the build then serve your site at `http://localhost:1313`

---
## Workflow


---
## Static files

Images are already in `static/img` and are optimized. If you don't find the images you're looking for in your page folder, look into others since images were repeated and I didn't want to take space for nothing. 

All the static files are in `static/`. You can find js there, don't add vendor for nothing. If you want to use and external library for a feature, let's discuss it. Speed is important :)

---
## CSS


---
## Deployment

I'm using Netlify to deploy. When there's a push to the master, website is automatically rebuilt. Haven't tried with the branches yet, I'm curious to know what will happen when we push to branch OR when we merge branch to master.

---
## What you need to know about this repo

