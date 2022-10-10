function codificacaoBase64(){
    let msg = document.getElementById("mensagemPrincipal").value;
    let cod = btoa(msg);
    let results = document.getElementById("mensagemCodificada").innerHTML = cod;

}

function decodificacaoBase64(){
    let msg = document.getElementById("msg2").value;
    let cod = atob(msg);
    let results = document.getElementById("result2").innerHTML = cod;

}

function codificacaoCifraCesar(){
    

}

function decodificacaoCifraCesar(){


}