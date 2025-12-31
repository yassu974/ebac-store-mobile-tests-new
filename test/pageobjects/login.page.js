class LoginPage {
  get emailInput () {
    return $('id=email')
  }

  get passwordInput () {
    return $('id=password')
  }

  get loginButton () {
    return $('//*[@text="Login"]')
  }

  async login (email, password) {
    await this.emailInput.waitForDisplayed({ timeout: 20000 })
    await this.emailInput.setValue(email)

    await this.passwordInput.setValue(password)

    await this.loginButton.waitForDisplayed({ timeout: 20000 })
    await this.loginButton.click()
  }
}

export default new LoginPage()