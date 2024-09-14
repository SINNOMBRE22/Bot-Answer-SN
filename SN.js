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
🚀 _*Dirí sin saldo (velocidad lenta)*_
🚀 _*Movistar Redes*_
🚀 _*Bait sin saldo (velocidad lenta)*_
🚀 _*Bait redes*_
🚀 _*BAIT CONGELA*_
🚀 _*Redicoopel redes*_
🚀 _*Yolteco redes*_
🚀 _*WEEX redes*_
🚀 _*Virgin redes*_
🚀 _*at&t sin saldo*_
🚀 _*at&t redes*_
🚀 _*Altan SinSaldo (velocidad lenta)*_
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
    if (!msg.startsWith('.')) {
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

𝘗𝘳𝘦𝘧𝘪𝘫𝘰 "."
━━━━━━━━━━━━━━━━━━━━

.1] 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻 𝗗𝗲𝗹 𝗕𝗼𝘁 ✓
➥ 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰̀𝘯 𝘋𝘦 𝘦𝘴𝘵𝘦 𝘉𝘰𝘵

.2] 𝗣𝗥𝗘𝗖𝗜𝗢𝗦✓
➥ 𝘗𝘳𝘦𝘤𝘪𝘰𝘴 𝘋𝘦 𝘓𝘰𝘴 𝘚𝘦𝘳𝘷𝘪𝘥𝘰𝘳𝘦𝘴

.]3 𝗖𝗢𝗠𝗣𝗔𝗡̃𝗜𝗔𝗦 𝗠𝗫 ✓
➥ 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘊𝘰𝘮𝘢𝘱𝘢𝘯̃𝘪𝘢𝘴 𝘋𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦𝘴 𝘌𝘯 𝘔𝘦𝘹𝘪𝘤𝘰

.4] 𝗠𝗘𝗧𝗢𝗗𝗢𝗦  ✓
➥ 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘔𝘦𝘵𝘰𝘥𝘰𝘴 𝘘𝘶𝘦 𝘔𝘢𝘯𝘦𝘫𝘰 𝘠 𝘝𝘦𝘯𝘥𝘰

.5] 𝗢𝗧𝗥𝗢𝗦 𝗦𝗘𝗩𝗜𝗖𝗜𝗢𝗦 ✓
➥ 𝘚𝘰𝘭𝘰 𝘌𝘴 𝘓𝘢 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘚𝘦𝘳𝘷𝘪𝘤𝘪𝘰𝘴
     𝘘𝘶𝘦 𝘔𝘢𝘯𝘦𝘫𝘰 𝘠 𝘓𝘰 𝘘𝘶𝘦 𝘝𝘦𝘯𝘥𝘰
     𝘌𝘴𝘵𝘰𝘴 𝘔𝘦𝘵𝘰𝘥𝘰𝘴 𝘕𝘰 𝘚𝘰𝘯 𝘔𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰𝘴
     𝘌𝘯 𝘎𝘳𝘶𝘱𝘰𝘴 
     
.6] 𝗚𝗥𝗨𝗣𝗢𝗦 𝗡𝗘𝗧𝗙𝗥𝗘𝗘✓
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
•𝘊𝘰𝘥𝘪𝘨𝘰 𝘓𝘪𝘣𝘳𝘦
━━━━━━━━━━━━━━━━━━━━━━`);
                break;

            case '2':
                message.reply(`========================
➣ 𝗗𝘂𝗱𝗮𝘀 𝗦𝗼𝗯𝗿𝗲 𝗡𝗲𝘁𝗳𝗿𝗲𝗲
========================

1️⃣ cfg) ¿Cómo configurar para tener netfree?
2️⃣ vpn) ¿Qué es VPN y cómo usarla en Netfree?
3️⃣ prx) ¿Cómo configurar un proxy en Netfree?
4️⃣ blq) ¿Cómo evitar bloqueos en Netfree?
5️⃣ dev) ¿Netfree funciona en todos los dispositivos?
6️⃣ app) ¿Existen apps específicas para Netfree?
7️⃣ spd) ¿Cómo mejorar la velocidad con Netfree?
8️⃣ acc) ¿Cómo crear cuentas en Netfree?
9️⃣ comp) ¿Netfree es compatible con mi operador?
🔟 err) ¿Qué hacer si Netfree no se conecta?
========================`);
                break;

            case 'cfg':
                message.reply(`Para configurar Netfree (navegación gratuita en internet usando VPNs o proxies), hay varias opciones y pasos a seguir, dependiendo del método que prefieras. Aquí te doy una guía básica para tener Netfree:

