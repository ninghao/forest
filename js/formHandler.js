$(function()
{
	var successMsg = "Your message has been sent."; // Message shown on success.
	var failMsg = "Sorry it seems that our mail server is not responding, Sorry for the inconvenience!"; // Message shown on fail.
	
	$("input,textarea").jqBootstrapValidation(
    {
     	preventSubmit: true,
     	submitSuccess: function($form, event)
	 	{
			event.preventDefault(); // prevent default submit behaviour
			
			var processorFile = "./bin/"+$form.attr('id')+".php";
			var formData = {};

			$form.find("input, textarea").each(function(e) // Loop over form objects build data object
			{		
				formData[$(this).attr('id')] = $(this).val();	
			});
	
			$.ajax({
		        url: processorFile,
		    	type: "POST",
		    	data: formData,
		    	cache: false,
		    	success: function() // Success
		 		{  
					$form.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+successMsg+"</strong></div></div>");		
		 	   	},
			   	error: function() // Fail
			   	{
					$form.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+failMsg+"</strong></div></div>");	
			   	},
				complete: function() // Clear
				{
					$form.trigger("reset");
				},
		   	});
         },
         filter: function() // Handle hidden form elements
		 {
			 return $(this).is(":visible");
         },
	 });
});