let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `ejemplo:\n${usedPrefix + command} The whatbot-MD`
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_hecho en *${formatDate(repo.created_at)}*_
_ultima actualización el *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} tema ${repo.description ? `
*Descripción:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
    m.reply(str)
}
handler.help = ['githubsearch'].map(v => v + ' <pencarian>')
handler.tags = ['github']

handler.command = /^g(ithub|h)search$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
