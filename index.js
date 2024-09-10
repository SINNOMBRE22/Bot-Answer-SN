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
client.on('message', message => {
    const msg = message.body.toLowerCase().trim(); // Normaliza el mensaje

    // Comprobar si el mensaje es un comando específico
    switch (msg) {
        case 'menú':
        case 'menu':
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
            // Ignorar cualquier mensaje que no sea un comando específico
            // Puedes comentar la siguiente línea si no quieres enviar ninguna respuesta para mensajes no reconocidos
            message.reply('Comando no reconocido. Escribe "menú" para ver las opciones disponibles.');
            break;
    }
});

// Iniciar el cliente
client.initialize();

