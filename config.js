module.exports = {
    puppeteer: {
        "executablePath": "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        headless: false,
        defaultViewport: null,
        ignoreHTTPSErrors: true,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--window-size=1920,1040',
        ]
    },

}