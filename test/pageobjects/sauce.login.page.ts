import Page from "./page.js";

class SauceLoginPage extends Page{
   
    

        get username()
       {
           return $("#user-name");
       }
       private get passward()
       {
           return $("#password");
       
       }
       private get button()
       {
           return $("//input[@type='submit']");
       }
       
       async performLogin(username:string,password:string)
       {
           await this.username.setValue(username);
           await this.passward.setValue(password);
           await this.button.click();
       
       }
       async openApp()
       {
        await browser.url("https://www.saucedemo.com/");
            await browser.maximizeWindow();
       }
        
       
       
       }
       export default new SauceLoginPage();
       
