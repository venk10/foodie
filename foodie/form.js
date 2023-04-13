function check(){
    let fullname=document.form.fullname.value;
    let mail=document.form.email.value;
    let num=document.form.num.value;
    let type=document.form.type.value;

    
    if(num.length <10 || num.length > 10){
        document.querySelector("#num").innerHTML="Enter valid number";
        return false;
    }
    else{
        alert("feedback submit sucessfully");
    }
}

function login(){
    let placeholder1=document.form2.log.value;
    let placeholder2=document.form2.pass.value;
    
    if (placeholder1.length>0) {
        document.querySelector("#div1").innerHTML="";
    }
    if (placeholder2.length>0) {
        document.querySelector("#div2").innerHTML="";
    }

    if (placeholder1=="" && placeholder2=="") {
        document.querySelector("#div1").innerHTML="dont leave blank";
        document.querySelector("#div2").innerHTML="dont leave blank";
        return false;
    }
    if(placeholder1==""){
        document.querySelector("#div1").innerHTML="dont leave blank";
        return false;
        
    }
    if(placeholder2==""){
        document.querySelector("#div2").innerHTML="dont leave blank";
        return false;
    }
}
 function page(){
    let password1=document.form1.password1.value;
    let password2=document.form1.password2.value;
    let num=document.form1.num.value;
    if(password1 != password2 ){
        alert("check the password");
        return false;
    }
    else if(num.length <10 || num.length > 10){
        alert("enter valid number");
        return false;
    }

}