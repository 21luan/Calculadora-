function insert(num){
    var numero = document.getElementById("resul").innerHTML;
    document.getElementById("resul").innerHTML = numero + num;
}

function clean(){
    document.getElementById("resul").innerHTML = "";
}

function del(){
    var resul = document.getElementById("resul").innerHTML; 
    document.getElementById("resul").innerHTML = resul.substring(0, resul.length -1);
}

function calcular(){
    var resul = document.getElementById('resul').innerHTML;
    if (resul){
        document.getElementById('resul').innerHTML = eval(resul);
    }
}