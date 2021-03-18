const {Client} = require('whatsapp-web.js')
const client = new Client()
var qrcode = require('qrcode-terminal');

client.on('qr',(qr)=>{
    console.log('QR RECEIVED',qr)
    qrcode.generate(qr)
})

client.on('ready',()=>{
    console.log('client is ready!')
})

client.on('message',msg=>{
    if(msg.body === 'tes'){
        msg.reply('hai')
    }
    console.log(msg)
})

client.initialize()