let n1 = document.querySelector("input#n1");
let seltab = document.querySelector("select#seltab")
let res = document.querySelector("div#res");
    
var item = [];
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true;
    else
        return false;
}
function isLista(n, l)
{
    if(l.indexOf(Number(n)) != -1) return true;
    else return false;
}

function adicionar(){
    if(isNumero(n1.value) && !isLista(n1.value, item)){
        item.push(Number(n1.value));
        var add = document.createElement("option");
        var a = item.indexOf(Number(n1.value));
        add.text = "Valor "+item[a]+" Adicionado";
        seltab.appendChild(add);
    }
    else{
        alert("Número invalido ou já inserido.");
    }
    }
function finalizar(){
    if(item.length == 0){
        alert("Adicione valores para finalizar");
    }
    else{
        res.innerHTML = "";
        res.innerHTML += item.length+" Valores adicionados ao total";
        var maior = Math.max.apply(null, item);
        var menor = Math.min.apply(null, item);
        var soma = 0;
        for(pos in item){
            soma += item[pos];
        }
        var media = soma / item.length;
        res.innerHTML += "<br> O maior valor: "+maior+
        "<br> O menor valor:"+ menor + "<br> A soma: " + soma + "<br> A média: " + media.toFixed(2);
    }
}