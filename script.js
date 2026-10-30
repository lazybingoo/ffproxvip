const video = document.getElementById('sampleVideo');
const hint = document.getElementById('videoHint');
const installBtn = document.getElementById('installBtn');
const notice = document.getElementById('notice');

video.addEventListener('loadeddata', () => { hint.style.display = 'none'; });
video.addEventListener('error', () => { hint.style.display = 'block'; });

// Safe demo behavior: this button does not download an unknown APK.
// Replace the message with a link to your own trusted, verified download if needed.
installBtn.addEventListener('click', () => {
  notice.textContent = 'Demo only: add your own verified download URL in script.js before publishing.';
});
