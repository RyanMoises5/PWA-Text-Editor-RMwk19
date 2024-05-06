# 19 Progressive Web Applications (PWA) Challenge: Text Editor Completion

Student: Ryan Moises

## Objective

To build a text editor that runs in the browser that functions as a PWA, utilizes both IndexedDB and local storage for data persistence, and has offline capabilities. The app will be deployed on Render.

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [URLs and Images](#urls-and-images)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## URLs and Images 

The following link is the student's deployed app hosted on Render:

(https://pwa-text-editor-rmwk19.onrender.com/)

The following link is the GitHub repository where the associated files are located:

(https://github.com/RyanMoises5/PWA-Text-Editor-RMwk19)

![JPG of the working JATE app](./assets/sample.JPG)

---

Student: Ryan Moises
