async function handler(m, { command, usedPrefix, isOwner }) {
    if (!global.db.data.settings[this.user.jid].anon) return await this.sendBut(m.chat, isOwner ? 'Aktifkan' : 'Anonymous Chat dimatikan', wm2, isOwner ? 'Aktifkan' : 'Owner', isOwner ? '.on anon' : '.owner', m)
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return await this.sendBut(m.chat, '_no esta el chat anonymous_', wm2, 'buscar pareja', `${usedPrefix}start`, m)
            m.reply('_Ok_')
            let other = room.other(m.sender)
            if (other) await this.sendBut(other, '_el.socios abadonor chat_', wm2, 'buscar socios', `${usedPrefix}start`, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return await this.sendBut(m.chat, '_todavia esta el chat anoymous esperando algun compañero_', wm2, 'salir', `${usedPrefix}leave`, m)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendBut(room.a, '_socio encontrado!_', wm2, 'next', `${usedPrefix}next`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendBut(room.b, '_socio encontrado!_', wm2, 'Next', `${usedPrefix}next`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendBut(m.chat, '_esperado compañero..._', wm2, 'salir', `${usedPrefix}leave`, m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']

handler.private = true

module.exports = handler