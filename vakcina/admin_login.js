$(document).ready(function() {
	
	////////////////ADMIN LOGIN
	$('#adminLogin').click(function(){
		var input_user = $('#userLogin').val();
		var input_pass = $('#passwordLogin').val();
				
		$('#adminLogin').attr('disabled','disabled');
						
		$.ajax({
			type: 'POST',
			url: 'inc/check_user.php',
			data: 'input_user=' + input_user + '&input_pass=' + input_pass,
			success: function(data)
				{
				if(data=='success1'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'pretraga.php' },2000);
					}
				if(data=='success2'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'pretraga.php' },2000);
					}
				if(data=='success3'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'pretraga.php' },2000);
					}
				if(data=='success4'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'pretraga.php' },2000);
					}
				if(data=='success5'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'pretraga.php' },2000);
					}
				if(data=='success6'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'pretraga.php' },2000);
					}
				if(data=='successMz'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'izvestajimz.php' },2000);
					}
				if(data=='successVo'){
					$('.alert-success').fadeIn(1000);
					setTimeout(function(){ window.location = 'izvestajivo.php' },2000);
					}
				if(data=='error'){
					$('.alert-danger').fadeIn(1000);
					setTimeout(function(){ $('.alert-danger').fadeOut(1000)},3000);
					$('#adminLogin').removeAttr('disabled');
					}
				}
		});
		
	})
	//////////////end
		
	

});