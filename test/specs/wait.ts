import waitPage from "../pageobjects/wait.page.js"
describe("Verify the ait statergy",()=>{

    before("openapp",async()=>{

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
        await browser.maximizeWindow();
    })

    it("Verify the should ait for the element to appear",async()=>{

        await waitPage.clickonstartbutton();
        await waitPage.helloWordHeadr.waitForDisplayed({ timeout: 10000, timeoutMsg: "failed for header to appear" })
        await expect(waitPage.helloWordHeadr).toHaveText("Hello World!");

    })
})