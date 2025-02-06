'use strict'

const categorias = [
    {nome: 'Celulares', icon: 'celulares.png', cor: 'blue'},
    {nome: 'Eletrônicos', icon: 'eletronico.png', cor: 'darkblue'},
    {nome: 'Jogos', icon: 'jogos.png', cor:'purple'},
    {nome: 'Móveis', icon: 'moveis.png', cor:'brown'}
]

function criarMenu (categoria) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = ('./img/' + categoria.icon)
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${categoria.cor}`

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)