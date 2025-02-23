
function doAjaxPost(Url,PostMsg,StatusElement,DisplayElement, CallBackFnc)
{
    var message=PostMsg;  //"rating="+rating;
    var url=Url; //"rating.aspx";
	var request=null;


   if(window.XMLHttpRequest)   
   {
   request=new XMLHttpRequest();
   }
   else if(window.ActiveXObject)
   {
   request = new ActiveXObject("Microsoft.XMLHTTP");
   }
   
   if(request)
   {
		request.open("POST",url);
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

		request.onreadystatechange = function () {
		    /*if(request.readyState==0)
		    document.getElementById(StatusElement).innerHTML='Uninitialized';
		    else  if(request.readyState==1)
		    document.getElementById(StatusElement).innerHTML='Loading...';
		    else  if(request.readyState==2)
		    document.getElementById(StatusElement).innerHTML='Loaded';
		    else  if(request.readyState==3)
		    document.getElementById(StatusElement).innerHTML='Interactive';
		    */
		    if (request.readyState == 4) {
		        /*	if(document.getElementById(StatusElement))
		        document.getElementById(StatusElement).innerHTML='Completed';*/
		        //alert(request.responseText);
		        AjaxResponse = request.responseText;

		        if (AjaxResponse.indexOf("[ForceNewSession]") > -1) {
		            //Throw user
		            ForceNewSessionFromJavascript();
		        }

		        if (document.getElementById(DisplayElement))
		            document.getElementById(DisplayElement).value = AjaxResponse;

		        if (CallBackFnc != null) {
		            CallBackFnc(AjaxResponse);
		        }
		    }
		}
		request.send(message);   				
	}

}
