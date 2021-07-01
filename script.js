let listadorDeLivros = document.querySelector('.listaLivros')
let salvaLivro = document.querySelector('#salvaLivro')
let mostraLivros = document.querySelector('#mostraLivros')

let recebeTitulo = document.querySelector('#titulo')
let recebeAutor = document.querySelector('#autor')
let recebeAno = document.querySelector('#ano')
let recebeLido = document.querySelector('#lido')

let minhaBiblioteca = []

function Livro(titulo, autor, ano, lido) {
  this.titulo = titulo
  this.autor = autor
  this.ano = ano
  this.lido = lido
}

function limparConteudo() {
  recebeTitulo.value = ''
  recebeAutor.value = ''
  recebeAno.value = ''
  recebeLido.value = 'off'
}

function verificaCheckbox() {
  if (recebeLido.checked) {
    return (recebeLido.value = true)
  } else {
    return (recebeLido.value = false)
  }
}

function salvaLivroNaBiblioteca() {
  minhaBiblioteca.push(
    new Livro(
      recebeTitulo.value,
      recebeAutor.value,
      recebeAno.value,
      verificaCheckbox(recebeLido)
    )
  )
}

function mostraLivrosDaBiblioteca() {
  minhaBiblioteca.forEach((livro) => listaLivros(livro))
}

salvaLivro.addEventListener('click', function () {
  salvaLivroNaBiblioteca()
  limparConteudo()
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

  listadorDeLivros.appendChild(livrBannerTudo)
  livrBannerTudo.appendChild(livrBannerTitulo)
  livrBannerTitulo.textContent = `Titulo ${livro.titulo}`
  livrBannerTudo.appendChild(livrBannerAutor)
  livrBannerAutor.textContent = `Autor: ${livro.autor}`
  livrBannerTudo.appendChild(livrBannerAno)
  livrBannerAno.textContent = ` Ano: ${livro.ano}`
  livrBannerTudo.appendChild(livrBannerLido)
  livrBannerLido.textContent = verificaLido(livro)
}
