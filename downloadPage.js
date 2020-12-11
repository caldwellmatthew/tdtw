'use strict';

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    const currentUrl = message;
    const resp = await fetch(currentUrl);
    const blob = await resp.blob();
    const file = window.URL.createObjectURL(blob);
    window.location.assign(file);
});
