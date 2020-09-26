function getname(){
    var gender=document.getElementById("gender").checked;
    var day=document.getElementById("birthday").value;
    var date= new Date(day).getDay(); 
}