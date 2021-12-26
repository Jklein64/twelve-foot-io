// document is the rendered extension popup, not the current tab
const button = document.querySelector(".logo-button")

button.addEventListener("click", async () => {
    // get the current/active tab
    const tab = (await browser.tabs.query({ active: true })).pop()
    
    // prepend 12ft.io
    const url = "https://12ft.io/" + tab.url.replace(/https?:\/\//, "")
    
    // update the current tab's url
    await browser.tabs.update({
        active: true,
        highlighted: true,
        url
    })
})
