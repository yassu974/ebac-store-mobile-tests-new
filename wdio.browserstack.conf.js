import { config as baseConfig } from './wdio.conf.js'

export const config = {
  ...baseConfig,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub-cloud.browserstack.com',

  specs: [
    './test/specs/login.test.js'
  ],

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Samsung Galaxy S21',
      'appium:platformVersion': '11.0',
      'appium:app': 'bs://66a3748f6f2a81bae5e2260be651b39a37deaed0',

      'bstack:options': {
        projectName: 'EBAC Mobile CI',
        buildName: 'Login Test - BrowserStack',
        sessionName: 'Login Test',
        debug: true,
        networkLogs: true
      }
    }
  ],

  services: ['browserstack'],

  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2
}