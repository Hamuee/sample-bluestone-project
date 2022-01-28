const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
describe('s1', () => {
    it('s2', async () => {
        let element, variable, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        let vars = { currentFileName: __filename };
        frame = page;
        await bluestoneFunc.goto.func(frame, 'http://AEI_backup.qae.aspentech.com/sabisupremise/login.aspx');
        await bluestoneFunc.waitElementExists.func(frame, locator['s1'], 38870);
        await bluestoneFunc.click.func(frame, locator['s1']);
        await bluestoneFunc.waitElementExists.func(frame, locator['email'], 17365);
        await bluestoneFunc.click.func(frame, locator['email']);
    });
});