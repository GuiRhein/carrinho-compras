let total = 1400;
let produto;
let textoTotal = document.getElementById("valor-total");
let quantidade;
let $wrapper = document.getElementById("lista-produtos").querySelector("section");
    
function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function adicionar(){
    produto = document.getElementById("produto").value;
    quantidade = document.getElementById("quantidade").value;
    if(quantidade >=1 ){
        if(produto== "Fone de ouvido - R$100"){
            total = total + 100*quantidade;
        }else if(produto == "Celular - R$1400"){
            total = total + 1400*quantidade;
        }else{
            total = total + 5000*quantidade;
        }
        const split_string = produto.split(" ");

            // Pega a string do conteúdo atual
        HTMLTemporario = $wrapper.innerHTML,
            // Novo HTML que será inserido
        HTMLNovo =' <br><span class="texto-azul">' + quantidade + 'x </span>' + split_string[0] + '</span><span class="texto-azul"> ' + split_string[split_string.length-2]+ " " + split_string[split_string.length-1]  + ' </span></br>'
        //HTMLNovo ='<br><span class="texto-azul">' + quantidade + 'x </span>' + split_string[0] + '</span></br>';
        
            // Concatena as strings colocando o novoHTML antes do HTMLTemporario
        HTMLTemporario = HTMLNovo + HTMLTemporario;
        
            // Coloca a nova string(que é o HTML) no DOM
        $wrapper.innerHTML = HTMLTemporario;    
            
        textoTotal.innerHTML = "R$" + total;
        console.log(split_string);

    }

    limparCampo();

}
function limpar(){
    total = 0;
    textoTotal.innerHTML = "R$" + total;
    $wrapper.innerHTML = '';
}
