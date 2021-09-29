
document.getElementById("sum").addEventListener("click", ()=>{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    document.getElementById("ansSum").innerHTML = parseInt(num1) + parseInt(num2);

})

document.getElementById("multiply").addEventListener("click", ()=>{
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    document.getElementById("ansMultiply").innerHTML = parseInt(num3) * parseInt(num4);

})

document.getElementById("mod").addEventListener("click", ()=>{
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;

    document.getElementById("ansMod").innerHTML = parseInt(num5) % parseInt(num6);

})
