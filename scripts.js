function getname(){
    var gender=document.getElementById("gender").checked;
    var day=document.getElementById("birthday").value;
    var date= new Date(day).getDay(); 
    if(day!==null){
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"][date];
        if(gender==true){
            var names = ["Kwasi","Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
                    var getname = names[date];
        }
        else{
            var names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
                    var getname = names[date];
        }
        alert("Hi, Your Akan Name is " + getname + ". the day you were born is " + days);

    }
}