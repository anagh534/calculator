function display(num){
    document.getElementById('screen').value+=num;
}
function ac(){
    document.getElementById('screen').value="";
}
function solve(){
    let num1=document.getElementById('screen').value;
    if(num1===""){
        document.getElementById('screen').value="";
    }else{
        let num2=eval(num1);
        document.getElementById('screen').value=num2;
    }
}
function del() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}