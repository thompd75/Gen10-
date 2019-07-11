function validateItems() {
   
    var name = document.forms["requestCheck"]["name"].value;
    var email = document.forms["requestCheck"]["email"].value;
   
    if (name == "" ) {
        alert("Please fill in your name.");
        document.forms["requestCheck"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["requestCheck"]["name"].focus();
        return false;
    }
   if (email == "" ) {
       alert("Please fill in your email.");
       document.forms["requestCheck"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["requestCheck"]["email"].focus();
       return false;
   }
   alert("The inputed information is valid.")
  return false;
}