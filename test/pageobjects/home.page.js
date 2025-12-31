class HomePage {
  get profileTab() {
    return $('id=tab-profile')
  }

  async goToProfile() {
    await this.profileTab.waitForExist({
      timeout: 40000,
      timeoutMsg: 'Profile tab not found in DOM on Home screen'
    })

    await this.profileTab.waitForDisplayed({
      timeout: 40000,
      timeoutMsg: 'Profile tab not visible on Home screen'
    })

    try {
      await this.profileTab.click()
    } catch (error) {
      await driver.touchAction({
        action: 'tap',
        element: this.profileTab
      })
    }
  }
}

export default new HomePage()