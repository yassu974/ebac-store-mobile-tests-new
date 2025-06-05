export const config = {
    //runner: 'local',
    //port: 4723,
    user: 'oauth-yassu974-87197',
    key: '994af757-4f59-4b1d-addf-703cbf7ba1b1',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

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
            'appium:deviceName': 'ebac',
            'appium:platformVersion': '9.0',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: '<your test name>',
                deviceOrientation: 'PORTRAIT',
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
