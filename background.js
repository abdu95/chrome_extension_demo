// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'openGmail') {
      // Retrieve the saved email from storage
      chrome.storage.local.get(['emailVariable'], function (result) {
        const emailVariable = result.emailVariable;
  
        // Add your custom email body here
        const customEmailBody = `
  Hello!
  
  Bla bla text?
  
  Thank you,
  
  First Name (XXXXX) Last Name (XXXX)
  MC#(xxxxxx)
  Company name (XXXXXXX)
  `;
  
        // URL encode the email and body parameters
        const encodedEmail = encodeURIComponent(emailVariable);
        const encodedBody = encodeURIComponent(customEmailBody);
  
        // Construct the Gmail URL with email and body parameters
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&body=${encodedBody}`;
  
        // Open Gmail in a new tab with the specified email and body
        chrome.tabs.create({ url: gmailUrl });
  
        // Notify the popup that Gmail was opened
        chrome.runtime.sendMessage({ action: 'gmailOpened' });
      });
    }
  });
  