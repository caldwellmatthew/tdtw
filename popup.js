'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const unblockButton = document.getElementById('unblock');

    unblockButton.onclick = async (element) => {
        chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
            const tab = tabs[0];
            const currentUrl = tab.url;

            chrome.tabs.executeScript(tab.id, {file: 'downloadPage.js'}, () => {
                chrome.tabs.sendMessage(tab.id, currentUrl);
            });
        });
        
    };
});