1. **Configuración con VPN**:
   - Descarga una aplicación VPN como **Psiphon**, **HTTP Injector**, o **NapsternetV**.
   - Busca servidores o configuraciones VPN Netfree específicas para tu país y proveedor.
   - Carga el archivo de configuración (con extensión ".ehi" o ".nsv") en la app.
   - Activa la VPN para empezar a navegar gratis.

2. **Configuración con Proxy**:
   - Accede a la configuración de tu teléfono o computadora.
   - En **Redes y Conexiones**, busca **Configuración de Proxy**.
   - Inserta el **proxy gratuito** y el **puerto** que funcione con tu operador.
   - Guarda los cambios y navega.

3. **Usar una APN modificada**:
   - Ve a **Configuraciones > Redes móviles > Nombres de puntos de acceso (APN)**.
   - Crea un nuevo APN con los siguientes valores:
     - **Nombre**: Cualquier nombre
     - **APN**: El APN que funcione en tu región (búscalo según tu país).
     - **Proxy y Puerto**: Si se requiere.

4. **Uso de HTTP Injector**:
   - Descarga la app HTTP Injector.
   - Busca archivos de configuración (.ehi) para tu proveedor de red.
   - Carga el archivo en la app.
   - Conecta y empieza a navegar.

### Consejos adicionales:
- Asegúrate de buscar servidores y archivos de configuración específicos para tu país y operador.
- Si uno no funciona, prueba diferentes configuraciones y proxies.`);
                break;

            case 'vpn':
                message.reply(`Una **VPN** (Red Privada Virtual, por sus siglas en inglés) es una tecnología que permite crear una conexión segura y encriptada entre tu dispositivo e internet. Funciona redirigiendo tu tráfico de internet a través de un servidor remoto, lo que oculta tu dirección IP y protege tu actividad en línea.

### ¿Cómo usar una VPN en Netfree?

1. **Descargar una aplicación VPN**: 
   - Algunas aplicaciones populares para Netfree incluyen **Psiphon**, **HTTP Injector**, y **NapsternetV**.
   - Estas aplicaciones permiten conexiones Netfree a través de servidores configurados especialmente para ello.

2. **Configurar la VPN**:
   - Una vez instalada la aplicación, debes cargar una configuración o archivo específico para Netfree. Este archivo (.ehi, .nsv o configuración manual) contiene los ajustes para la red y el país en el que te encuentras.
   - Activa la VPN y espera que se conecte al servidor.

3. **Beneficios de usar VPN en Netfree**:
   - **Privacidad**: Tu actividad en línea es encriptada y tu dirección IP se oculta.
   - **Acceso gratuito**: En muchos países, las VPNs pueden habilitar acceso gratuito a internet en ciertas redes móviles.


Con esto, puedes tener una mejor experiencia Netfree protegiendo tu privacidad y accediendo a internet gratuitamente en ciertos proveedores.`);
                break;

            case 'prx':
                message.reply(`Configurar un **proxy** para Netfree es un proceso que te permite acceder a internet sin gastar datos, utilizando servidores específicos y ajustando ciertos parámetros en tu dispositivo.

### Pasos para configurar un proxy en Netfree:

1. **Conseguir una dirección de proxy**:
   - Encuentra un proxy que funcione con tu operador móvil. Estos proxies pueden ser gratuitos o de pago, y algunos se publican en foros o grupos dedicados a Netfree.

2. **Configurar el proxy en tu dispositivo móvil**:
   - Ve a la configuración de **Redes** en tu dispositivo.
   - Selecciona la opción de **Redes Móviles** o **Conexiones** y busca la configuración de **Punto de acceso (APN)**.
   - En el campo de **Proxy** introduce la dirección del proxy y en el campo **Puerto**, introduce el número correspondiente (por ejemplo, 80 o 8080).

3. **Utilizar aplicaciones de inyección**:
   - Para una configuración más avanzada y estable, puedes usar aplicaciones como **HTTP Injector**, **KPN Tunnel**, o **HTTP Custom**. Estas aplicaciones permiten configurar el proxy junto con otros parámetros como cabeceras HTTP, lo que facilita la conexión.

