// function adicionarTexto() {
//     var campoTexto = document.getElementById("campo_texto");
//     var listaTextos = document.getElementById("lista_textos");

//     var texto = campoTexto.value;

//     var item = document.createElement("li");
//     item.innerText = texto;

//     listaTextos.appendChild(item);
// }

function adicionarTexto() {
    var campoItem = document.getElementById("campo_item");
    var campoQuantidade = document.getElementById("campo_quantidade");
    var campoUnidade = document.getElementById("campo_unidade");
    var listaTextos = document.getElementById("lista_textos");

    var texto = campoItem.value;
    texto += " " + campoQuantidade.value;
    texto += " " + campoUnidade.value;

    var item = document.createElement("li");
    item.innerText = texto;

    listaTextos.appendChild(item);
}