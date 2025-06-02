export const config = {
    runner: 'local',
    port: 4723,
    
    specs: [
        './test/specs/**/*.js'
    ],
    
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ebac',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apk`,
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
