$(document).ready(function(){	

   

	$("form#form2").submit(function(event){	
	    var FirstName = $("input#first_name").val();
		var LastName  = $("input#last_name").val();
		var e_mail = $("input#forepass_email").val();
		var Pass1 = $("input#field_pass1").val();
		var confirm_Pass = $("input#field_pass").val();	
		 $.ajax({
			    type: 'post',
				url: 'http://localhost/Forepost/php/registration2.php',
				data:{FirstName:FirstName,LastName:LastName,e_mail:e_mail,Pass1:Pass1,confirm_Pass:confirm_Pass},
				dataType:'text',
				success:function(data){
                   if(data == "direction"){					    
				       $("form#form2")[0].reset();				         
					   window.location ="http://localhost/Forepost/index.php";
				   }else{
					    $("form#form2")[0].reset();
					   $("div#errorbx").html(data).fadeIn(1000);
                   			//shakeForm(); 
				   }					
                  	   
					},
			    error:function(){
					alert("oops something went wrong");
			}
		       });	
	 	event.preventDefault();
    
	});
	
	         function shakeForm(){
                  var interval = 30;
                  var duration= 1000;
                  var shake= 3;
                  var vibrateIndex = 0;
                  var selector = $('#form2');
       
                  vibrateIndex = setInterval(vibrate, interval);
                  setTimeout(stopVibration, duration);
    
 
                  function vibrate(){
                     $(selector).stop(true,false)
                         .css({position: 'relative', 
                        left: Math.round(Math.random() * shake) - ((shake + 1) / 2) +'px', 
                       top: Math.round(Math.random() * shake) - ((shake + 1) / 2) +'px'});
                       }
     
				function stopVibration() {
				clearInterval(vibrateIndex);
				$(selector).stop(true,false)
					.css({position: 'static', left: '0px', top: '0px'});
					 $("div#errorbx").html("");
				}
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
	
	   
	  
	             function tryForm(){
                  var interval = 30;
                  var duration= 1000;
                  var shake= 3;
                  var vibrateIndex = 0;
                  var selector = $("form#form1");
       
                  vibrateIndex = setInterval(vibrate2, interval);
                  setTimeout(stopVibration2, duration);
    
 
                  function vibrate2(){
                     $(selector).stop(true,false)
                         .css({position: 'relative', 
                        left: Math.round(Math.random() * shake) - ((shake + 1) / 2) +'px', 
                       top: Math.round(Math.random() * shake) - ((shake + 1) / 2) +'px'});
                       }
     
				function stopVibration2() {
				clearInterval(vibrateIndex);
				$(selector).stop(true,false)
					.css({position: 'static', left: '0px', top: '0px'});
					$('#mybo').html("");
				}
      }
				
});