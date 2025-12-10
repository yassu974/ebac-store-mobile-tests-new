export const config = {
    // Config Sauce Labs
    user: 'oauth-yassu974-f7a79',
    key: '81e95f0e-1892-46ea-8fb0-ec6945dca211',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',
    region: 'us-west-1',

    specs: [
        './test/specs/**/*.js'
    ],
    
    maxInstances: 1,

    capabilities: [
        //  {
        //    platformName: 'Android',
        //    'appium:deviceName': 'ebac',
        //    'appium:platformVersion': '9.0',
        //    'appium:automationName': 'UiAutomator2',
        //    'appium:app': `${process.cwd()}/app/ebacshop/universal.apk`,
        //    'appium:appWaitActivity': '.MainActivity',
        //    'appium:disableIdLocatorAutocompletion': true,
        //  }
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '10',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                'appiumVersion': '2.0.0'
            },
        }
    ],

    logLevel: 'info',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}