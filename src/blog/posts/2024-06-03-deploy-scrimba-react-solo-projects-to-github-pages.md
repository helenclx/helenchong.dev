---
title: Finally Deployed My Scrimba React Solo Projects to GitHub Pages
desc: At long last, I found a way to deploy my solo projects for Scirmba's React course form my repository's subdirectories.
date: 2024-06-03T11:01:00+0800
categories: ["scrimba", "react", "github pages"]
---

I had completed [Scrimba's Learn React course](https://scrimba.com/learn/learnreact) and its solo projects back in July 2023, even before [winning a one-year Scrimba Pro plan from JavaScriptmas 2023](2023-12-27-JavaScriptmas-2023-Challenge-Completed-and-Won.md) for free, since the course, including the instructions and Figma files for the solo projects, is also available on freeCodeCamp's YouTube channel.

However, I always struggled to figure out how to deploy React project from a GitHub repository's subfolders or subdirectories, and frustrated by the lack of guides for that. Scrimba's course does teach about using GitHub, but they often recommend deploying projects from their course to Netlify by doing it manually on [Netlify Drop](https://app.netlify.com/drop). To be fair, Netlify Drop is great for beginner developers, especially when they are new to source control such as Git. However, when I finished Scirmba's Learn React course, I already had a handful of projects deployed to GitHub Pages. Later, I even managed to deploy my React Tenzies Game, which was based on the tutorial from the Learn React course, to GitHub Pages by creating a [dedicated repository for my Tenzies Game](https://github.com/helenclx/Tenzies-Game) and searching for a guide for how to deploy a React project to GitHub Pages.

Unfortunately, I could not find any guide for how to deploy React projects from multiple subfolders or subdirectories of a repository, and I did not have enough experience with using GitHub actions to feel comfortable trying to figure it out myself, so I had to manually deploy my Scrimba React solo projects to Netlify by using Netlify Drop, which I do not find ideal because I had to repeat the process every time I made a change to those projects.

Lately, as I have been busy with maintaining and improving my projects hosted on GitHub, I suddenly thought of trying to search for ways to deploy React projects to GitHub Pages from the repository's subdirectories again. That was when I, at long last, found a guide that helped me to solve my months-long dilemma once and for all: ["Deploy a react projects that are inside a subdirectories to GitHub Pages using GitHub Actions (CI/CD)" by DEVLOKER](https://dev.to/devloker/deploy-a-react-projects-that-are-inside-a-subdirectories-to-github-pages-using-github-actions-cicd-3n9l). It is worth noting that the guide was posted only recently on 11 April 2024. The guide also uses Vite for React projects, which was perfect for me since Vite is also what I use to create React projects, including the ones from Scrimba courses. The guide's Vite configuration file is in TypeScript format (`vite.config.ts`), but it totally works with JavaScript format (`vite.config.js`) too.

This was my set-up in the YAML file of my GitHub action when I succeeded in deploying my Scrimba React solo projects to GitHub Pages:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: latest

      # digital-business-card project
      - name: Build digital-business-card
        run: |
          cd 1-digital-business-card
          npm install && npm run build
          cd ..
          mkdir -p deploy/1-digital-business-card
          cp -r 1-digital-business-card/dist/* deploy/1-digital-business-card/

      # travel-journal project
      - name: Build travel-journal
        run: |
          cd 2-travel-journal
          npm install && npm run build
          cd ..
          mkdir -p deploy/2-travel-journal
          cp -r 2-travel-journal/dist/* deploy/2-travel-journal/

      # quizzical project
      - name: Build quizzical
        run: |
          cd 3-quizzical
          npm install && npm run build
          cd ..
          mkdir -p deploy/3-quizzical
          cp -r 3-quizzical/dist/* deploy/3-quizzical/

      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./deploy"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This set-up made my Scrimba React solo projects live at the following links:
- [Digital Business Card](https://helenclx.github.io/Scrimba-React-Solo-Projects/1-digital-business-card/)
- [Travel Journal](https://helenclx.github.io/Scrimba-React-Solo-Projects/2-travel-journal/)
- [Quizzical](https://helenclx.github.io/Scrimba-React-Solo-Projects/3-quizzical/)

I was beyond relief to finally deployed my Scrimba React solo projects to GitHub Pages, so I decided to do a bit more by creating a HTML home page to list those solo projects when the main link of the deployed repository, https://helenclx.github.io/Scrimba-React-Solo-Projects/, is visited.

I do not need a fancy home page for my deployed Scrimba React solo projects, so I based the home page's CSS on the [Smol Document Styles by SmolCSS](https://SmolCSS.dev/#smol-document-styles).

After finished creating the HTML and CSS of the home page, I wrote an extra step in the YAML file of my GitHub actions to deploy my React solo projects to GitHub Pages, after building each project and before setting up GitHub Pages.

```yaml
# index page and assets
- name: Deploy index page and assets
  run: |
      mkdir -p deploy
      cp -r index.html style.css deploy/
      cp -r 1-digital-business-card/screenshot.png deploy/1-digital-business-card/
      cp -r 2-travel-journal/screenshot.png deploy/2-travel-journal/
      cp -r 3-quizzical/screenshot-start.png 3-quizzical/screenshot-questions.png 3-quizzical/screenshot-answers.png deploy/3-quizzical/
```
What this step does is creating a "deploy" folder and then copy the home page's HTML, CSS to the "deploy" folder, and copy the project screenshots to the folder of each project.

Here is the final code of my GitHub action TAML file to deploy my Scrimba React solo projects in [my Scrimba React solo projects repository](https://github.com/helenclx/Scrimba-React-Solo-Projects/blob/main/.github/workflows/gh-pages.yml).

Now that I have successfully deployed my Scrimba React solo projects to GitHub Pages, I can finally delete those projects from Netlify and free up more monthly bandwidth for my other projects that I actually want to deploy to Netlify.


