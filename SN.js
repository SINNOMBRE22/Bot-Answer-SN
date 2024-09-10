// Importamos las librerías necesarias
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear el cliente de WhatsApp
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Mostrar el QR en la terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Cuando el cliente está listo
client.on('ready', () => {
    console.log('El bot está listo y conectado a WhatsApp');
});

// Escuchar mensajes entrantes y responder con comandos específicos
client.on('message', async message => {
    const msg = message.body.toLowerCase().trim(); // Normaliza el mensaje

    // Comprobar si el mensaje es un comando con prefijo '.'
    if (msg.startsWith('.')) {
        const command = msg.slice(1); // Obtener el comando sin el punto
        if (command === 'pub') {
            // Enviar el mensaje de publicidad a todos los grupos
            try {
                const chats = await client.getChats(); // Obtener todos los chats
                chats.forEach(chat => {
                    if (chat.isGroup) { // Verificar si es un grupo
                        client.sendMessage(chat.id._serialized, `
*🚀 ¡Servidores VPS a solo $60 el mes o $30 X 15 días para 2 usuarios aumenta a $80 por 30 días o $50 por 15 días! 🚀*

*($15 una semana un usuario)*

*🌐 Tengo servidores en venta para estas compañías en México:*

_*~Dirí sin saldo (velocidad lenta)~*_
_*~Movistar Redes~*_
_*~Bait sin saldo (velocidad lenta)~*_
_*~Bait redes~*_
_*~BAIT CONGELA~*_
_*~Redicoopel redes~*_
_*~Yolteco redes~*_
_*~WEEX redes~*_
_*~Virgin redes~*_
_*~at&t sin saldo~*_
_*~at&t redes~*_
_*~Altan SinSaldo (velocidad lenta)~*_
_*ENTRE OTRAS COMPAÑÍAS*_

*También para otros países, solo pregunta.*

\`\`\`Cualquier duda no dudes en preguntar\`\`\`

¡Contacto directo para obtener más información! 👉https://wa.me/message/BSE4ZCEPY7ZOP1
                        `);
                    }
                });
                message.reply('El mensaje de publicidad ha sido enviado a todos los grupos.');
            } catch (error) {
                console.error('Error al enviar el mensaje de publicidad:', error);
                message.reply('Hubo un error al intentar enviar el mensaje de publicidad.');
            }
        }
    }
});

// Iniciar el cliente
client.initialize();
