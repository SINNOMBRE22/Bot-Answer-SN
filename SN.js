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
━━━━━━━━━━━━━━━━━━━━
🌐✨ *SinNombre VPS* 🇲🇽✨
━━━━━━━━━━━━━━━━━━━━
> 💰 **PRECIOS:**
➥ *$110* : VPS 60 días (5 usuarios)
➥ *$60* : VPS 30 días (2 usuarios)
➥ *$30* : VPS 15 días ( 2 usuarios)
➥ *$15* : VPS 1 semana (1 usuario)

━━━━━━━━━━━━━━━━━━━━
> 📡 **COMPAÑÍAS MX**:
🚀 _*Dirí sin saldo*_
🚀 _*Movistar Redes*_
🚀 _*Bait sin saldo*_
🚀 _*Bait redes*_
🚀 _*BAIT CONGELA*_
🚀 _*Redicoopel redes*_
🚀 _*Yolteco redes*_
🚀 _*WEEX redes*_
🚀 _*Virgin redes*_
🚀 _*at&t sin saldo*_
🚀 _*at&t redes*_
🚀 _*Altan SinSaldo*_
🚀 _*OTRAS COMPAÑÍAS DISPONIBLES*_

💡 _𝙋𝙖𝙧𝙖 𝙤𝙩𝙧𝙤𝙨 𝙥𝙖𝙞𝙨𝙚𝙨, 𝙨𝙤𝙡𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖._

━━━━━━━━━━━━━━━━━━━━
> **VENTAJAS DE NUESTROS SERVIDORES**:
💻 *NAVEGACIÓN LIBRE*
⚡️ *CONEXIÓN RÁPIDA*
🎮 *SOPORTE PARA JUEGOS ONLINE*
📲 *VIDEOLLAMADAS SIN PROBLEMAS*
🛡️ *CONEXIÓN ESTABLE (ANTI-DESCONECTAR)*
🚀 *SERVIDOR ESTABLE Y SIN ERRORES*
♻️ *GARANTÍA 100%*

> 🌕 _VENCE EN 1 MES (SOLICITUD FLEXIBLE)_

> 📍 *CONFIGURACIÓN GARANTIZADA*: 
_Si no conecta, te damos una nueva._

━━━━━━━━━━━━━━━━━━━━
> 💳 **MÉTODOS DE PAGO**:
✔️ *Mercado pago* • *transferencia* • *oxxo*

━━━━━━━━━━━━━━━━━━━━
💈 [Soporte](wa.me/+5215629885039)

━━━━━━━━━━━━━━━━━━━━
🚀 **¡ORDENA YA!**
> 👉 _Haz clic aquí para más información:_ https://wa.me/message/BSE4ZCEPY7ZOP1
━━━━━━━━━━━━━━━━━━━━
                `);
            }
        });
    }, 43200000); // 7200000 ms = 2 horas
});

// Importar módulos necesarios
const { exec } = require('child_process'); // Importar el módulo para ejecutar comandos del sistema

// Escuchar mensajes entrantes y responder con comandos específicos
client.on('message', async message => {
    // Verificar si el mensaje es de un grupo y si es así, ignorarlo
    if (message.isGroupMsg) {
        return; // Ignorar mensajes que provengan de grupos
    }

    const msg = message.body.toLowerCase().trim(); // Normaliza el mensaje

    // Comandos generales con prefijo '.'
    if (!msg.startsWith('$')) {
        return; // Ignorar mensajes que no comiencen con el prefijo '$'
    }

    // Eliminar el prefijo para obtener el comando
    const command = msg.slice(1);

    // Comprobar si el mensaje es un comando específico
    switch (command) {
        case 'menu':
        case 'menú':
                message.reply(`━━━━━━━━━━━━━━━━━━━━
   🌐 𝙎𝙞𝙣𝙉𝙤𝙢𝙗𝙧𝙚 𝘽𝙊𝙏🌐
━━━━━━━━━━━━━━━━━━━━
𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙢𝙚𝙣𝙪 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡

𝘗𝘳𝘦𝘧𝘪𝘫𝘰 "$"
━━━━━━━━━━━━━━━━━━━━

$1] 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻 𝗗𝗲𝗹 𝗕𝗼𝘁 ✓
➥ 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰̀𝘯 𝘋𝘦 𝘦𝘴𝘵𝘦 𝘉𝘰𝘵

