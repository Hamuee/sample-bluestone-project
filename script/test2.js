const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone');
const config = require('../config.js');
describe('test1', () => {
    it('test2', async () => {
        let element, variable, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        frame = page;
        await projectFunc.clearBrowserCache.func(page);
        await bluestoneFunc.goto.func(frame, 'http://172.22.4.39/Main/Summary');
        await bluestoneFunc.waitElementExists.func(frame, locator['User Name Input'], 1326799);
        await bluestoneFunc.click.func(frame, locator['User Name Input']);
        await bluestoneFunc.waitElementExists.func(frame, locator['User Name Input'], 2156);
        await bluestoneFunc.change.func(frame, locator['User Name Input'], 'Admin');
        await bluestoneFunc.waitElementExists.func(frame, locator['Login Button'], 2157);
        await bluestoneFunc.click.func(frame, locator['Login Button']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Input Box In Agent Summy'], 9105);
        await bluestoneFunc.click.func(frame, locator['Input Box In Agent Summy']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Input Box In Agent Summy'], 5393);
        await bluestoneFunc.change.func(frame, locator['Input Box In Agent Summy'], 'bluestone2');
        await bluestoneFunc.waitElementExists.func(frame, locator['Input Box In Agent Summy'], 5393);
        await bluestoneFunc.keydown.func(frame, 'Enter');
    });
});