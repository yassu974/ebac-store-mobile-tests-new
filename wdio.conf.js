export const config = {
    runner: 'local',
    
    specs: [
        './test/specs/**/*.js'
    ],
    
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ebac',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true,
    }],

    logLevel: 'info',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
   
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