$2] 𝗣𝗥𝗘𝗖𝗜𝗢𝗦✓
➥ 𝘗𝘳𝘦𝘤𝘪𝘰𝘴 𝘋𝘦 𝘓𝘰𝘴 𝘚𝘦𝘳𝘷𝘪𝘥𝘰𝘳𝘦𝘴

$]3 𝗖𝗢𝗠𝗣𝗔𝗡̃𝗜𝗔𝗦 𝗠𝗫 ✓
➥ 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘊𝘰𝘮𝘢𝘱𝘢𝘯̃𝘪𝘢𝘴 𝘋𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦𝘴 𝘌𝘯 𝘔𝘦𝘹𝘪𝘤𝘰

$4] 𝗠𝗘𝗧𝗢𝗗𝗢𝗦  ✓
➥ 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘔𝘦𝘵𝘰𝘥𝘰𝘴 𝘘𝘶𝘦 𝘔𝘢𝘯𝘦𝘫𝘰 𝘠 𝘝𝘦𝘯𝘥𝘰

$5] 𝗢𝗧𝗥𝗢𝗦 𝗦𝗘𝗩𝗜𝗖𝗜𝗢𝗦 ✓
➥ 𝘚𝘰𝘭𝘰 𝘌𝘴 𝘓𝘢 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘚𝘦𝘳𝘷𝘪𝘤𝘪𝘰𝘴
     𝘘𝘶𝘦 𝘔𝘢𝘯𝘦𝘫𝘰 𝘠 𝘓𝘰 𝘘𝘶𝘦 𝘝𝘦𝘯𝘥𝘰
     𝘌𝘴𝘵𝘰𝘴 𝘔𝘦𝘵𝘰𝘥𝘰𝘴 𝘕𝘰 𝘚𝘰𝘯 𝘔𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰𝘴
     𝘌𝘯 𝘎𝘳𝘶𝘱𝘰𝘴 
     
$6] 𝗚𝗥𝗨𝗣𝗢𝗦 𝗡𝗘𝗧𝗙𝗥𝗘𝗘✓
➥ 𝘔𝘪𝘴 𝘎𝘳𝘶𝘱𝘰𝘴 𝘗𝘶𝘦𝘥𝘦𝘴 𝘜𝘯𝘪𝘳𝘵𝘦
    𝘕𝘰 𝘖𝘭𝘷𝘪𝘥𝘦𝘴 𝘗𝘳𝘦𝘴𝘦𝘯𝘵𝘢𝘳𝘵𝘦
━━━━━━━━━━━━━━━━━━━━`);
                break;

            case '1':
                message.reply(`━━━━━━━━━━━━━━━━━━━━━━
   🌐 𝙎𝙞𝙣𝙉𝙤𝙢𝙗𝙧𝙚 𝘽𝙊𝙏🌐
━━━━━━━━━━━━━━━━━━━━━━
 ➣ 𝙑𝙚𝙧𝙨𝙞𝙤́𝙣 𝘼𝙘𝙩𝙪𝙖𝙡: 3.2.0
 ⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻
 𝘉𝘰𝘵 𝘈𝘶𝘵𝘰 𝘙𝘦𝘴𝘱𝘶𝘦𝘴𝘵𝘢 𝘊𝘰𝘯 𝘔𝘦𝘯𝘶
 𝘈𝘤𝘵𝘪𝘷𝘰 24/7
 ━━━━━━━━━━━━━━━━━━━━━━
          𝗔𝗱𝗾𝘂𝗶𝗲𝗿𝗲 𝗲𝗹 𝗯𝗼𝘁
 ⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻
 ➥ 𝘗𝘰𝘥𝘳𝘢𝘴 𝘜𝘴𝘢𝘳𝘭𝘰 𝘌𝘯 𝘛𝘶 𝘕𝘶𝘮𝘦𝘳𝘰
      𝘠 𝘗𝘰𝘯𝘦𝘳 𝘛𝘶 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰𝘯
               𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘭
━━━━━━━━━━━━━━━━━━━━━━
𝙎𝙪𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤́𝙣 𝙈𝙚𝙣𝙨𝙪𝙖𝙡: $30
━━━━━━━━━━━━━━━━━━━━━━
          𝘾𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙞𝙨𝙩𝙞𝙘𝙖𝙨:
               ☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎
•𝘚𝘰𝘱𝘰𝘳𝘵𝘦 𝘠 𝘈𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘤𝘪𝘰𝘯𝘦𝘴 𝘪𝘯𝘤𝘭𝘶𝘪𝘥𝘢𝘴
 ⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻
