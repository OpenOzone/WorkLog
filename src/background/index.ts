// Example background service worker
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Handle extension icon click to open sidepanel
chrome.action.onClicked.addListener((tab) => {
  // Open the side panel
  chrome.sidePanel.open({ windowId: tab.windowId });
});

// Example: Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  sendResponse({ status: 'received' });
});