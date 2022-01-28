const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const bluestoneFunc = require('bluestone').func
const locator = require('../bluestone-locator')
const assert = require('assert')

/**
 * Click on the 'Show Menu' Button for specific agent
 * @param {Frame} frame 
 * @param {string} agentName Enter the name of the agent that you want to click "Show Menu"  button
 * @returns 
 */
exports.clickShowMenuForAgent = async function (frame, agentName) {
    await bluestoneFunc.waitElementExists.func(frame, locator['Header for First Element'], 28414);
    console.log('step 1')
    let headerElements = await frame.$x(`//div[.='${agentName}' and @class='header']`)
    assert.equal(headerElements.length == 1, true, 'The agent name you provided does not returns a unique result')
    let headerElement = headerElements[0]
    await headerElement.hover()
    await new Promise(resolve => setTimeout(resolve, 1000))
    let cardElement = (await headerElement.$x('..'))[0];
    let potentialMenus = await cardElement.$x('.//span[@title="Show menu"]')
    assert.equal(potentialMenus.length == 1, true, 'Cannot find the show menu we are looking for')
    let showMenu = potentialMenus[0]
    await showMenu.click()
    console.log('hello world!')
    return true
}