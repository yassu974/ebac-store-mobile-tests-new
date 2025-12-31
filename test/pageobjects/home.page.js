class HomePage {
    get profileTab() {
        return $('id=tab-profile');
    }

    async goToProfile() {
        await this.profileTab.waitForDisplayed({ timeout: 20000 });
        await this.profileTab.click();
    }
}

export default new HomePage()