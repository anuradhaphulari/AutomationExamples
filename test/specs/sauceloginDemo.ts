
import sauceLoginPage from "../pageobjects/sauce.login.page.js";
import * as Logindata from "../data/login.json" with {type:"json"}



describe('Verify the Login functionality', () => {

    before("open app", async() => {
       
            await sauceLoginPage.openApp();
         
    });
    it('Verify the login shoud work with valid credentials', async() => {        
browser.pause(5000);
browser.waitUntil (async()=>await $("h4").getText()==="Accepted usernames are:",{ timeout: 10000, timeoutMsg: "failed for text  to match" })
//  await $("#user-name").setValue("standard_user");
//  await  $("#password").setValue("secret_sauce");
//  await (await $("//input[@type='submit']")).click();


// browser.pause(5000);
browser.pause(5000);

//await sauceloginPage.performLogin("standard_user","secret_sauce");
// const userN= await sauceLoginPage.username.getValue();
//console.log("Username:",userN);
browser.pause(5000);


        
    });
});
