describe('Verify the home page', () => {
    before("open application",() => {
        browser.url("https://www.google.com/");
    });
    it('Verify the title in home page', async() => {

        await $(".gLFyf").setValue("mobile");
        browser.pause(5000);
        const actualtext=await $(".gNO89b");
        await expect(actualtext).toBeDisplayed();
      
        
    });
});