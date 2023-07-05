function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('user-email');
	
	// Expresio para validad Gmail
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// cheking 
	if( validEmail.test(emailField.value) ){
		alert('Email valido');
		return true;
	}else{
		alert('Email no valido');
		return false;
	}
} 