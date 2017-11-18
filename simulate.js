$(document).ready(function(){
	$('div.r1').each(function(){
		var table_raw = $(this);
		table_raw.find('.link_to').click(function(event){
			event.preventDefault();
			
			var fest_name = table_raw.find('.datas').text();
			var fest_location = table_raw.find('.loc').text();
			var fest_categ = table_raw.find('.categ').text();
			var fest_date = table_raw.find('.dateg').text();
			var fest_views = table_raw.find('.view').text();
			
			// set the item in localStorage
           localStorage.setItem('datas', fest_name); 
           localStorage.setItem('loc', fest_location); 
           localStorage.setItem('categ', fest_categ); 
           localStorage.setItem('dateg', fest_date); 
           localStorage.setItem('view', fest_views); 
			
			   var item_1 = localStorage.getItem('datas');
			   var item_2 = localStorage.getItem('loc');
			   var item_3 = localStorage.getItem('categ');
			   var item_4 = localStorage.getItem('dateg');
			   var item_5 = localStorage.getItem('view');
			
			
			createString(item_1,item_2,item_3,item_4,item_5);
			
			
		});
	});
	
	function createString(item_1,item_2,item_3,item_4,item_5){
		
		var detail_string = '';
		
		detail_string += '<div class="containing">';
		   detail_string += '<div class="jina">';
		      detail_string += '<span class="titol_fetive">'+item_1+'</span>';
		   detail_string += '</div>';
		   
		   detail_string += '<div class="area">';
		      detail_string += '<span class="location_event">'+item_2+'</span>';
		   detail_string += '</div>';
		   
		   detail_string += '<div class="tengo">';
		      detail_string += '<span class="category_event">'+item_3+'</span>';
		   detail_string += '</div>';
		   
		   detail_string += '<div class="tareh">';
		      detail_string += '<span class="date_event">'+item_4+'</span>';
		   detail_string += '</div>';
		   
		   detail_string += '<div class="vizz">';
		      detail_string += '<span class="views_event">'+item_5+'</span>';
		   detail_string += '</div>';
		   
		   detail_string += '<div class="updt">';
		      detail_string += '<input type="button" value="update event" class="update_event"/>';
		   detail_string += '</div>';
		   
		   detail_string += '<div class="dlte">';
		      detail_string += '<input type="button" value="delete event" class="delete_event"/>';
		   detail_string += '</div>';
		   
		    detail_string += '<div class="back">';
		      detail_string += '<input type="button" value="go back" class="back_event"/>';
		   detail_string += '</div>';		   

		   detail_string += '<div class="view_invited_members">';
		      detail_string += '<input type="button" title="view invited members" value="invited members" class="view_them"/>';
		   detail_string += '</div>'; 
		   
		   detail_string += '<div class="invite">';
		      detail_string += '<input type="button" value="click to invite people to this event" class="invite_event"/>';
		   detail_string += '</div>';		   
		   
		   detail_string += '<ul class="members">';
				  
		         detail_string += '<li class="toast"><input type="checkbox" name="vehicle" value=""><span class="tesst">Bike Samson</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="vehicle1" value=""/><span class="tesst">Albert Kisero</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh2" value=""/><span class="tesst">Simon Ngugi</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh3" value=""/><span class="tesst">Jophat Kahindi</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh4" value=""/><span class="tesst">Ottoman Bisko</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh5" value=""/><span class="tesst">Gallana Mbabe</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh6" value=""/><span class="tesst">Albert Kisero</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh7" value=""/><span class="tesst">Omar mwamkundu</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh8" value=""/><span class="tesst">Omar mwamkundu</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh9" value=""/><span class="tesst">Shedrack Musa Katama</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh10" value=""/><span class="tesst">Tom omari</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh11" value=""/><span class="tesst">Said jillo</span></li>';
		         detail_string += '<li class="toast"><input type="checkbox" name="veh12" value=""/><span class="tesst">Kaiseri yao lana</span></li>';
		        		  
		   detail_string += '</ul>';		   
		   
		   detail_string += '<div class="him">';
		      detail_string += '<input type="button" value="invite" class="invite_you"/>';
		   detail_string += '</div>';
		
		detail_string += '</div>';
		
		$("div#holding").html(detail_string);
		
		$('.back_event').click(function(event){
			event.preventDefault();	
		window.location='index.html';
		});
	}
	if ( $('.eventor').css('display') == 'none' ){
        $('.holder').click(function(){
		    $('.eventor').show(); 
	   });
   }else{
	    $(".holder").attr("disabled", true);
   }
   
   $('#sabm').click(function(){
	   
	  var eventName = $('#vallui').val();
	  var eventLoc = $('#loko').val();
	  var eventCate = $('.yalio').find(":selected").text();
	  var eventDeto = $('#deto').val();
	  
	var post_string = "";
	     post_string += "<div class='r1'>";
		 
            post_string += "<div class='datas'>"+eventName+"</div>";
            post_string += "<div class='loc'>"+eventLoc+"</div>";
            post_string += "<div class='categ'>"+eventCate+"</div>";
            post_string += "<div class='dateg'>"+eventDeto+"</div>";
            post_string += "<div class='view'>200 views</div>";
            post_string += "<div class='view'><input type='button' value='view event' class='link_to'></div>";
			
        post_string += "</div>";
	  
	  $('#holding').prepend(post_string);
   });
	
		if ( $('.members').css('display') == 'none' ){
        $('.invite_event').click(function(){
		    $('.members').show(); 
		    $('.him').show(); 
	   });
   }else{
	    $(".invite_event").attr("disabled", true);
   }
	
});