let listadorDeLivros = document.querySelector('.listaLivros')
let salvaLivro = document.querySelector('#salvaLivro')
let mostraLivros = document.querySelector('#mostraLivros')

let recebeTitulo = document.querySelector('#titulo')
let recebeAutor = document.querySelector('#autor')
let recebeAno = document.querySelector('#ano')

let minhaBiblioteca = []

function Livro(titulo, autor, ano) {
  this.titulo = titulo
  this.autor = autor
  this.ano = ano
}

function limparConteudo() {
  recebeTitulo.value = ''
  recebeAutor.value = ''
  recebeAno.value = ''
}

function salvaLivroNaBiblioteca() {
  minhaBiblioteca.push(
    new Livro(recebeTitulo.value, recebeAutor.value, recebeAno.value)
  )
}

Livro.prototype.infoLivro = function () {
  return `Titulo do Livro: ${this.titulo} |Autor:${this.autor}| Ano:${this.ano}`
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

const livro1 = new Livro('teste', 'testador', 1000, 10)
const livro2 = new Livro('teste2', 'testador2', 1900, 12)
const livro3 = new Livro('teste3', 'testador3', 2000, 20)

minhaBiblioteca.push(livro1, livro2, livro3)

function listaLivros(livro) {
  let livrBanner = document.createElement('p')
  livrBanner.textContent = livro.infoLivro()
  listadorDeLivros.appendChild(livrBanner)
}
