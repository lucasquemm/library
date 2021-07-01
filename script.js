let listadorDeLivros = document.querySelector('.listaLivros')
let salvaLivro = document.querySelector('#salvaLivro')
let mostraLivros = document.querySelector('#mostraLivros')

let recebeTitulo = document.querySelector('#titulo')
let recebeAutor = document.querySelector('#autor')
let recebeAno = document.querySelector('#ano')
let recebeLido = document.querySelector('#lido')

let minhaBiblioteca = []

let id = 0

function Livro(titulo, autor, ano, lido) {
  this.titulo = titulo
  this.autor = autor
  this.ano = ano
  this.lido = lido
  this.id = id++
}

function limparConteudo() {
  recebeTitulo.value = ''
  recebeAutor.value = ''
  recebeAno.value = ''
  recebeLido.checked = false
}

function salvaLivroNaBiblioteca() {
  minhaBiblioteca.push(
    new Livro(
      recebeTitulo.value,
      recebeAutor.value,
      recebeAno.value,
      recebeLido.checked
    )
  )
}

function alteraStatus(livro) {
  if (livro.lido == true) {
    livro.lido = false
    return console.log('status alterado', minhaBiblioteca[0])
  } else {
    livro.lido = true
    return console.log('status alterado', minhaBiblioteca[0])
  }
}

function removeLivroDaBiblioteca(id) {
  minhaBiblioteca = minhaBiblioteca.filter((livroid) => livroid.id != id)
}

function mostraLivrosDaBiblioteca() {
  listadorDeLivros.innerHTML = ''
  minhaBiblioteca.forEach((livro) => listaLivros(livro))
}

salvaLivro.addEventListener('click', function () {
  salvaLivroNaBiblioteca()
  limparConteudo()
  mostraLivrosDaBiblioteca()
})

mostraLivros.addEventListener('click', function () {
  mostraLivrosDaBiblioteca()
})

const livro1 = new Livro('teste', 'testador', 1000, true)
const livro2 = new Livro('teste2', 'testador2', 1900, false)
const livro3 = new Livro('teste3', 'testador3', 2000, false)

minhaBiblioteca.push(livro1, livro2, livro3)

function verificaLido(livro) {
  if (livro.lido) {
    return `Lido`
  } else {
    return `Nao lido`
  }
}

function listaLivros(livro) {
  let livrBannerTudo = document.createElement('div')
  let livrBannerTitulo = document.createElement('p')
  let livrBannerAutor = document.createElement('p')
  let livrBannerAno = document.createElement('p')
  let livrBannerLido = document.createElement('p')
  let removeLivroBotao = document.createElement('button')
  let alteraStatusLido = document.createElement('button')

  listadorDeLivros.appendChild(livrBannerTudo)
  livrBannerTudo.style.border = '2px solid black'
  livrBannerTudo.appendChild(livrBannerTitulo)
  livrBannerTitulo.textContent = `Titulo: ${livro.titulo}`
  livrBannerTudo.appendChild(livrBannerAutor)
  livrBannerAutor.textContent = `Autor: ${livro.autor}`
  livrBannerTudo.appendChild(livrBannerAno)
  livrBannerAno.textContent = ` Ano: ${livro.ano}`
  livrBannerTudo.appendChild(livrBannerLido)
  livrBannerLido.textContent = verificaLido(livro)
  livrBannerTudo.appendChild(removeLivroBotao)
  removeLivroBotao.textContent = 'Remove Livro'
  removeLivroBotao.addEventListener('click', function () {
    removeLivroDaBiblioteca(livro.id)
    mostraLivrosDaBiblioteca()
  })
  livrBannerTudo.appendChild(alteraStatusLido)
  alteraStatusLido.textContent = 'Altera Status'
  alteraStatusLido.addEventListener('click', function () {
    alteraStatus(livro)
    mostraLivrosDaBiblioteca()
  })
}
