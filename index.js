/* Variáveis globais */


let opçoes1 = document.querySelector("#opçoes");
let saida = document.getElementById("mensagemCodificada");
let numero = document.getElementById("numeros");
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";


/* Eventos */

opçoes1.addEventListener("change", function(){

    if(opçoes1.value == 'cifraDeCesar') {
        numero.style.display = 'block';
    
        
    }else if (opçoes1.value == 'base64') {
        numero.style.display = 'none';
    
    }else {
        alert('Escolha entre Cifra de Cesar ou Base64')
    }
    })

function codificar1(){
  
    
    if(opçoes1.value === "base64"){
        codificacaoBase64()
    }
    else if(opçoes1.value === "cifraDeCesar"){
        codificacaoCifraCesar()
    }
    else{
        alert("Selecione uma opção!")
    }
}

function decodificar1(){
    
    if(opçoes1.value === "base64"){
        decodificacaoBase64()
    }
    else if(opçoes1.value === "cifraDeCesar"){
        decodificacaoCifraCesar()
    }
    else{
        alert("Selecione uma opção!")
    }
}
    

/*Motor base 64 */

function codificacaoBase64(){
    let msg = document.getElementById("mensagemPrincipal").value;
    let cod = btoa(msg);
    document.getElementById("mensagemCodificada").innerHTML = cod;

}

function decodificacaoBase64(){
    let msg = document.getElementById("mensagemPrincipal").value;
    let cod = atob(msg);
    document.getElementById("mensagemCodificada").innerHTML = cod;

}

/* Motor Cifra de Cesar */

function codificacaoCifraCesar(){
    let mensagem = document.getElementById("mensagemPrincipal").value;
    let msgMinuscula= mensagem.toLowerCase();
    let n = (Number(numero.value) % 26);
    let msg = '';
  
    for(var i = 0; i < msgMinuscula.length; i++){
       for(var j =0; j < alfabeto.length; j++){
         if(msgMinuscula[i] == alfabeto[j]){
            msg += alfabeto [j + n]
           break;
       } else if (msgMinuscula[i] == ' ') {
        msg += ' ';
           break;
       }
    }  
saida.value =msg;
}
}

function decodificacaoCifraCesar(){
    let mensagem = document.getElementById("mensagemPrincipal").value;
    let msgMinuscula= mensagem.toLowerCase();
    let n = (Number(numero.value) % 26);
    let msg = '';
  
    for(var i = 0; i < msgMinuscula.length; i++){
       for(var j = alfabeto.length - 1; j >= 0; j--){
         if(msgMinuscula[i] == alfabeto[j]){
            msg += alfabeto [j - n]
           break;
       } else if (msgMinuscula[i] == ' ') {
           msg += ' ';
           break;
       }
      }
  }
  saida.value =msg;
}

/* Função ctrl v */

function copiarTexto(){
    let copy = document.getElementById("mensagemCodificada").innerHTML;

    navigator.clipboard.writeText(copy);

    alert("Mensagem copiada!");

}
