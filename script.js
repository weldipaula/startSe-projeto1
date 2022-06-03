//const url = 'https://api.github.com/users/weldipaula/repos'
const header = document.getElementById('container-navbar')
const project = document.getElementById("all-projects")
const item = document.getElementById('project-item')

const skills = document.querySelectorAll('[data-anime]')
const animeClass = 'animate'

// lidando com o scroll no cabeçalho
window.addEventListener('scroll', event => {

  if (document.documentElement.scrollTop > 40) {
    header.style.background = 'var(--gold-filter)';
    header.style.position = 'fixed';
  } else {
    header.style.background = 'var(--gold-primary)';
    header.style.position = 'relative';
  }
  anime()
})

function anime () {
  const windowTop = (window.pageYOffset*3)/2.3
  skills.forEach(skill => {
    console.log(skill.offsetTop);
    console.log('top '+windowTop);
    console.log('scroll '+ document.documentElement.scrollTop );
    if (windowTop > skill.offsetTop) {
      skill.classList.add('animate')
    }

  })
}



//recebendo dados do github
async function getData () {
  const response = await fetch(url)
  const data = await response.json();

  data.map(repo => {

    console.log(repo);
    const item = document.createElement('div')
    item.classList.add('project-item')
    const itemInfo = document.createElement('div')
    itemInfo.classList.add('project-info')
    const itemImg = document.createElement('div')
    itemImg.classList.add('project-img')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    
    h1.innerHTML = repo.name
    h2.innerHTML = repo.description

    itemInfo.appendChild(h1)
    itemInfo.appendChild(h2)
    itemInfo.appendChild(p)
    item.appendChild(itemInfo)
    item.appendChild(itemImg)
    
    
    project.appendChild(item)
  })

}
getData()



