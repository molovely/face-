function formValidate(){
    var name = document.getElementById("username").value ;
    var pass = document.getElementById("password").value ;
    
    var error = document.getElementById("error");
    var text ="";

    if(name.length <3){
        text = "ادخل اسم مستخم صحيح ";
      error.innerHTML=text;
      return false;
      }
      
        else if(email.indexOf("@")== -1){
          text = "ادخل رقم سري صحيح وارقام فقط ";
          error.innerHTML=text;
          return false;
      
        }


        else {
            alert("done");
            return true;
          }







}