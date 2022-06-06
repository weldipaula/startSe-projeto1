const url = 'https://api.github.com/users/weldipaula/repos'
const header = document.getElementById('container-navbar')
const project = document.getElementById("all-projects")
const item = document.getElementById('project-item')

const animeClass = 'animate'

const windows = window.innerHeight


window.addEventListener('scroll', event => {
  

  
  // lidando com o scroll no cabeçalho
  if (document.documentElement.scrollTop > 40) {
    header.style.background = 'var(--gold-filter)';
    header.style.position = 'fixed';
  } else {
    header.style.background = 'var(--gold-primary)';
    header.style.position = 'relative';
  }
  anime()
})

//lindando com animaçoes de elementos
function anime () {

  const skills = document.querySelectorAll('[data-anime]')
  const windowTop = (window.pageYOffset)
  skills.forEach(skill => {
    if ((windowTop*1.2) > skill.offsetTop/1.2) {
      skill.classList.add('animate')
    }

  })
}

//recebendo dados do github
async function getData () {
  const response = await fetch(url)
  const data = await response.json();
  const dataSelected = []
  // repositorios que deseja mostrar
  const repos = data.forEach(repu => {
    if (
      repu.name === 'ap-one' || 
      repu.name === 'todo-github' || 
      repu.name === 'unsplash-search' || 
      repu.name === 'ignite-rshoes'
    ){ dataSelected.push(repu) }
  })
  
  // repositorios que serao renderizados
  dataSelected.map(repo => {
    urlImg = `https://raw.githubusercontent.com/weldipaula/${repo.name}/master/src/assets/reader/presentation.gif`

      //criando a div com o projeto
      const item = document.createElement('div')
      item.classList.add('project-item')
      const itemInfo = document.createElement('div')
      itemInfo.classList.add('project-info')
      itemInfo.setAttribute('data-anime','down')
      const itemImg = document.createElement('div')
      itemImg.classList.add('project-img')
      itemImg.setAttribute('data-anime','up')
      const repoImg = document.createElement('img')
      repoImg.src=urlImg
      const h1 = document.createElement('h1')
      const h2 = document.createElement('h2')
      const p = document.createElement('p')
      
      h1.innerHTML = repo.name
      h2.innerHTML = repo.description
  
      itemInfo.appendChild(h1)
      itemInfo.appendChild(h2)
      itemInfo.appendChild(p)
      itemImg.appendChild(repoImg)
      item.appendChild(itemInfo)
      item.appendChild(itemImg)

      project.appendChild(item)
  })

}
getData()



