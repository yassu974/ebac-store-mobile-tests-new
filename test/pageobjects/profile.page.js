import { $ } from '@wdio/globals'

class ProfilePage {
  profileName(name) {
    return $(`//android.widget.TextView[@text="${name}"]`)
  }
}

export default new ProfilePage()