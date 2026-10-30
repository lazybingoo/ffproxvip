const video = document.getElementById('sampleVideo');
const hint = document.getElementById('videoHint');
const installBtn = document.getElementById('installBtn');
const notice = document.getElementById('notice');

video.addEventListener('loadeddata', () => { hint.style.display = 'none'; });
video.addEventListener('error', () => { hint.style.display = 'block'; });

// Demo-only counters: these are intentionally labeled as simulated activity.
const installCount = document.getElementById('installCount');
const watchingCount = document.getElementById('watchingCount');
const headerLiveCount = document.getElementById('headerLiveCount');
let installs = 3442;
let headerLive = 2150;
let watching = 1490;

function formatNumber(value) {
  return value.toLocaleString('en-IN');
}

// Slow, randomized increases while the page remains open. Numbers are not analytics.
setInterval(() => {
  // Requested demo animation: +90 per second while this page is open.
  installs += 90;
  installCount.textContent = formatNumber(installs);
}, 1000);

// Top-right simulated live counter starts at 2,150 and fluctuates every second.
setInterval(() => {
  const step = Math.floor(Math.random() * 9) + 1;
  headerLive = Math.max(2150, headerLive + (Math.random() < 0.52 ? step : -step));
  headerLiveCount.textContent = formatNumber(headerLive);
}, 1000);

setInterval(() => {
  const change = Math.random() < 0.5 ? 1 : -1;
  watching = Math.max(120, watching + change * (Math.random() < 0.8 ? 1 : 2));
  watchingCount.textContent = formatNumber(watching);
}, 3500);

// Sample Indian-style names and comments for the visibly labeled demo feed.
// Edit this list in order to customize the displayed text.
const demoComments = [
  { name: 'Rohit_YT', text: 'Bhai, UI kaafi smooth lag raha hai 🔥', color: 'blue' },
  { name: 'AmanFF', text: 'Video loop ho raha hai, nice 😎', color: 'cyan' },
  { name: 'PriyaGamer', text: 'Design mast hai 🇮🇳✨', color: 'orange' },
  { name: 'Rahul_Gaming', text: 'Neon animation looks cool bro 💚', color: 'blue' },
  { name: 'SouravOP', text: 'Demo page clean lag raha hai 👌', color: 'cyan' },
  { name: 'AnkitPlays', text: 'Good work! Keep improving 🚀', color: 'orange' },
  { name: 'Neha_XD', text: 'The colors are awesome 💜', color: 'blue' },
  { name: 'ArjunLive', text: 'Watching the sample preview 😄', color: 'cyan' }
];

const feed = document.getElementById('commentFeed');
let nextComment = 0;

setInterval(() => {
  const item = demoComments[nextComment % demoComments.length];
  nextComment++;

  const article = document.createElement('article');
  article.className = 'comment';
  const avatar = document.createElement('div');
  avatar.className = `avatar ${item.color}`;
  avatar.textContent = item.name.charAt(0).toUpperCase();

  const content = document.createElement('div');
  const name = document.createElement('b');
  name.textContent = item.name;
  const time = document.createElement('small');
  time.textContent = 'just now';
  const message = document.createElement('p');
  message.textContent = item.text;

  content.append(name, time, message);
  article.append(avatar, content);
  feed.prepend(article);

  // Keep the feed compact on mobile.
  while (feed.children.length > 5) {
    feed.removeChild(feed.lastElementChild);
  }
}, 5000);

// Safe demo behavior: this button does not download or redirect to an unknown APK.
installBtn.addEventListener('click', () => {
  notice.textContent = 'Demo only: add your own verified download URL in script.js before publishing.';
});
