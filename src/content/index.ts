// Example content script
console.log('Content script loaded');

// Example: Send a message to the background script
chrome.runtime.sendMessage({ type: 'CONTENT_SCRIPT_LOADED' }, response => {
  console.log('Response from background:', response);
});