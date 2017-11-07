const
url = require('url'),
path = require('path'),
{BrowserWindow, app} = require('electron'),
client = require('electron-connect').client;

var mainWindow;


app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1024, 
        height: 768, 
        backgroundColor: '#2e2c29',
        frame: false    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    client.create(mainWindow);
});