4. **Archivos de configuración**:
   - Algunos servidores Netfree requieren que cargues un archivo de configuración (.ehi, .hpi, .nsv) en estas aplicaciones para conectar correctamente al proxy. Estos archivos contienen las cabeceras y ajustes específicos.

Siguiendo estos pasos, puedes configurar un proxy y disfrutar de la conexión Netfree en tu red móvil.`);
                break;

            case 'blq':
                message.reply(`Para evitar **bloqueos** en Netfree, es esencial aplicar varios métodos y buenas prácticas que ayudan a mantener la conexión estable y sin restricciones:

1. **Cambiar de proxy con frecuencia**:
   - Los proxies pueden saturarse o ser bloqueados por los proveedores de servicio. Cambiar a otro proxy funcional y actualizado es una estrategia efectiva para evitar bloqueos.

2. **Usar VPN y SSH**:
   - Las **VPNs** cifran el tráfico y ocultan tu conexión, lo que ayuda a evitar detecciones y bloqueos. Configurar conexiones **SSH** puede mejorar la estabilidad y seguridad.

3. **Usar headers HTTP personalizados**:
   - Algunos operadores bloquean conexiones al detectar patrones comunes. Las aplicaciones como **HTTP Injector** o **KPN Tunnel** permiten personalizar los headers HTTP, lo que hace que el tráfico sea menos detectable.

4. **Cambiar de APN**:
   - Si un **APN** es bloqueado, puedes probar con otros APNs alternativos que funcionen con tu operador.

5. **Actualizar archivos de configuración**:
   - Los archivos de configuración (.ehi, .kpn, .nsv) deben estar actualizados con nuevos parámetros para evitar bloqueos por parte de los servidores o del ISP.

6. **Revisar la saturación de servidores**:
   - Evita conectar a servidores que estén saturados o caídos, ya que esto podría causar bloqueos temporales o interrupciones.

7. **Monitorear las redes sociales o foros**:
   - Mantente informado sobre bloqueos o nuevas soluciones a través de comunidades en línea dedicadas a Netfree, como grupos de Telegram o foros.`);
                break;

            case 'dev':
                message.reply(`**Netfree** puede funcionar en una gran variedad de dispositivos, pero la compatibilidad y el rendimiento pueden depender de varios factores:

1. **Teléfonos móviles**:
   - **Android**: Es compatible con múltiples aplicaciones de inyección de proxy, VPN y SSH, como **HTTP Injector**, **KPN Tunnel** y **Psiphon**.
   - **iOS**: Puede ser más limitado debido a restricciones de apps, pero con la configuración correcta de VPN o proxy, Netfree puede funcionar.

2. **Computadoras**:
   - **Windows y Linux**: Puede configurarse mediante **proxy** o **VPN**. Utilizar aplicaciones como **Proxifier** o el propio cliente de **OpenVPN** permite acceso Netfree en sistemas operativos de escritorio.
   
3. **Tabletas y otros dispositivos móviles**: 
   - Funcionan igual que en teléfonos, siempre que sea posible instalar aplicaciones compatibles de VPN o proxy.

4. **Routers**: 
   - Algunos routers con configuraciones avanzadas permiten usar VPN o túneles SSH, lo que habilita Netfree en toda la red.`);
                break;
                
            case '3':
                message.reply(`Para contactar con nosotros, por favor envía un correo a soporte@ejemplo.com o llama al 123-456-7890`);
                break;

            case '4':
                message.reply('Gracias por usar el bot. ¡Hasta luego!');
                break;

                case 'actualizar':
            message.reply('Actualizando el bot...');

            // Ejecutar el comando `git pull` para actualizar el bot
            exec('git pull', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error durante la actualización: ${error.message}`);
                    message.reply('Hubo un error al actualizar el bot.');
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    message.reply(`Actualización completa, pero con advertencias..... actualizar de nuevo: ${stderr}`);
                    return;
                }

                console.log(`stdout: ${stdout}`);
                message.reply('El bot ha sido actualizado exitosamente.');

                // Reiniciar el bot con PM2
                exec('pm2 restart mi-bot', (error) => {
                    if (error) {
                        console.error(`Error al reiniciar el bot: ${error.message}`);
                        message.reply('Hubo un error al reiniciar el bot.');
                    } else {
                        message.reply('El bot ha sido reiniciado exitosamente..... espere unos segundos');
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

