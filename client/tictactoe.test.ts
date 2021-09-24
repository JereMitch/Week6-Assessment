import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe('All the tic-tac-toe things', () => {
    
    test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

test('I can fill every cell', async () => {
    let a1 = await driver.findElement(By.id('cell-1'))
    await a1.click()
    await driver.sleep(500)
    let a2 = await driver.findElement(By.id('cell-4'))
    await a2.click()
    await driver.sleep(500)
    let a3 = await driver.findElement(By.id('cell-5'))
    await a3.click()
    await driver.sleep(500)
    let a4 = await driver.findElement(By.id('cell-8'))
    await a4.click()
    await driver.sleep(500)
    let a5 = await driver.findElement(By.id('cell-6'))
    await a5.click()
    await driver.sleep(500)
    let a6 = await driver.findElement(By.id('cell-7'))
    await a6.click()
    await driver.sleep(500)
    driver.navigate().refresh()
})

test('I can win a game', async () => {
    let start1 = await driver.findElement(By.id('start-game'))
    await start1.click()
    let x1 = await driver.findElement(By.id('cell-4'))
    await x1.click()
    await driver.sleep(500)
    let x2 = await driver.findElement(By.id('cell-2'))
    await x2.click()
    await driver.sleep(500)
    let x3 = await driver.findElement(By.id('cell-6'))
    await x3.click()
    await driver.sleep(500)
    driver.navigate().refresh()
} )

test('I can lose a game', async () => {
    let start2 = await driver.findElement(By.id('start-game'))
    await start2.click()
    let x4 = await driver.findElement(By.id('cell-6'))
    await x4.click()
    await driver.sleep(500)
    let x5 = await driver.findElement(By.id('cell-4'))
    await x5.click()
    await driver.sleep(500)
    let x6 = await driver.findElement(By.id('cell-8'))
    await x6.click()
    await driver.sleep(2000)
    await driver.get('https://www.google.com/')
    let search = await driver.findElement(By.name('q'))
    await search.sendKeys('table flip gif\n')
    let mad = await driver.findElement(By.className('fWhgmd'))
    await mad.click()
    await driver.sleep(2500)
})

})
