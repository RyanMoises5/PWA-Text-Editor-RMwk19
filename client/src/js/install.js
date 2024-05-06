const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Store the triggered events if not installed
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// Prompt will appear when clicking on install button
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// Clear prompt after installation
window.addEventListener('appinstalled', (event) => {
  
  window.deferredPrompt = null;
});
