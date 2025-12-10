export const config = {
    user: 'yassu974',
    key: '6380e273-b1ab-4c27-a353-55738e30fc23',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',
    region: 'us-west-1',

    specs: [
    './test/specs/ios.checkout.test.js'
    ],
    
    maxInstances: 1,

    capabilities: [
        {
            platformName: 'iOS',
            'appium:platformVersion': '17',
            'appium:deviceName': 'iPhone 15 Simulator',
            'appium:automationName': 'XCUITest',
            'appium:app': 'storage:92912ee5-6b6c-4a3b-a4a7-9b3b081b9a62',
            'appium:newCommandTimeout': 240,
            'sauce:options': {
                build: 'ebac-store-ios-checkout',
                name: 'EBAC Store - iOS Testes',
                deviceOrientation: 'PORTRAIT'
            }
        }
    ],

    logLevel: 'info',

    waitforTimeout: 15000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 80000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}