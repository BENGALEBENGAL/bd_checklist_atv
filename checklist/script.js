let respostaAPI = [
    { "id": 1, "descricao": "Varrer a sala"},
    { "id": 2, "descricao": "Revisar a aula de BD"},
    { "id": 3, "descricao": "Lavar comida"},
    { "id": 4, "descricao": "Lavar a roupa"},
    { "id": 5, "descricao": "Arrumar a cama"},
    { "id": 6, "descricao": "Lavar a louça"}
];

function init() {
    carregarLista();
}

function carregarLista() {
    let idx = -1;
    listContainer.innerHTML = '';
    while( respostaAPI,length > 0 && ++idx < respostaAPI.length){

        
    }
}

function salvarTarefa(){
    if(taskInputId.value == '' ){
        respostaAPI.push( "id" )
    }
}