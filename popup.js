'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const unblockButton = document.getElementById('unblock');

    unblockButton.onclick = async (element) => {

        chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
            const tab = tabs[0];
            const currentUrl = tab.url;

            chrome.tabs.executeScript(tab.id, {
                'code': `
                    (async () => {
                        const resp = await fetch("${currentUrl}");
                        const blob = await resp.blob();
                        const file = window.URL.createObjectURL(blob);
                        window.location.assign(file);
                    })();
                `});
        });
        
    };
});
