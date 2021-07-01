let id = 0

function Livro(titulo, autor, ano, lido) {
  this.titulo = titulo
  this.autor = autor
  this.ano = ano
  this.lido = lido
  this.id = id++
}

Livro.prototype.alteraStatus = function () {
  this.lido = !this.lido
}

Livro.prototype.verificaLido = function () {
  return this.lido ? 'Lido' : 'Nao lido'
}
