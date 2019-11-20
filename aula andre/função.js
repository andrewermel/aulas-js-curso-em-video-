let limite=0
let soma=0

function foiclicado(){
    let input=Number(document.getElementById('input'))
    document.getElementById('sessao').innerHTML+=`<p>${input}</p>`

    if(limite==0){
        limite==input
    }
    else{
        soma=soma+input
    
    }
    if(soma>limite){
        alert('limite excedido')
    }

}