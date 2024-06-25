import Page from "./page";

class WaitPage extends Page{

    get loadingicon()
    {
        return $("//div[@id='loading']/img");
    }
    get helloWordHeadr()
    {
        return $("//div[@id='finish']/h4");
    }
    get startbutton()
    {
        return $("//div[@id='start']/button");
    }

    async clickonstartbutton()
    {
        await this.startbutton.click();

    }

    async waitforloadingtodiappear()
    {
        await this.loadingicon.waitForDisplayed();
        await this.loadingicon.waitForDisplayed({ reverse: true, timeout: 10000, timeoutMsg: "Failed while waiting for loading icon to disappear" });
    }
    }




export default new WaitPage();