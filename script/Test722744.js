const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
const bluestoneType = require('bluestone/ptLibrary/class/index');
describe('Test722744', () => {
    it('Test722744', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'http://pa-frontend-qe.eastus.azurecontainer.io/home');
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt User Name'], 5662, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['Txt User Name']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt User Name'], 3899, vars.getSnapshot('Bluestone-Snapshot-3'));
        await bluestoneFunc.change.func(frame, locator['Txt User Name'], 'demo');
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt Password'], 3000, vars.getSnapshot('Bluestone-Snapshot-5'));
        await bluestoneFunc.click.func(frame, locator['Txt Password']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt Password'], 3372, vars.getSnapshot('Bluestone-Snapshot-7'));
        await bluestoneFunc.change.func(frame, locator['Txt Password'], 'demo');
        await bluestoneFunc.waitElementExists.func(frame, locator['Btn Login'], 3000, vars.getSnapshot('Bluestone-Snapshot-9'));
        await bluestoneFunc.click.func(frame, locator['Btn Login']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Opt WorkFlow'], 42805, vars.getSnapshot('Bluestone-Snapshot-11'));
        await bluestoneFunc.click.func(frame, locator['Opt WorkFlow']);
    }).timeout(9999999);
});