let id = 0
class Livro {
  constructor(titulo, autor, ano, lido) {
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.lido = lido
    this.id = id++
  }

  alteraStatus() {
    this.lido = !this.lido
  }

  verificaLido() {
    return this.lido ? 'Lido' : 'Nao lido'
  }
}
