let lista = ['azul', 'branco', 'roxo', 'rosa', 'amarelo']

let posicao = 0;

const listaEmtela = document.createElement("ol")

while(posicao < lista.length){
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmtela.appendChild(itemLista)
    posicao +=1;
}

document.body.appendChild(listaEmtela);