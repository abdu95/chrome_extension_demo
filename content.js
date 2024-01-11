// content.js
document.addEventListener('click', function (event) {
  // Check if the clicked element is an email link within the table
  const isEmailLink = event.target.tagName === 'A' && event.target.href && event.target.href.startsWith('mailto:');

  if (isEmailLink) {
    // Extract the email and save it to storage
    const clickedEmail = event.target.href.replace('mailto:', '');
    chrome.storage.local.set({ 'emailVariable': clickedEmail });
  }
});
