/** 
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*╭───── 「 𝐒𝐔𝐏𝐄𝐑𝐁𝐎𝐓 - 𝐌𝐃 」 ──────*
│ hola usuario bienvenido este bot es nuevo todavía está el desarrollo 
│ 🔸*menuprueba*
⌜ _*ShanBot by shanduy*_ ⌟  

◉ *INFORMACION*
   ○ Comando: ⌜ ${prefix} ⌟
   ○ Creador: shanduy™ 
   ○ Cómo instalar el bot: https://youtu.be/HxZYNgW9aI8
   ○ Mi Instagram: https://www.instagram.com/thepavos

◉ *COMUNICADO*
Nuevo video de cómo instalar el bot :)
https://youtu.be/HxZYNgW9aI8

◉ *PARA USAR EL BOT*
Registrate con el comando ${prefix}daftar y tu nombre

◉ *NUEVOS COMANDOS*
○ ${prefix}banmenu
Banear a personas el uso del bot
○ ${prefix}levelmenu
Level para tus grupos
○ ${prefix}antimenu
Su nombre lo dice todo (antilink)
○ ${prefix}otak
Monas chinas
○ ${prefix}shantera
Interactua con el bot

◉ *NUEVOS MENUS*
○ ${prefix}juegos
Diviértete con tus amigos :)
○ ${prefix}desmenu
Descargar musica y videos
○ ${prefix}version
Conoce la versión de tu bot
○ ${prefix}welmenu
Comando de bienvenida solo grupos

◉ *RESUELVE TUS DUDAS*
  ║
  ╠ ○ ${prefix}creador
  ╚ Dudas o problemas aqui

◉ *CREAR STICKERS*
  ║
  ╠ ○ ${prefix}sticker
  ╠ ○ ${prefix}attp
  ╠ Coloca un texto pero sin emojis no tildes
  ╠ ○ ${prefix}stickergif
  ╚ 6 segundos de video

◉ *CONVERTIDORES*
  ║
  ╠ ○ ${prefix}toimg
  ╠ De sticker a JPG
  ╠ ○ ${prefix}tomp3
  ╚ De video a MP3

◉ *AUDIO*
  ║
  ╠ ○ ${prefix}idioma
  ╚ ○ ${prefix}tts es (mas texto)

◉ *OTROS*
  ║
  ╠ ○ ${prefix}wame
  ╠ Link de Whatsapp
  ╠ ○ ${prefix}qrcode
  ╚ Coloca un texto

◉ *GRUPOS*
  ║
  ╠ ○ ${prefix}unir
  ╠ Unir a una persona al grupo
  ╠ ○ ${prefix}fgc
  ╠ Cambiar foto del grupo
  ╠ ○ ${prefix}ngc
  ╠ Cambiar nombre del grupo
  ╠ ○ ${prefix}dgc
  ╠ Cambiar descripcion del grupo
  ╠ ○ ${prefix}closegc
  ╠ Cerrar el grupo solo admins
  ╠ ○ ${prefix}opengc
  ╠ Abrir grupo solo admins
  ╠ ○ ${prefix}promote
  ╠ Dar admin a un miembro
  ╠ ○ ${prefix}demote
  ╠ Quitar el admin
  ╠ ○ ${prefix}kick
  ╠ Agrega a la persona que deseás eliminar
  ╠ ○ ${prefix}linkgc
  ╠ Link del grupo
  ╠ ○ ${prefix}adminlist
  ╠ Nombra a los admins del grupo
  ╠ ○ ${prefix}x
  ╠ Envia un texto para nombrar a todos
  ╠ ○ ${prefix}todos
  ╚ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  
◉ *NSWF* 
  ║
  ╚ ○ ${prefix}nsfwmenu

Para activar los NSFW coloque el siguiente comando ${prefix}nsfw 1 y para desactivar los NSFW coloque ${prefix}nsfw 0


No te olvides de seguirme en instagram flaco ;)

╰────`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/10842a031f39684aa2297.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'grupo',
               url: 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k'
             }

           },
               {
             quickReplyButton: {
               displayText: 'owner',
               id: '.owner',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'descarga',
               id: '.descarga',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['prueba']
handler.tags = ['info']
handler.command = /^prueba(com|ple)|allmenuu$/i

module.exports = handler
