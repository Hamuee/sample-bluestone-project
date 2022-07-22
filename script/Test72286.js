const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
const bluestoneType = require('bluestone/ptLibrary/class/index');
describe('Test72286', () => {
    it('Test72286', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'http://pa-frontend-qe.eastus.azurecontainer.io/home');
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt User Name'], 5415, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['Txt User Name']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt User Name'], 4622, vars.getSnapshot('Bluestone-Snapshot-3'));
        await bluestoneFunc.change.func(frame, locator['Txt User Name'], 'demo');
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt Password'], 3000, vars.getSnapshot('Bluestone-Snapshot-5'));
        await bluestoneFunc.click.func(frame, locator['Txt Password']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Txt Password'], 3543, vars.getSnapshot('Bluestone-Snapshot-7'));
        await bluestoneFunc.change.func(frame, locator['Txt Password'], 'demo');
        await bluestoneFunc.waitElementExists.func(frame, locator['Btn Login'], 3000, vars.getSnapshot('Bluestone-Snapshot-9'));
        await bluestoneFunc.click.func(frame, locator['Btn Login']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Opt WorkFlow'], 3000, vars.getSnapshot('Bluestone-Snapshot-11'));
        await bluestoneFunc.click.func(frame, locator['Opt WorkFlow']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Link NewWorkflow 159'], 49630, vars.getSnapshot('Bluestone-Snapshot-13'));
        await bluestoneFunc.click.func(frame, locator['Link NewWorkflow 159']);
        await bluestoneFunc.waitElementExists.func(frame, locator['DrawElement 1'], 7611, vars.getSnapshot('Bluestone-Snapshot-15'));
        await bluestoneFunc.click.func(frame, locator['DrawElement 1']);
        await bluestoneFunc.waitElementExists.func(frame, locator['DrawElementItem Remove'], 55215, vars.getSnapshot('Bluestone-Snapshot-17'));
        await bluestoneFunc.click.func(frame, locator['DrawElementItem Remove']);
    }).timeout(9999999);
});