function verificar(){
    var txtn = document.querySelector('input#txtnasc')
    var res = document.querySelector('div#res')
    var nasc = txtn.value.toUpperCase()
    res.innerHTML = `<p>se voce é do ${nasc}</p>`
    if(nasc == 'BRASIL'){
        res.innerHTML += 'você é brasileiro!'
    } else{
        res.innerHTML +='você é estrangeiro !'
   }


//    res.style.color = 'red'
}