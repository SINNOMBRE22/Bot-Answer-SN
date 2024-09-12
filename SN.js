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

// Escuchar mensajes entrantes y responder con comandos específicos
client.on('message', async message => {
    const msg = message.body.toLowerCase().trim(); // Normaliza el mensaje

       // Comandos generales con prefijo '$'
        if (!msg.startsWith('.')) {
            return; // Ignorar mensajes que no comiencen con el prefijo '$'
        }

        // Eliminar el prefijo para obtener el comando
        const command = msg.slice(1);

        // Comprobar si el mensaje es un comando específico
        switch (command) {
            case 'menu':
            case 'menú':
                message.reply(`======================== 
   🌐 𝓢𝓲𝓷𝓝𝓸𝓶𝓫𝓻𝓮 𝓑𝓸𝓽 - 𝓜𝓮𝓷𝓾 𝓟𝓻𝓲𝓷𝓬𝓲𝓹𝓪𝓵 🌐
======================== 

𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙢𝙚𝙣𝙪 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡

𝗉𝗋𝖾𝖿𝗂𝗃𝗈 "."

Si vienes a comprar o por otro asunto,
no es necesario usar comandos.
Espera y te responderé pronto.

======================== 
Cómo Usar El Bot

Ejemplo: ".1" ".2" etc
========================
1️⃣ 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻 𝗗𝗲𝗹 𝗕𝗼𝘁 ✓
➥ Información básica sobre el funcionamiento del bot y sus capacidades.

2️⃣ 𝗗𝘂𝗱𝗮𝘀 𝗦𝗼𝗯𝗿𝗲 𝗡𝗲𝘁𝗳𝗿𝗲𝗲 ✓
➥ Ayuda y soporte sobre Netfree y apps

3️⃣ 𝗟𝗶𝘀𝘁𝗮 𝗗𝗲 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 ✓
➥ Todos los comandos del bot y cómo usarlos.

4️⃣ 💼 𝗚𝗲𝘀𝘁𝗶𝗼𝗻𝗮𝗿 𝗩𝗣𝗦 ✓
➥ Herramientas para aprender [crear cuentas SSH, ver puertos, etc.](aún no disponible mi link)

5️⃣ 🛠 𝗖𝗼𝗺𝗼 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝗿 𝗦𝗲𝗿𝘃𝗶𝗱𝗼𝗿 ✓
➥ Opciones avanzadas para la configuración de servidores. (No disponible aún)
======================== 
Para más información, puedes usar los comandos en la lista o contactarme directamente`);
                break;

            case '1':
                message.reply(`======================== 
➣ SinNombre Bot 
======================== 
➣ DESCRIPCIÓN: 
   
 SinNombre Bot ha sido diseñado para responder 
 automáticamente a mensajes de WhatsApp.
 Facilita el entendimiento de los usuarios 
 sobre temas relacionados con servidores VPS 
 y herramientas tecnológicas. 
 El bot también está preparado para gestionar consultas 
 y ofrecer soporte en otras áreas importantes.

======================== 
➣ CARACTERÍSTICAS: 
   
   ➥ Respuestas automáticas.
   ➥ Información detallada sobre el tema
   ➥ Soporte técnico para tus necesidades 
   ➥ Comandos personalizados

======================== 
➣ VENTAJAS: 

   ➥ Facilidad de uso y manejo
   ➥ Conexión continua vía WhatsApp Web.
   ➥ Menús pra mayor fasilidad

========================
    REGRESAR AL MENU
         (.menu)
========================`);
                break;

            case '2':
                message.reply(`========================
➣ 𝗗𝘂𝗱𝗮𝘀 𝗦𝗼𝗯𝗿𝗲 𝗡𝗲𝘁𝗳𝗿𝗲𝗲
========================

1️⃣ .cfg) ¿Cómo configurar para tener netfree?
2️⃣ .vpn) ¿Qué es VPN y cómo usarla en Netfree?
3️⃣ .prx) ¿Cómo configurar un proxy en Netfree?
4️⃣ .blq) ¿Cómo evitar bloqueos en Netfree?
5️⃣ .dev) ¿Netfree funciona en todos los dispositivos?
6️⃣ .app) ¿Existen apps específicas para Netfree?
7️⃣ .spd) ¿Cómo mejorar la velocidad con Netfree?
8️⃣ .acc) ¿Cómo crear cuentas en Netfree?
9️⃣ .comp) ¿Netfree es compatible con mi operador?
🔟 .err) ¿Qué hacer si Netfree no se conecta?
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

            default:
                // Ignorar comandos no reconocidos
                break;
        }
});

// Iniciar el cliente
client.initialize();
