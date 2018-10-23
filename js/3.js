function validate(){

var todo_correcto = true;

if(document.getElementById('name_f3').value.length < 2 ){
    todo_correcto = false;
}
if(document.getElementById('lastname_f3').value.length < 2 ){
    todo_correcto = false;
}

var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var email = document.form_three.email_f3.value;
if (!expresion.test(email)){
	todo_correcto = false;
}

if ((document.getElementById("sex_m").checked == false) && (document.getElementById("sex_f").checked == false)){
  todo_correcto = false;
}

if(!todo_correcto){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
}
return todo_correcto;
}
