function clearerror(){
    errors=document.getElementsByClassName('formerror');
    for (let item of errors) {
      item.innerHTML="";
    }
  }
    function seterror(id,error){
        // sets error inside tag of id
        element=document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML=error;
    }
    function validateform(){
        var returnval=true;
        clearerror();
        //perform validation and if validation fails,so set the value of returnval false
        var name=document.forms['myform']['fname'].value
        if (name.length<5) {
            seterror("name","*length of name is too short")
            returnval=false;
        }

        var email=document.forms['myform']['femail'].value
        if (email.length>15) {
            seterror("email","*Email length is too long")
            returnval=false;
        }
        var phone=document.forms['myform']['fphone'].value
        if (phone.length!=12) {
            seterror("phone","*Phone Number should be of 12 digits")
            returnval=false;
        }
        var pass=document.forms['myform']['fpass'].value
        if (pass.length<6) {
            seterror("pass","*Password should be atleast 6 characters long")
            returnval=false;
        }
        
        return returnval;
    }