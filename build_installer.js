const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './encrypt-win32-x64');
const OUT_DIR = path.resolve(__dirname, './windows-installer');

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,
    description: 'A text encrypt program',
    exe: 'encrypt',
    name: 'Encrypt Program',
    manufacturer: 'Aronshire',
    version: '0.4.0',
    ui: {
        chooseDirectory: true,
    }
});

msiCreator.create().then(() => {
    msiCreator.compile();
});