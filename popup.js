// popup.js
document.getElementById('openGmail').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.runtime.sendMessage({ action: 'openGmail' });
  });
});
