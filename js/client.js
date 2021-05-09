ddsmoothmenu.init({
	mainmenuid: "TopMenu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

$(document).ready(function(){
	var DocumentHeight = $(window).height();
	var MarginTop = parseInt(DocumentHeight) / parseInt(2);
	MarginTop = parseInt(MarginTop) - parseInt(20);
	$('#HidePage').css({'height':DocumentHeight+'px', 'padding-top':MarginTop+'px'});
	
	
	var HomeProductsHeight = $('.products').height();
	$('.product-categories').css('min-height', HomeProductsHeight+'px');
});

function ValidateCareerForm()
{
	with(document.CareerForm)
	{
		if(Name.value=='')
		{
			alert("Please enter your name", "Name");
			return false;
		}
		else if(Email.value=='')
		{
			alert("Please enter your email", "Email");
			return false;
		}
		else if(isEmail(Email.value)==false)
		{
			alert("Please enter your email address in correct format", "Email");
			return false;
		}
		else if(Phone.value=='')
		{
			alert("Please enter your phone number", "Phone");
			return false;
		}
		else if(Resume.value=='')
		{
			alert("Please upload resume", "Resume");
			return false;
		}
		else if(Resume.value!='' && 
		CheckExtension(Resume.value)!='pdf' && 
		CheckExtension(Resume.value)!='doc' && 
		CheckExtension(Resume.value)!='docx')
		{
			alert("Only pdf, doc and docx files allowed", "Resume");
			return false;
		}
		CareerFormFlag.value='true';
	}
	return true;
}

function LoadMainCat(CategoryID)
{
	$('.parent-cat').removeClass('Selected');
	$('.sub-cat').removeClass('Selected');
	$('#parent-cat-'+CategoryID).addClass('Selected');
	LoadProducts('-1', CategoryID);
}

function LoadSubCat(ParentID, CategoryID)
{
	$('.parent-cat').removeClass('Selected');
	$('#parent-cat-'+ParentID).addClass('Selected');
	
	$('.sub-cat').removeClass('Selected');
	$('#sub-cat-'+CategoryID).addClass('Selected');
	
	LoadProducts(ParentID, CategoryID);
}

function ShowSpinner(ToDo)
{
	if(ToDo==1)
		$('#HidePage').css('display', '');
	else
		$('#HidePage').css('display', 'none');
}

function LoadProducts(ParentID, CategoryID)
{
	ShowSpinner(1);
	$.post("load_products.php?ParentID="+ParentID+"&CategoryID="+CategoryID+"&refreshAjax="+Math.random(), null, function(Data, textStatus){
		$('.products').html(Data);
		ShowSpinner(0);
	});
}