•𝘈𝘴𝘪𝘴𝘵𝘦𝘯𝘤𝘪𝘢, 𝘊𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘤𝘪𝘰𝘯, 𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘢𝘤𝘪𝘰𝘯
 ⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻
•𝘔𝘦𝘯𝘴𝘢𝘫𝘦 𝘗𝘶𝘣𝘭𝘪𝘤𝘪𝘵𝘢𝘳𝘪𝘰 𝘢𝘶𝘵𝘰𝘮𝘢𝘵𝘪𝘤𝘰
 ⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻
•𝘊𝘰𝘥𝘪𝘨𝘰 𝘓𝘪𝘣𝘳𝘦
⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻⫻
━━━━━━━━━━━━━━━━━━━━━━`);
                break;

            case '2':
                message.reply(`🌐✨ *SinNombre VPS* 🇲🇽✨
━━━━━━━━━━━━━━━━━━━━
> 💰 **PRECIOS:**
➥ *$110* : VPS 60 días (5 usuarios)
➥ *$60* : VPS 30 días (2 usuarios)
➥ *$30* : VPS 15 días ( 2 usuarios)
➥ *$15* : VPS 1 semana (1 usuario)

━━━━━━━━━━━━━━━━━━━━`);
                break;
            
            case '3':
                message.reply(`━━━━━━━━━━━━━━━━━━━━━━
   🌐 𝙎𝙞𝙣𝙉𝙤𝙢𝙗𝙧𝙚 𝘽𝙊𝙏🌐
━━━━━━━━━━━━━━━━━━━━━━
> 📡 **𝘾𝙊𝙈𝙋𝘼𝙉̃𝙄𝘼𝙎 𝙈𝙓**:
➣ _*Dirí sin saldo*_
➣ _*Movistar Redes*_
➣ _*Bait sin saldo*_
➣ _*Bait redes*_
➣ _*BAIT CONGELA*_
➣ _*Redicoopel redes*_
➣ _*Yolteco redes*_
➣ _*WEEX redes*_
➣ _*Virgin redes*_
➣ _*at&t sin saldo*_
➣ _*at&t redes*_
➣ _*Altan SinSaldo*_
➣ _*Simpn Redes*_
➣ _*CFE Sin Saldo*_
➣ _*Bienestar Sin Saldo*_

🧐_𝗦𝗶 𝗘𝗿𝗲𝘀 𝗗𝗲 𝗢𝘁𝗿𝗼 𝗣𝗮𝗶𝘀 𝗣𝗿𝗲𝗴𝘂𝗻𝘁𝗮._
     ➥𝘗𝘢𝘪𝘴 𝘠 𝘊𝘰𝘮𝘱𝘢𝘯̃𝘪𝘢 𝘱𝘰𝘳𝘧𝘢𝘷𝘰𝘳
━━━━━━━━━━━━━━━━━━━━━━`);
                break;

            case '4':
                message.reply(`━━━━━━━━━━━━━━━━━━━━━━
   🌐 𝙎𝙞𝙣𝙉𝙤𝙢𝙗𝙧𝙚 𝘽𝙊𝙏🌐
━━━━━━━━━━━━━━━━━━━━━━
 ➣ 𝙏𝙄𝙋𝙊 𝘿𝙀 𝙈𝙀𝙏𝙊𝘿𝙊𝙎 𝙀𝙉 𝙐𝙎𝙊
     ➥  𝘚𝘚𝘓
     ➥  𝘗𝘚𝘐𝘗𝘏𝘖𝘕     
     ➥  𝘝2𝘙𝘈𝘠 (𝘍𝘈𝘚𝘛𝘓𝘠)
     ➥  𝘜𝘋𝘗 𝘊𝘜𝘚𝘛𝘖𝘔
     ➥  𝘏𝘺𝘴𝘵𝘦𝘳𝘪𝘢 𝘜𝘋𝘗
     ➥  𝘡𝘐𝘗 𝘜𝘋𝘗
     ➥  𝘊𝘓𝘖𝘜𝘍𝘙𝘖𝘕𝘛
━━━━━━━━━━━━━━━━━━━━━━`);
                break;
            case '5':
            message.reply(`━━━━━━━━━━━━━━━━━━━━━━
   🌐 𝙎𝙞𝙣𝙉𝙤𝙢𝙗𝙧𝙚 𝘽𝙊𝙏🌐
━━━━━━━━━━━━━━━━━━━━━━
➣   𝙎𝙚𝙧𝙫𝙞𝙙𝙤𝙧𝙚𝙨 𝙑𝙋𝙎

