const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
describe('sdf', () => {
    it('sdf', async () => {
        let element, variable, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        let vars = { currentFileName: __filename };
        frame = page;
        await bluestoneFunc.goto.func(frame, 'http://AEI_backup.qae.aspentech.com/sabisupremise/login.aspx');
        await bluestoneFunc.waitElementExists.func(frame, locator['email'], 7149);
        await bluestoneFunc.waitElementExists.func(frame, locator['email'], 7149);
        await bluestoneFunc.change.func(frame, locator['email'], 'qae.perftest+2@aspentech.info');
        await bluestoneFunc.keydown.func(frame, 'Enter');
        await bluestoneFunc.waitElementExists.func(frame, locator['Next Button'], 21120);
        await bluestoneFunc.waitElementExists.func(frame, locator['Password'], 21120);
        await bluestoneFunc.change.func(frame, locator['Password'], 'Aspen100');
        await bluestoneFunc.waitElementExists.func(frame, locator['Login in button'], 28391);
        await bluestoneFunc.click.func(frame, locator['Login in button']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Profile Picture'], 121659);
        await bluestoneFunc.waitForTimeout.func(frame, 15000)
        await bluestoneFunc.click.func(frame, locator['Profile Picture']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Sign out'], 33181);
        await bluestoneFunc.click.func(frame, locator['Sign out']);
        await bluestoneFunc.waitElementExists.func(frame, locator['email'], '2000');
    }).timeout(99999);
});