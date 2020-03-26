function Contar(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var passo = document.getElementById("passo");
    var res = document.getElementById("res");
    res.innerText = "";
    if(Number(n1.value) <= Number(n2.value)){
        for(var i = Number(n1.value); i <= Number(n2.value); ){
            res.innerHTML += i+"   ";
            i += Number(passo.value);
        }
    }
    else
    {
        for(var i = Number(n1.value); i >= Number(n2.value); ){
            res.innerHTML += i+"   ";
            i -= Number(passo.value);
        }
    }
} 