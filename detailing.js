$(document).ready(function(){

			// set the item in localStorage
           localStorage.setItem('datas', fest_name); 
           localStorage.setItem('loc', fest_location); 
           localStorage.setItem('categ', fest_categ); 
           localStorage.setItem('dateg', fest_date); 
           localStorage.setItem('view', fest_views); 
		   
		   alert(localStorage.getItem('datas'));
			

});