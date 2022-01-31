const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
describe('Smoke Test', () => {
    it('Add todo item and delete', async () => {
        let element, variable, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        let vars = { currentFileName: __filename };
        frame = page;
        await bluestoneFunc.goto.func(frame, 'https://todomvc.com/examples/angularjs/#/');
        await bluestoneFunc.waitElementExists.func(frame, locator['Todo Input'], 30091);
        await bluestoneFunc.click.func(frame, locator['Todo Input']);
        await bluestoneFunc.change.func(frame, locator['Todo Input'], 'hello world');
        await bluestoneFunc.keydown.func(frame, 'Enter');
        await bluestoneFunc.waitElementExists.func(frame, locator['hello world task'], 3000);
        await bluestoneFunc.click.func(frame, locator['hello world task']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Delete Button'], 33323);
        await bluestoneFunc.click.func(frame, locator['Delete Button']);
    });
});