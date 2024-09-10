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

    // Programar el envío del mensaje cada 2 horas (7200000 milisegundos)
    setInterval(async () => {
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
    }, 7200000); // 7200000 ms = 2 horas
});

// Escuchar mensajes entrantes y responder con comandos específicos
client.on('message', async message => {
    const msg = message.body.toLowerCase().trim(); // Normaliza el mensaje

    // Verificar si el mensaje es del número del dueño
    const ownerNumber = '+5217971532324@c.us'; // Formato de número en WhatsApp

    // Verifica si el mensaje empieza con el prefijo '.' (para comandos del dueño)
    if (msg.startsWith('.')) {
        if (message.from !== ownerNumber) {
            return; // Ignorar si no es el dueño
        }

        // Eliminar el prefijo para obtener el comando
        const command = msg.slice(1);

        // Comprobar si el comando es '.pub'
        switch (command) {
            case 'pub':
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
                } catch (error) {
                    console.error('Error al enviar el mensaje de publicidad:', error);
                }
                break;

            default:
                // Ignorar comandos no reconocidos
                break;
        }
    } else {
        // Comandos generales con prefijo '$'
        if (!msg.startsWith('$')) {
            return; // Ignorar mensajes que no comiencen con el prefijo '$'
        }

        // Eliminar el prefijo para obtener el comando
        const command = msg.slice(1);

        // Comprobar si el mensaje es un comando específico
        switch (command) {
            case 'menu':
            case 'menú':
                message.reply(`¡Bienvenido al menú! Elige una opción:
1️⃣ Información del bot
2️⃣ Servicios
3️⃣ Contacto
4️⃣ Salir`);
                break;

            case '1':
                message.reply(`Este bot fue creado para responder automáticamente a los mensajes de WhatsApp. 
Características:
- Respuestas automáticas
- Menús interactivos
- Conexión continua vía WhatsApp Web`);
                break;

            case '2':
                message.reply(`Servicios:
a) Soporte técnico
b) Información personalizada
c) Consultoría
Escribe la letra correspondiente para más información.`);
                break;

            case '2a':
                message.reply('El soporte técnico está disponible 24/7 para ayudarte con cualquier problema.');
                break;

            case '2b':
                message.reply('La información personalizada incluye detalles sobre nuestros productos y servicios.');
                break;

            case '2c':
                message.reply('La consultoría está disponible para proyectos empresariales y soluciones tecnológicas.');
                break;

            case '3':
                message.reply(`Para contactar con nosotros, por favor envía un correo a soporte@ejemplo.com o llama al 123-456-7890`);
                break;

            case '4':
                message.reply('Gracias por usar el bot. ¡Hasta luego!');
                break;

            default:
                // Ignorar comandos no reconocidos
                break;
        }
    }
});

// Iniciar el cliente
client.initialize();
