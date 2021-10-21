const linksSocialMedia = {
  linkedin: 'fernando-do-nascimento-veiga'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/in/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
