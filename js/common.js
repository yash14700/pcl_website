function isEmail(theStr) 
{
	var atIndex = theStr.indexOf('@');
 	var dotIndex = theStr.indexOf('.', atIndex);
 	var flag = true;
 	theSub = theStr.substring(0, dotIndex+1)
 	if ((atIndex < 1)||(atIndex != theStr.lastIndexOf('@'))||(dotIndex < atIndex + 2)||(theStr.length <= theSub.length)) 
 	{	 
 		flag = false; 
 	}
 	else 
	{ 
 		flag = true; 
 	}
 	return(flag);
}

function numbersonly(e, decimal)
{
	var key;
	var keychar;
	
	if(window.event)
	{
		key = window.event.keyCode;
	}
	else if(e)
	{
		key = e.which;
	}
	else
	{
		return true;
	}
	
	keychar = String.fromCharCode(key);
	
	if((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) )
	{
		return true;
	}
	else if ((("0123456789").indexOf(keychar) > -1))
	{
		return true;
	}
	else if (decimal)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function CheckExtension(filename)
{
	var parts = filename.split('.');
	var extension = parts[parts.length-1];
	return extension.toLowerCase();
}

function HideScreen()
{
	var WindowHeight = $(window).height()-100;
	$('#HideScreen').css("height", $(document).height()+"px");
	$('#HideScreen').css("display", "");
	$('#HideScreen').css("filter", "alpha(opacity = 60)");
	
	var paddingTop = parseInt(WindowHeight) /  parseInt(2);
	paddingTop = parseInt(paddingTop) + parseInt(document.documentElement.scrollTop);
	$('#HideScreen').css("padding-top", paddingTop+"px");
}

function ClosePopUpWindow(Div)
{
	$('#'+Div).fadeOut(function(){
		$('#'+Div+'box').remove();
	});
}

function ShowPopUpInCenter(Div)
{
	var DocumentHeight = $(window).height();
	var DocumentWidth = $(window).width();
	var PopUpHeight = $('#'+Div).height();
	var PopUpWidth = $('#'+Div).width();
	var MarginTop = ( ( parseInt(DocumentHeight) - parseInt(PopUpHeight) ) / parseInt(2) ) - parseInt(11);
	var MarginLeft = ( ( parseInt(DocumentWidth) - parseInt(PopUpWidth) ) / parseInt(2) );
	$('#'+Div).css({'margin-top': MarginTop+'px', 'top':'0px', 'left':'0px', 'margin-left':MarginLeft+'px'});
}

function alert(txtMsg, FocusElement)
{
		$.prompt('<div align="left">'+txtMsg+'</div>', {buttons: {Ok:true}});
		
		$('.jqiclose').remove();
		
	$('#jqi').css({'width': '350px', 'left': '50%', 'margin-left': '-183px'});
	
	if(FocusElement!='')
	{
		$('#impromptu_state0_buttonOk').click(function(){
			$('#jqi').fadeOut(function(){
				$('#jqibox').remove();
			});
			$('#'+FocusElement).focus();
		});
		
		$('#jqi_state0_buttonClose').click(function(){
			$('#jqi').fadeOut(function(){
				$('#jqibox').remove();
			});
			$('#'+FocusElement).focus();
		});
		
		$('#jqi_state0_buttonOk').click(function(){
			$('#jqi').fadeOut(function(){
				$('#jqibox').remove();
			});
			$('#'+FocusElement).focus();
		});
	}
}