➣   𝙈𝙚𝙩𝙤𝙙𝙤𝙨
       ➥𝘔𝘦𝘵𝘰𝘥𝘰 𝘍𝘢𝘴𝘵𝘭𝘺
       ➥𝘏𝘰𝘴𝘵
       ➥𝘊𝘭𝘰𝘶𝘧𝘳𝘰𝘯𝘵
       ➥𝘗𝘢𝘺𝘭𝘰𝘢𝘥𝘴

➣    𝙈𝙖𝙦𝙪𝙞𝙣𝙖𝙨 𝘾𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙖𝙨

➣   𝙣𝙪𝙢𝙚𝙧𝙤𝙨 𝙫𝙞𝙧𝙩𝙪𝙖𝙡𝙚𝙨 (+52 81)

➣   𝙈𝙚𝙩𝙤𝙙𝙤𝙨 𝘿𝙚 𝙚𝙙𝙞𝙘𝙞𝙤𝙣 𝘿𝙊𝘾...(𝘱𝘢𝘤𝘬)
        ➥ 𝘈𝘤𝘵𝘢𝘴
        ➥ 𝘊𝘦𝘳𝘵𝘪𝘧𝘪𝘤𝘢𝘥𝘰
        ➥ 𝘊𝘰𝘮𝘱𝘳𝘰𝘣𝘢𝘯𝘵𝘦𝘴 𝘋𝘦 𝘋𝘰𝘮𝘪𝘤𝘪𝘭𝘪𝘰
        ➥ 𝘌𝘴𝘵𝘢𝘥𝘰𝘴 𝘋𝘦 𝘊𝘶𝘦𝘯𝘵𝘢
        ➥ 𝘍𝘢𝘤𝘵𝘶𝘳𝘢𝘴
        ➥ 𝘎𝘰𝘣 (𝘢𝘯𝘵𝘦𝘴𝘦𝘥𝘦𝘯𝘵𝘦𝘴 𝘯𝘰 𝘱𝘦𝘯𝘢𝘭𝘦𝘴(2)
        𝘐𝘯𝘤𝘳𝘪𝘱𝘤𝘪𝘰𝘯 𝘙𝘍𝘊
        ➥ 𝘐𝘥𝘦𝘯𝘵𝘪𝘧𝘪𝘤𝘢𝘴𝘪𝘰𝘯𝘦𝘴
        ➥ 𝘓𝘪𝘤𝘦𝘯𝘤𝘪𝘢𝘴
        ➥ 𝘔𝘦𝘥𝘪𝘤𝘰𝘴
        ➥ 𝘛𝘢𝘳𝘫𝘦𝘵𝘢𝘴
        ➥ 𝘛𝘳𝘢𝘯𝘴𝘧𝘦𝘳𝘦𝘯𝘤𝘪𝘢𝘴

➣   𝘿𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙤 𝙒𝙚𝙗 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤
        ➥ 𝘏𝘵𝘮𝘭5
        ➥ 𝘜𝘥𝘦𝘮𝘪
        ➥ 𝘋𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰 𝘞𝘦𝘣
        ➥ 𝘊𝘴𝘴3
        ➥ 𝘗𝘩𝘱
        ➥ 𝘔𝘺𝘚𝘘𝘓
       
➣   𝘾𝙪𝙧𝙨𝙤𝙨 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤𝙨
        ➥ 𝘗𝘺𝘵𝘩𝘰𝘯
        
➣   𝗟𝗨𝗔𝗦
       ➥ 𝘗𝘢𝘺𝘭𝘰𝘢𝘥𝘴
       ➥ 𝘝2𝘳𝘢𝘺
       ➥ 𝘚𝘚𝘓
       ➥ 𝘉𝘢𝘯𝘯𝘦𝘳
       ➥ 𝘚𝘭𝘰𝘸𝘋𝘯𝘴
       ➥ 𝘦𝘵𝘤
       
➣   𝘾𝙪𝙧𝙨𝙤𝙨 𝘿𝙚 𝙉𝙚𝙩𝙛𝙧𝙚𝙚
       ➥ 𝘋𝘦𝘴𝘥𝘦 𝘭𝘰 𝘣𝘢𝘴𝘪𝘤𝘰 
       ➥ 𝘈𝘴𝘵𝘢 𝘭𝘰 𝘊𝘰𝘮𝘱𝘭𝘦𝘫𝘰

➣   𝙎𝙘𝙧𝙮𝙥𝙩
       ➥ 𝘴𝘤𝘳𝘪𝘱𝘵 𝘴𝘪𝘮𝘱𝘭𝘦 𝘵𝘦𝘴𝘵𝘦𝘰 (𝘩𝘰𝘴𝘵)
       ➥𝘴𝘤𝘳𝘪𝘱𝘵 𝘵𝘦𝘴𝘵𝘦𝘰 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰
       
━━━━━━━━━━━━━━━━━━━━━━`);
                    break;
            
                case '6':
                message.reply(`━━━━━━━━━━━━━━━━━━━━━━
   🌐 𝙎𝙞𝙣𝙉𝙤𝙢𝙗𝙧𝙚 𝘽𝙊𝙏🌐
━━━━━━━━━━━━━━━━━━━━━━
 ➣    𝙂𝙧𝙪𝙥𝙤𝙨 𝘿𝙚 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙈𝙓
     ➥ 𝘚𝘪𝘯𝘕𝘰𝘮𝘣𝘳𝘦-𝘕𝘦𝘵𝘧𝘳𝘦𝘦
 https://chat.whatsapp.com/Hlbkk1RKvsNF6LV9oeYgbO
 
     ➥   ㅤ
 https://chat.whatsapp.com/LDu73GSj9qT17GHMYtIPOg
 
 ➣           𝙂𝙧𝙪𝙥𝙤 𝘿𝙚 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 
 
  ✍︎✍︎𝘚𝘪 𝘕𝘰 𝘌𝘳𝘦𝘴 𝘋𝘦 𝘔𝘦𝘹𝘪𝘤𝘰 𝘌𝘯𝘵𝘳𝘢 𝘈𝘲𝘶𝘪✍︎✍︎
 ✍︎✍︎𝘋𝘦 𝘓𝘰 𝘊𝘰𝘯𝘵𝘳𝘢𝘳𝘪𝘰 𝘌𝘭 𝘉𝘰𝘵 𝘛𝘦 𝘌𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘢✍︎✍︎
 
     ➥  𝘚𝘪𝘯𝘕𝘰𝘮𝘣𝘳𝘦-𝘓𝘈𝘛𝘈𝘔-𝘚𝘌𝘙𝘝𝘌𝘙𝘚
https://chat.whatsapp.com/EcMClegA2DVBZRiudPqYqP
━━━━━━━━━━━━━━━━━━━━━━ 
𝙉𝙊 𝙊𝙇𝙑𝙄𝘿𝙀𝙎 𝙋𝙍𝙀𝙎𝙀𝙉𝙏𝘼𝙍𝙏𝙀
━━━━━━━━━━━━━━━━━━━━━━ 
     `);
                    break;
    case 'actualizar':
            message.reply('🔄Actualizando el bot...');

            // Ejecutar el comando `git pull` para actualizar el bot
            exec('git pull', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error durante la actualización: ${error.message}`);
                    message.reply('❌Hubo un error al actualizar el bot.');
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    message.reply(`⚠️Actualización completa,🙂‍↔️ pero con advertencias..... actualizar de nuevo😁: ${stderr}`);
                    return;
                }

                console.log(`stdout: ${stdout}`);
                message.reply('✅El bot ha sido actualizado exitosamente.🧐🍷');

                // Reiniciar el bot con PM2
                exec('pm2 restart mi-bot', (error) => {
                    if (error) {
                        console.error(`Error al reiniciar el bot: ${error.message}`);
                        message.reply('Hubo un error al reiniciar el bot.');
                    } else {
                        message.reply('♻️El bot ha sido reiniciado exitosamente..... espere unos segundos');
                    }
                });
            });
            break;

        default:
                // Ignorar comandos no reconocidos
                break;
        }
});
// Iniciar el cliente
client.initialize();

// Aviso de activación una vez que el bot esté listo después del reinicio
client.on('ready', () => {
    // Verifica si `message` está disponible. Si no lo está, puedes enviar el mensaje a un canal específico
    if (typeof message !== 'undefined') {
        message.reply('🚀 El bot se ha activado nuevamente y está listo para usar.');
    } else {
        console.log('🧐 El bot se ha activado nuevamente y está listo para usar.');
        // Alternativamente, podrías enviar un mensaje a un canal específico si `message` no está disponible
        // client.channels.cache.get('CHANNEL_ID').send('🚀 El bot se ha activado nuevamente y está listo para usar.');
    }
});
