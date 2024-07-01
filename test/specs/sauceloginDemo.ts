
import sauceLoginPage from "../pageobjects/sauce.login.page.js";
import * as Logindata from "../data/login.json" with {type:"json"}

describe('Verify the Login functionality', () => {

    before("open app", async() => {
       
            await sauceLoginPage.openApp();
         
    });
    it('Verify the login shoud work with valid credentials', async() => {        
await browser.pause(5000);
 await browser.waitUntil (async()=>await $("h4").getText()==="Accepted usernames are:",{ timeout: 10000, timeoutMsg: "failed for text  to match" });
 await sauceLoginPage.performLogin(Logindata.valid.username,Logindata.valid.password);
 
await browser.pause(5000);





        
    });
});
