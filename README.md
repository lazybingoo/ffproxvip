# FF Proxy Portal — visual demo

This is a responsive, static HTML/CSS/JS recreation inspired by the supplied screenshot. It is not the original website or its backend.

## Preview locally
Open `index.html` in a browser.

## Add your own looping video
1. Create a folder named `videos` beside `index.html`.
2. Put your own MP4 there and name it `sample.mp4`.
3. The `<video>` element already has `loop`, `controls`, and `playsinline`.
4. Optional: add a poster image at `assets/video-poster.jpg` (create the `assets` folder).

The video loops after it reaches the end. For autoplay, browsers generally require `muted`; add `muted autoplay` to the video element if you want it to start automatically.

## Publish on GitHub Pages
Upload `index.html`, `style.css`, `script.js`, and your `videos` folder to a GitHub repository. In the repository, open **Settings → Pages**, select the branch and root folder, then save.

## Install button
The button intentionally does not download or redirect to an unknown APK. In `script.js`, connect it only to an app file you own and have verified, and clearly tell visitors what they are downloading.

This demo uses sample text and fictional comments. It does not connect to Gmail, collect credentials, or claim affiliation with Free Fire, Garena, or Google.


## Simulated live effects
- A pulsing LIVE DEMO badge appears in the video's top-right corner.
- The installs counter and watching count increase/decrease while the page is open.
- Sample comments from fictional Indian-style usernames appear every few seconds.
- The UI labels all these effects as simulated/demo activity. They are not real viewers, comments, or install analytics.
