let estante = document.querySelector('.estante1')
let listadorDeLivros = document.querySelector('.listaLivros')
let adicionaLivro = document.querySelector('#adicionaLivro')
let mostraLivros = document.querySelector('#mostraLivros')
let minhaBiblioteca = []

function Livro(titulo, autor, ano, paginas) {
  this.titulo = titulo
  this.autor = autor
  this.ano = ano
  this.paginas = paginas
}

function addLivroNaBiblioteca() {
  minhaBiblioteca.push(
    new Livro(
      prompt('Titulo do Livro'),
      prompt('Autor'),
      prompt('ano'),
      prompt('paginas')
    )
  )
}
Livro.prototype.infoLivro = function () {
  return `Titulo do Livro: ${this.titulo} |Autor:${this.autor}| Ano:${this.ano} |Numero de Paginas:${this.paginas}`
}

function mostraLivrosDaBiblioteca() {
  minhaBiblioteca.forEach((livro) => listaLivros(livro))
}

adicionaLivro.addEventListener('click', function () {
  addLivroNaBiblioteca()
})

mostraLivros.addEventListener('click', function () {
  mostraLivrosDaBiblioteca()
})

const livro1 = new Livro('teste', 'testador', 1000, 10)
const livro2 = new Livro('teste2', 'testador2', 1900, 12)
const livro3 = new Livro('teste3', 'testador3', 2000, 20)

minhaBiblioteca.push(livro1, livro2, livro3)

function listaLivros(livro) {
  let li = document.createElement('li')
  li.textContent = livro.infoLivro()
  listadorDeLivros.appendChild(li)
}
