function Tabuar(){
    var n1 = document.getElementById("nt");
    var selt = document.getElementById("seltab")
    n = Number(n1.value);
    selt.innerHTML = '';
    for(var i = 0; i <= 10; i++){
        var item = document.createElement('option');
        item.text = `${n} X ${i} = ${n*i}`;
        item.value = "tab"+i;
        selt.appendChild(item);
    }

}