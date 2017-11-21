$(document).ready(function(){	

   

	$("form#form2").submit(function(event){	
	    var FirstName = $("input#first_name").val();
		var LastName  = $("input#last_name").val();
		var e_mail = $("input#forepass_email").val();
		var Pass1 = $("input#field_pass1").val();
		var confirm_Pass = $("input#field_pass").val();	

		var credentials  = [
			{ "FirstName":FirstName , "LastName":LastName },
			{ "e_mail":e_mail , "Pass1 ":Pass1 },
			{ "confirm_Pass":confirm_Pass }
		];

		
			// ajax the JSON to the server
			$.post("/api/auth/register", credentials, function(){
		
			window.location = 'bright.html';
	}


	

	
			$("form#form1").submit(function(event){
				   var malis = $("input#forepass_em").val();
		           var wadis  = $("input#field_passY").val();
				 formReadyto(malis,wadis);
				 event.preventDefault();
			});
			

		 function formReadyto(malis,wadis){	

             var the_loader = $("<img class='user_loader' src='http://localhost/Forepost/icons/spin.gif'/>");
			$('#mybo').html(the_loader);
			
		  	 $.ajax({
			    type: 'post',
				url: 'http://localhost/Forepost/php/logging.php',
				data:{malis:malis,wadis:wadis},
				dataType:'text',
				success:function(returndata){
					if(returndata == "direction"){
						 $("form#form1")[0].reset();
						window.location ="http://localhost/Forepost/index.php";
					}else{
						  the_loader.hide();
						   $("form#form1")[0].reset();
			              $('#mybo').html(returndata);
				  tryForm();
					}
 				
				  
					},
			    error:function(){
					alert("oops something went wrong");
			}
			   });
			   
		 }
	
	   
	  

				
});
