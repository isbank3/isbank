//-----------------------------------------------------------     
function FiyatKontrol(hane)
 {  
      var i,strzero;
      if ((document.forms[0].fiyatt)&&(document.forms[0].fiyatk))
	  {
		fiyatt = document.forms[0].fiyatt.value;
		fiyatk = document.forms[0].fiyatk.value;
		fiyattobj = document.forms[0].fiyatt;
		fiyatkobj = document.forms[0].fiyatk;		
      }
      else
      {
        alert ("Fiyat alanýnýn adý fiyatt kurus alanýnýn adý fiyatk olmalý");
        return false;
      } 
     
    var booltutar,boolkurus;        
    
    if (!isObjNumeric(fiyatkobj))
	{
		return false;
	}
	
	boolkurus = true; //hatasýz kabul edelim
	if ((fiyatk == "") || (fiyatk <= 0) )
    { 
    	boolkurus= false;
    }
    
    strzero="";
    for (len=fiyatk.length; len< hane;len++ )
	{
	 strzero = "0"+strzero
	}
	eval(document.forms[0].fiyatk.value = document.forms[0].fiyatk.value + strzero);

	
	
    booltutar = true; //hatasýz kabul edelim
    booltutar = isTutarDolu(fiyattobj);
	if ((boolkurus==false)&&(booltutar==false))
	{
	alert("Fiyat Alanýna Sýfýrdan Büyük Bir Deðer Giriniz");
	fiyatt.focus();
	return false;  //hata varsa çýk   
	}


    
     return true;
 } 
 
 //-----------------------------------------------------------     
function AdetKontrol(hane)
 {  
      var i,strzero;
      if ((document.forms[0].adett)&&(document.forms[0].adetk))
	  {
		adett = document.forms[0].adett.value;
		adetk = document.forms[0].adetk.value;
		adettobj = document.forms[0].adett;
		adetkobj = document.forms[0].adetk;		
      }
      else
      {
        alert ("Adet alanýnýn adý adett kusurat alanýnýn adý adetk olmalý");
        return false;
      } 
     
    var booltutar,boolkurus;        
    
    if (!isObjNumeric(adetkobj))
	{
		return false;
	}
	
	boolkurus = true; //hatasýz kabul edelim
	if ((adetk == "") || (adetk <= 0) )
    { 
    	boolkurus= false;
    }
    
    strzero="";
    for (len=adetk.length; len< hane;len++ )
	{
	 strzero = "0"+strzero
	}
	eval(document.forms[0].adetk.value = document.forms[0].adetk.value + strzero);

	
	
    booltutar = true; //hatasýz kabul edelim
    booltutar = isTutarDolu(adettobj);
	if ((boolkurus==false)&&(booltutar==false))
	{
	alert("Adet Alanýna Sýfýrdan Büyük Bir Deðer Giriniz");
	adett.focus();
	return false;  //hata varsa çýk   
	}


    
     return true;
 } 
 
 //-----------------------------------------------------------     
 
function DecodeInfo() {}; 
function Kapat() {}; 
function NewWindow(mypage, myname, w, h, scroll, pos)
	{
		var win=null;
		if (pos == "random")
				{
					LeftPosition = (screen.width)?Math.floor(Math.random()*(screen.width-w)):100;
					TopPosition = (screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;
				}
				if (pos == "center")
				{
					LeftPosition = (screen.width)?(screen.width-w)/2:100;
					TopPosition = (screen.height)?(screen.height-h)/2:100;
				}
				else if ((pos != "center" && pos != "random") || pos == null)
				{
					LeftPosition=0;
					TopPosition=20;
				}
				settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
				win=window.open(mypage, myname, settings);
			}

function NewWindowR(mypage, myname, w, h, scroll, pos,resizable)
{
		var win=null;
		if (pos == "random")
				{
					LeftPosition = (screen.width)?Math.floor(Math.random()*(screen.width-w)):100;
					TopPosition = (screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;
				}
				if (pos == "center")
				{
					LeftPosition = (screen.width)?(screen.width-w)/2:100;
					TopPosition = (screen.height)?(screen.height-h)/2:100;
				}
				else if ((pos != "center" && pos != "random") || pos == null)
				{
					LeftPosition=0;
					TopPosition=20;
				}
		if(resizable == "yes")
		{
			Resizable = "yes";
		}
		else
		{
			Resizable = "no";
		}
				settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=' + Resizable;
				win=window.open(mypage, myname, settings);
}
			
//selfWindow is the level of (container || controlloader || mainloader)
function SendChannelSpesificMessage(selfWindow)
{
	if (selfWindow.parent.TxChannel == undefined)
	{
		selfWindow.parent.TxChannel = "Heey!! henüz çaðrý bu ekibe gelmemiþ"; // default'a düþmesi için :) (ab56041)
	}
	switch(selfWindow.parent.TxChannel)
	{
		case selfWindow.parent.TxChannelCagri:
			var TitleText;
			TitleText = selfWindow.document.test.CagriMessage.value;
			if (document.test.IsFirstLoad.value == "1")
			{
				TitleText = TitleText.replace(/RandNo/g, "Rand_OLD_No");
				TitleText = TitleText.replace(/KKBF/g, "KK_OLD_BF");
				TitleText = TitleText.replace(/IsCepBasvuru/g, "IsCep_OLD_Ba");
			}
			else
			{
      			selfWindow.parent.setTimeoutPreventTimeout();
			}
			if (typeof(selfWindow.parent.setCagriTitle) != "undefined")
				selfWindow.parent.setCagriTitle(TitleText);
			else
				selfWindow.parent.document.title = TitleText;
			break;
		case selfWindow.parent.TxChannelInternet:
		default:
		break;
	}
}
function SetValue() 
{
	if (typeof (ControlCallCenterAdditionalQuestionCheckBox) != "undefined")
	{
		if( !ControlCallCenterAdditionalQuestionCheckBox())
		{
			return false;
		}
	}
	if (document.test.isSubmitted.value == "0"){


var DashboardLevel = (function (selfWindow) {
	if (selfWindow.parent.document.forms[0].isSubmitted)
	    return selfWindow.parent;
	if (selfWindow.parent.parent.document.forms[0].isSubmitted)
	    return selfWindow.parent.parent;
	if (selfWindow.parent.parent.parent.document.forms[0].isSubmitted)
	    return selfWindow.parent.parent.parent;
})(window.parent);


//IVR Aktar Logic
if (DashboardLevel.preventSubmission) {
	DashboardLevel.preventSubmission = false;
	if (DashboardLevel.IVRAktarProsedure)
	    DashboardLevel.IVRAktarProsedure();
	return false;
}




		var targetForm = document.forms[0];
		if (targetForm.name == "client")
		{
			targetForm = document.forms[1];
		}
	   	targetForm.p1.value = parent.document.forms[0].rno.value;

		if (parent.document.forms[0].lastTRKD != null)
			targetForm.lastTRKD.value = parent.document.forms[0].lastTRKD.value;
		if (targetForm.trkd != null)
			parent.document.forms[0].lastTRKD.value = targetForm.trkd.value;
	
		if (parent.document.forms[0].lastTransactionPeriod != null)
			targetForm.lastTransactionPeriod.value = parent.document.forms[0].lastTransactionPeriod.value;
	
		parent.document.forms[0].lastSubmitTime.value = GetTimeinMSeconds();

		document.test.isSubmitted.value = "1";
		return true;
	}
	else{
		return false;
	}
}
function CoexRenew(selfWindow, randNo)
{
	if (typeof(selfWindow.parent.renewYTISession) != "undefined")
	{
		selfWindow.parent.renewYTISession(randNo);
	}	
}
function GetValue()
{
	
	document.test.isSubmitted.value = "0";
	 if(parent.document.forms[0].isSubmitted)
			parent.document.forms[0].isSubmitted.value = 0;
		if (parent.parent.document.forms[0].isSubmitted)
			parent.parent.document.forms[0].isSubmitted.value = 0;
		if (parent.parent.parent.document.forms[0].isSubmitted)
			parent.parent.parent.document.forms[0].isSubmitted.value = 0;
	SendChannelSpesificMessage(window);
	if (document.test.IsFirstLoad.value !="1")
	{
		var RandNo;
		if (parent.parent.parent.document.forms[0].rno)
		{
		parent.parent.parent.document.forms[0].rno.value = document.test.rno.value;
		RandNo = document.test.rno.value;
		parent.parent.parent.document.forms[0].lastTransactionPeriod.value = GetTimeinMSeconds() - parent.parent.parent.document.forms[0].lastSubmitTime.value;			
		document.test.IsFirstLoad.value = "1";
		}
		else if (parent.parent.document.forms[0].rno)
		{
		parent.parent.document.forms[0].rno.value = document.test.rno.value;
		RandNo = document.test.rno.value;
		parent.parent.document.forms[0].lastTransactionPeriod.value = GetTimeinMSeconds() - parent.parent.document.forms[0].lastSubmitTime.value;			
		document.test.IsFirstLoad.value = "1";
		}
		else if(parent.document.forms[0].rno)
		{
		parent.document.forms[0].rno.value = document.test.rno.value;
		RandNo = document.test.rno.value;
		parent.document.forms[0].lastTransactionPeriod.value = GetTimeinMSeconds() - parent.document.forms[0].lastSubmitTime.value;			
		document.test.IsFirstLoad.value = "1";
		}
		CoexRenew(window, RandNo);
	}else
		CoexRenew(window, -1); // this is for resizing. 56041

	//Her iþlem açýldýðýnda scroll top yapýlarak sayfanýn en üstü gösteriliyor.
	if (parent.parent.document)
	    $(parent.parent.document).scrollTop(0);	
}

function EditedTutar(a)
  { 
    var fey = new String(a.name); 
    var str,str1,kurus,b,x,y,z,i,j,sonuc = false;
    var dolu = true;
    if (document.forms[0].trkd.value == "G300A")
    { 
      
      str1 = new String(a); 
      b = str1.substring(0,12);
      kurus = str1.substring(12,14);
    }
    else
      b = a.value;
    for(z=0; z < b.length; z++)
    {  if (b.charAt(z) >= '1' && b.charAt(z) <= '9')
        { 
          str1 = b.charAt(z);
          j = z + 1;
          sonuc = true;
          z = b.length;
        }
    }
    if (sonuc)
    {
      for(z=j; z < b.length; z++)
      {      
        if (b.charAt(z) >= '0' && b.charAt(z) <= '9')
          str1 = new String(str1+b.charAt(z));
      }  
      x = str1;
      y = x.length;
      z = y % 3;
      y = (y - z) / 3 + 1;
      if (z != 0)
        str = x.substring(0,z);
      for(i = 1; i < y ; i++)
        if (str != null)
          str = new String(str+","+x.substring((z+(i-1)*3),(z+i*3)));
        else
          str = x.substring(0,3);
      if (document.forms[0].trkd.value == "G300A")
      {   a = new String(str+"."+kurus)
          document.writeln("<td style='text-align:right'>"+a+"</td>");
      } 
      else
         a.value = new String(str);
    }  
    else
    { 
     b = document.forms[0].trkd.value;
     switch (b)
     { case "VRTH2":
       case "VRTL2":
       case "G4001":
       case "G5001":
       case "GK001":
       case "G4003":
       case "G5003":
       case "GK003":
       case "SO001":	
         { 
           sonuc = true;
           a.value = 0;
         }
         break
       case "G300A":
         sonuc = true;
         break
       default:
         sonuc = true;  
	     break
         
      } 
       
   }
   return sonuc;
  }
 
function TutarGeriAl2()

   { 
    var i,j,x,y,str,l,z,sonuc = true;
      for (i=0; i < document.forms[0].elements.length; i++)
      { x = new String(document.forms[0].elements[i].name);
        x = x.toLowerCase();
        if ((x.substring(0,4) == "ack") || (x.substring(0,5) == "wack"))
          { if (sonuc)
           sonuc = AckKont();
          }
      }
      
      if (sonuc)
        for (i=0; i < document.forms[0].elements.length; i++)
       { if (sonuc)  
        { x = new String(document.forms[0].elements[i].name);
          x = x.toLowerCase();
          if ((x.substring(0,5) == "tutar") || (x.substring(1,6) == "tutar"))
          {
            y = document.forms[0].elements[i].value;
            sonuc = false;
            for(z=0; z < y.length; z++)
              if (y.charAt(z) >= '1' && y.charAt(z) <= '9')
              { 
                str = y.charAt(z);
                j = z + 1;
                sonuc = true;
                z = y.length;
              }
            if (sonuc)
            {
              for(z=j; z < y.length; z++)
                if (y.charAt(z) >= '0' && y.charAt(z) <= '9')
                  str = new String(str+y.charAt(z));
              b = document.forms[0].trkd.value;
              if ((str.length < 7) && ((b == "E3001") || (b == "Y0001")
|| (b == "YT001")))
              { 
                sonuc = false;
                document.forms[0].elements[i].focus();
              }
              else
              { 
                document.forms[0].elements[i].value = str;
              }
            }
            else
            { 
              if ((document.forms[0].trkd.value != "VRTL2") && (document.forms[0].trkd.value != "H5001") && (x.substring(0,6) != "tutarx") && (x.substring(1,7) != "tutarx"))
              { 
                 sonuc = true;
              }
              else
              {  sonuc = true;
                 y.value = 0;
              }
              
            }
          }
        }
      }
      return sonuc;
   } 

 //-----------------------------------------------------------     
function TutarGeriAl()
 {  
      var i,j,x,str,l,z,trkdval;
      trkdval = document.forms[0].trkd.value;
      if(CheckSpecificInputs() == false)
   	{
   		return false;	
   	}
      for (i=0; i < document.forms[0].elements.length; i++) 
      {
        x = new String(document.forms[0].elements[i].name);
        x = x.toLowerCase();
        if ((x.substring(0,4) == "ack") || (x.substring(0,5) == "wack"))
          { 
//açýklamayý kontrol eder uzunluk, boþluk vs.
			if (AckKont()==false) 
			{
				document.forms[0].elements[i].focus();
				return false  //hata varsa çýk
			}
		  }//end of ACK IF			
		 
		  
		  if ((x == "_ctl0:hesabahavale_txtaciklama")||(x == "_ctl0:dovizhesaplarimarasigiris_txtaciklama") || (x == "_ctl0:dchrysler_txtaciklama"))
		  {
		  	
		  	if (AciklamaUzunlukKontrol()==false) 
			{
				document.forms[0].elements[i].focus();
				return false  //hata varsa çýk
			}	
		  }			
         var booltutar,boolkurus;  

	     if (x.substring(0,5) == "kurus" || 
		 x.substring(1,6) == "kurus" ||
		 x.substring(x.length - 6, x.length) == "_kurus" )
		  {
				boolkurus = true; //hatasýz kabul edelim
				var kurusobj = document.forms[0].elements[i]; 
				if (isObjNumeric(kurusobj))
				{
					boolkurus = isKurusDolu(kurusobj);
				}
				else
				{
					alert("Bu alana numerik bir deðer giriniz.");
					kurusobj.setfocus();
						
					return false;
				}

		       
		}
		if (x.substring(0,5) == "tutar" || 
		    x.substring(1,6) == "tutar" ||
		    x.substring(x.length - 6,  x.length) == "_tutar" )
		{
				booltutar = true;  
				var tutarobj = document.forms[0].elements[i];
				booltutar = isTutarDolu(tutarobj);
				
	    }
	      
	     
	  
  }//end of FOR 
  
		 // alert("boolkurus"+boolkurus);
		  //alert("booltutar"+booltutar);
   	if (  ((boolkurus==false)&&(booltutar==false)))
	      {
	        	if((document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'] != null)&&(document.forms[0]['_ctl0:HesabaHavaleGiris_AlacakliHesap'] != null))
	        	{
	        		if(((document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].options[document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].options[document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].selectedIndex].text != "My Other Accounts"))&&
	        		((document.forms[0]['_ctl0:HesabaHavaleGiris_AlacakliHesap'].options[document.forms[0]['_ctl0:HesabaHavaleGiris_AlacakliHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:HesabaHavaleGiris_AlacakliHesap'].options[document.forms[0]['_ctl0:HesabaHavaleGiris_AlacakliHesap'].selectedIndex].text != "My Other Accounts")))
	        		{
	        			alert(itrHS_msgTutarGir);
	        			tutarobj.focus();
					return false;  //hata varsa çýk   
					}
				}
				else if(trkdval == 'THAV1')//deðiþecek talimatsýz olacak
				{
					if((document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].options[document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].options[document.forms[0]['_ctl0:HavaleGiris_BorcluHesap'].selectedIndex].text != "My Other Accounts"))
	        		{
						alert(itrHS_msgTutarGir);
		        			tutarobj.focus();
						return false;  //hata varsa çýk   
					}
				}
			if((document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_BorcluHesap'] != null)&&(document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_AlacakliHesap'] != null))
	        	{
				if(((document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_BorcluHesap'].options[document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_BorcluHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_BorcluHesap'].options[document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_BorcluHesap'].selectedIndex].text != "My Other Accounts"))&&
	        		((document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_AlacakliHesap'].options[document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_AlacakliHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_AlacakliHesap'].options[document.forms[0]['_ctl0:DovizHesaplarimArasiGiris_AlacakliHesap'].selectedIndex].text != "My Other Accounts")))
	        		{
	        			alert(itrHS_msgTutarGir);
	        			tutarobj.focus();
					return false;  //hata varsa çýk   
				}
			}
			if(document.forms[0]['_ctl0:NesineOdeme_BorcluHesap'] != null)
	        	{
				if((document.forms[0]['_ctl0:NesineOdeme_BorcluHesap'].options[document.forms[0]['_ctl0:NesineOdeme_BorcluHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:NesineOdeme_BorcluHesap'].options[document.forms[0]['_ctl0:NesineOdeme_BorcluHesap'].selectedIndex].text != "My Other Accounts"))

	        		{
		        		alert(itrHS_msgTutarGir);	
		        		
	   
	        			tutarobj.focus();
					return false;  //hata varsa çýk   
				}
			}
			if(document.forms[0]['_ctl0:Bilyoner_BorcluHesap'] != null)
	        	{
				if((document.forms[0]['_ctl0:Bilyoner_BorcluHesap'].options[document.forms[0]['_ctl0:Bilyoner_BorcluHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:Bilyoner_BorcluHesap'].options[document.forms[0]['_ctl0:Bilyoner_BorcluHesap'].selectedIndex].text != "My Other Accounts"))
	        		{
	        			alert(itrHS_msgTutarGir);
	        			tutarobj.focus();
					return false;  //hata varsa çýk   
				}
			}
			
			if(document.forms[0]['_ctl0:TJK_BorcluHesap'] != null)
	        	{
				
				if((document.forms[0]['_ctl0:TJK_BorcluHesap'].options[document.forms[0]['_ctl0:TJK_BorcluHesap'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:TJK_BorcluHesap'].options[document.forms[0]['_ctl0:TJK_BorcluHesap'].selectedIndex].text != "My Other Accounts"))
	        		{
					alert(itrHS_msgTutarGir1);
	        			tutarobj.focus();
					return false;  //hata varsa çýk   
					
				}
				
			}
			
			if((document.forms[0]['_ctl0:DChrysler_BorcluHesapYTL'] != null)&&(document.forms[0]['_ctl0:DChrysler_BorcluHesapEUR'] != null))
	        	{
	        		if(((document.forms[0]['_ctl0:DChrysler_BorcluHesapYTL'].options[document.forms[0]['_ctl0:DChrysler_BorcluHesapYTL'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:DChrysler_BorcluHesapYTL'].options[document.forms[0]['_ctl0:DChrysler_BorcluHesapYTL'].selectedIndex].text != "My Other Accounts"))&&
	        		((document.forms[0]['_ctl0:DChrysler_BorcluHesapEUR'].options[document.forms[0]['_ctl0:DChrysler_BorcluHesapEUR'].selectedIndex].text != "Diðer Hesaplarým")&&(document.forms[0]['_ctl0:DChrysler_BorcluHesapEUR'].options[document.forms[0]['_ctl0:DChrysler_BorcluHesapEUR'].selectedIndex].text != "My Other Accounts")))
	        		{
	        			alert(itrHS_msgTutarGir);
	        			tutarobj.focus();
					return false;  //hata varsa çýk   
				}
			}
	      }
		  
		  if((booltutar==false) && (document.forms[0]['_ctl0:TJK_BorcluHesap'] != null))
		  {
		  alert(itrHS_msgTutarGir1);
		  return false;
		  }
/*    
   	  if(trkdval == "G2002")
	  {
		if(AssertCurreny() == false)
		{
			return false;
		}
	  }
*/
   return true;
 } 

 function CheckSpecificInputs()
{
	var trkd = document.forms[0].trkd.value;
	/*	Vadesiz TL veya DTH Hesap Özetim Ekranlarý ise	hata mesajý farklýlýk göstereceði için böyle yapýldý*/
	if(trkd == "TLHO1" || trkd == "DTHO1")
	{
		if(document.forms[0]._ctl0_HesabaHavale_radioBorcluHesapG != null)
		{
			if(document.forms[0]._ctl0_HesabaHavale_radioBorcluHesapG.checked)
			{	
				if((document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu.value == "") ||
					(document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapNo.value == ""))
				{
					alert(HesapOzetim_msgHesapGir);
					if(document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu.value == "")
					{
						document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu.focus();
					}
					else
					{
						document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapNo.focus();
					}
					return false;
				}
			}
		}
	}
	if(document.forms[0]._ctl0_HesabaHavale_radioBorcluHesapG != null)
	{
		if(document.forms[0]._ctl0_HesabaHavale_radioBorcluHesapG.checked)
		{	
			if((trim(document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu.value) == "") ||
				(trim(document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapNo.value) == ""))
			{
				alert(Havale_msgBorcluHesapGir);	
				return false;
			}
		}
	}
	if(document.forms[0]._ctl0_HesabaHavale_radioAlacakliHesapG != null)
	{
	
		if(document.forms[0]._ctl0_HesabaHavale_radioAlacakliHesapG.checked)
		{	
			if((trim(document.forms[0]._ctl0_HesabaHavale_txtAlacakliHesapSubeKodu.value) == "")||
			(trim(document.forms[0]._ctl0_HesabaHavale_txtAlacakliHesapNo.value) == ""))
			{
				alert(Havale_msgAlacakliHesapGir);	
				return false;
			}		
		}
	}
	if(document.forms[0]._ctl0_DChrysler_radioBorcluHesapYTLG != null)
	{
		if(document.forms[0]._ctl0_DChrysler_radioBorcluHesapYTLG.checked)
		{	
			if((document.forms[0]._ctl0_DChrysler_txtBorcluHesapYTLSubeKodu.value == "") ||
				(document.forms[0]._ctl0_DChrysler_txtBorcluHesapNoYTL.value == ""))
			{
				alert(Havale_msgBorcluHesapGir);	
				return false;
			}
		}
	}
	if(document.forms[0]._ctl0_DChrysler_radioBorcluHesapEURG != null)
	{
	
		if(document.forms[0]._ctl0_DChrysler_radioBorcluHesapEURG.checked)
		{	
			if((document.forms[0]._ctl0_DChrysler_txtBorcluHesapEURSubeKodu.value == "")||
			(document.forms[0]._ctl0_DChrysler_txtBorcluHesapNoEUR.value == ""))
			{
				alert(Havale_msgBorcluHesapGir);	
				return false;
			}		
		}
	}
	return true;
}
 //----------------------------------------------------------- 
function isKurusDolu (fkurus)
{

 if (!fkurus)
 {
	return true;
 }
 if ((fkurus.value == "") || (fkurus.value == "00") ||(fkurus.value <= 0) )
  { 
    fkurus.value ="00";
	return false;
  }
 
 if(fkurus.value.length == 1)
 {
	fkurus.value = fkurus.value + 0;
 }
  
  return true;
}

 //----------------------------------------------------------- 
function isTutarDolu (ftutar)
{
 var x,tutval,ntutval;
 var trkdval = document.forms[0].trkd.value;
 x = new String(ftutar.name);
 x = x.toLowerCase();

//	alert(x.substring(x.length-6, x.length));

 if ((x.substring(0,5) == "tutar") || 
     (x.substring(1,6) == "tutar") || 
     (x.substring(x.length-6, x.length) == "_tutar") || 
     (x.indexOf("fullamount")>0 ))
       {
             tutval = ftutar.value;
             tutval = ReplaceCommas(tutval);
             ntutval = Number(tutval);
             ftutar.value = tutval;
      
		if ((tutval=="")||(ntutval<=0))
		{ 
			return false;
		}
  }
 return true;
}
 //-----------------------------------------------------------
 function AssertCurreny()  
 {
	var gzalVal		= document.frm1.gzal.value;
	var tutar		= document.frm1.tutar.value;
	var wtip		= document.frm1.wtip[0].checked;
	
	if(gzalVal == "AUD" || gzalVal == "DKK" || gzalVal == "SEK" || gzalVal == "JPY" || gzalVal == "NOK" || gzalVal == "SAR")
	{
		if(tutar < 100)
		{
			if(wtip == true)
			{	
				alert("Bu döviz cinsi ile yapabileceðiniz minimum alýþ/satýþ tutarý 100 birimdir");
				return false;
			}
		}
	}
	return true;
 }
 //-----------------------------------------------------------
  function AckKont()
   { var i,j,a,x,sonuc = true;
     var flag = true;
     a = document.forms[0].wack.value; 
     for (i=0,j=1; i < a.length;i++,j++)
      { if (a.substring(i,j) != " ")
          { a = a.substring(i,a.length) 
            i = a.length;  
          }
      }
     document.forms[0].wack.value = a;
     for (i=0; i < document.forms[0].elements.length; i++)
      { x = new String(document.forms[0].elements[i].name);
        x = x.toLowerCase();
        if (x.substring(0,5) == "wacki")
          flag = false;
      }
     if (flag)
       { 
         if (a.length < 10)
         { alert(itrHS_msgAciklamaOnKarakterdenAzOlamaz);
           sonuc = false;
           document.forms[0].wack.focus();
         }
       }
     else
       { 
         if ((document.forms[0].wacki[1].checked) && (a.length < 10))
         { alert(itrHS_msgAciklamaOnKarakterdenAzOlamaz);
           sonuc = false;
           document.forms[0].wacki[0].checked = true;
           document.forms[0].wack.focus();
         }
       }
     return  sonuc; 
   }
   function AciklamaUzunlukKontrol()
   {
   	if(document.forms[0]._ctl0_HesabaHavale_txtAciklama != null)
   	{
   		if ((!document.forms[0]._ctl0_Havale_checkAciklamaIsimEkle.checked) && 
   		(document.forms[0]._ctl0_HesabaHavale_txtAciklama.value.length < 10))
         	{ 
           		alert(itrHS_msgAciklamaOnKarakterdenAzOlamaz);
           		document.forms[0]._ctl0_Havale_checkAciklamaIsimEkle.checked = true;
           		document.forms[0]._ctl0_HesabaHavale_txtAciklama.focus();
           		return false;
         	}
        }
        if(document.forms[0]._ctl0_DovizHesaplarimArasiGiris_txtAciklama != null)
   	{
   		if ((!document.forms[0]._ctl0_Doviz_checkAciklamaIsimEkle.checked) && 
   		(document.forms[0]._ctl0_DovizHesaplarimArasiGiris_txtAciklama.value.length < 10))
         	{ 
           		alert(itrHS_msgAciklamaOnKarakterdenAzOlamaz);
           		document.forms[0]._ctl0_Doviz_checkAciklamaIsimEkle.checked = true;
           		document.forms[0]._ctl0_DovizHesaplarimArasiGiris_txtAciklama.focus();
           		return false;
         	}
        }
        if(document.forms[0]._ctl0_DChrysler_txtAciklama != null)
   	{
   		if(document.forms[0]._ctl0_DChrysler_txtAciklama.value.length < 10)
         	{ 
           		alert(itrHS_msgAciklamaOnKarakterdenAzOlamaz);
           		document.forms[0]._ctl0_DChrysler_txtAciklama.focus();
           		return false;
         	}
        }
   }
 function Sayimi()
   {  if ((event.keyCode < 48) || (event.keyCode > 57)) 
        return false;
   } 
 function Rakammi(e)
   {  
   	if (e.keyCode) keycode=e.keyCode
     		else keycode=e.which;
   	if ((keycode < 48) || (keycode > 57)) 
		return false;
	else
		return true;
        
  }

 function AlanNumerikmi(AlanAdi, AlanAdiAciklamasi)
 {
	if (!eval("document.forms[0]." + AlanAdi))
	{
		return true;
	}
	var AlanDegeri = eval("document.forms[0]." + AlanAdi + ".value");

	for (i=0; i<AlanDegeri.length ; i++)
	{
		if ((AlanDegeri.charAt(i) < '0') ||(AlanDegeri.charAt(i) > '9'))
		{
			alert(itrHS_msgNumerikDegerGir2_1 + AlanAdiAciklamasi + itrHS_msgNumerikDegerGir2_2);
			eval("document.forms[0]." + AlanAdi + ".focus();");
			return false;
		}
	}
	return true;
 }
	
 function Virgul(x,y)
 {  
	  var a,b;
      if ((event.keyCode < 48) || (event.keyCode > 57)) 
		   event.returnValue = false;
      else
      {
		  if (x.value.length >= y)
			event.returnValue = false;
		  else
			if (!parent.isIE11 && x.value.length >= 3)
            { 
				a = String.fromCharCode(event.keyCode);
				x.value = new String(x.value+a);
				EditedTutar(x);
				event.returnValue = false;
            }
      }
 }
 function VergiSec()
 { 
   var sonuc = true;
   var BirTutarDolu = false;
   var BakilanTutarDolu;
   var checkboxvar  = false;
   var x,str,l,i,z,j,y=1;
   var a,b,c,length = document.forms[0].elements.length;
   for (i=0; i < length; i++)
      { if (document.forms[0].elements[i].name.substring(0,4) == "wbox")
          {
            checkboxvar = true;
            if (document.forms[0].elements[i].checked)
              { 
                x = new String(document.forms[0].elements[i].name.substring(4,5));
                if (y < 9)
                  { eval("document.forms[0].hidt"+y+".value = x");
                    y++;
                  }
                else
                  { alert("Bir Seferde En Fazla 3 Taksit Ödeyebilirsiniz");
                    i = document.forms[0].elements.length;
                    sonuc = false;
                  }  
              }
          }  
      }
   a = document.forms[0].hidt1.value;
   b = document.forms[0].hidt2.value;
   c = document.forms[0].hidt3.value;
   if ((sonuc) && (checkboxvar))
     { if (a == 0)
         { alert("Hangi Taksitlerinizi Ödemek Ýstediðiniz Bilgisini Giriniz");
           sonuc = false;
         }
       else
        { a++;
          if ((b != 0) &&  (b != a))
           { alert("Sadece Birbirini Takip Eden Taksitleri Ödeyebilirsiniz");
             sonuc = false;
           }
          else
           { b++;
             if ((c != 0) && (c != b))
              { alert("Sadece Birbirini Takip Eden Taksitleri Ödeyebilirsiniz");
                sonuc = false;
              }     
           }
         }    
     }
     
   if (sonuc)
   {
	for (i=0; i < length; i++) 
	{
        x = new String(document.forms[0].elements[i].name);
        x = x.toLowerCase();
		var booltutar = false;
		var boolkurus = false;        
		if ((x.substring(0,5) == "tutar") || (x.substring(1,6) == "tutar"))
		{
			var tutarobj = document.forms[0].elements[i]; 
			booltutar = true; //hatasýz kabul edelim
			booltutar = isTutarDolu(document.forms[0].elements[i]);
		}
		if (x.substring(0,5) == "kurus" || x.substring(1,6) == "kurus")
		{
			boolkurus = true; //hatasýz kabul edelim
			boolkurus = isKurusDolu(document.forms[0].elements[i]);
	    }
		if ((boolkurus==true) || (booltutar==true))		//Kurus veya tutar alaný doluysa
		{
			BirTutarDolu = true;						//En az bir alan dolu girilmiþtir
		}
	}           
	
	if (BirTutarDolu)
	{
		sonuc = true;
	}		
	else
    { 
        alert("Tutar Alanlarýndan En Az Birini Doldurmanýz Gerekmektedir");
        sonuc = false; 
    }
   } //end of if (sonuc)
   
   if (checkboxvar)
   {
     for (j=0; j < length; j++)
       if (document.forms[0].elements[j].name.substring(0,4) == "wbox")
         if (document.forms[0].elements[j].checked)
            document.forms[0].elements[j].checked = false;
   }
   if (sonuc == false)
     for (y=6; y < 9; y++)
       document.forms[0].elements[y].value = 0;
   return sonuc;
 }

 function toggleVisibility(id, NNtype, IEtype, WC3type) 
   {
    if (document.getElementById)
        eval("document.getElementById(id).style.visibility = \"" + WC3type + "\"");
    else 
       if (document.layers) 
            document.layers[id].visibility = NNtype;
       else 
          if (document.all) 
             eval("document.all." + id + ".style.visibility = \"" + IEtype + "\"");
     if (NNtype == "show")
     {
     switch(id)
     { case "radio1":
         toggleVisibility("radio2", "hidden", "hidden", "hidden");
         toggleVisibility("radio3", "hidden", "hidden", "hidden");
         break
       case "radio2":
         toggleVisibility("radio1", "hidden", "hidden", "hidden");
         toggleVisibility("radio3", "hidden", "hidden", "hidden");
         break
       case "radio3":
         toggleVisibility("radio1", "hidden", "hidden", "hidden");
         toggleVisibility("radio2", "hidden", "hidden", "hidden");
         break
       default:
      }
      
    }
     
   }

function Goster(a)
{ 
	if(document.forms[0].wradio)
    {
     	if (document.forms[0].wradio[2].checked) 
     	{  
			if ((document.forms[0].trkd.value == "E3001") && 
				((document.forms[0].weban && document.forms[0].weban.value !="") || 
				(document.forms[0].wesub && document.forms[0].wesub.value !="")))
          	{
                if (navigator.appName != "Netscape")
				{         	
	      			toggleVisibility('radio3','show','visible','visible');
				}
	   		}
           	else
	   		{
	     		if (document.forms[0].whesap2)
				{ 
          			if (document.forms[0].whesap2.type == "hidden")
          			{
            			if (document.forms[0].whesap2.value.substring(0,1) == "7")
	    				{
	    					if (navigator.appName != "Netscape")
         					{
              					toggleVisibility('radio3','show','visible','visible');
							}
			    		}
            			else
	    				{
			        		document.forms[0].adres.value="";
	        		  		document.forms[0].babad.value="";
	          				document.forms[0].telno.value="";
		          			if (navigator.appName == "Netscape")
							{
								if (a == "focus")
								{
			  						document.forms[0].wsub.focus();
								}
							}
	    				}
          			}
          			else
	  				{
		         		for (var i=0;i < document.forms[0].whesap2.length;i++)
	     				{	 
               				if (document.forms[0].whesap2.options[i].selected)
               				{ 
			   					if (document.forms[0].whesap2.options[i].value.substring(0,1) == "7") 
			   					{
									if (navigator.appName != "Netscape")
									{
                    				      toggleVisibility('radio3','show','visible','visible');
									}
		   						}
                   				else 
		   						{  
									document.forms[0].adres.value="";
			      					document.forms[0].babad.value="";
						     	    document.forms[0].telno.value="";
			      					if (navigator.appName == "Netscape")
	              					{ 
										if (a == "focus")
										{
											document.forms[0].wsub.focus();
										}
	              					}  
		      						else
		      						{		
               		  				    toggleVisibility('radio3','hidden','hidden','hidden');
		      						}
		   						}		
                			}
	      				}
	   				}
        		}	//end of if (document.forms[0].whesap2)
				else
				{
           			toggleVisibility('radio3','show','visible','visible');	   	
				}   
        	}
    	}	// end of if (document.forms[0].wradio[2].checked) 
    	else
    	{	 
			document.forms[0].adres.value="";
	 		document.forms[0].babad.value="";
	 		document.forms[0].telno.value="";
           	toggleVisibility('radio3','hidden','hidden','hidden');
   		} 
     }	
 }

function Alfanumeric(e)
{
  var a,durum=true;
  var bagturk = "çÇðÐýÝöÖþÞüÜ";
  var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41'";
  var bagnum = "0123456789";

  a = (navigator.appName != "Netscape") ? event.keyCode : e.which;
  b = String.fromCharCode(a);
  
  if (bagturk.indexOf(b) == -1)
  {
      if  (bagozel.indexOf(a) == -1)
      {
         if  (bagnum.indexOf(b) == -1)   
         {
            if ((a < 65 || a > 90) && (a < 97 || a > 122)) 
            {
                durum=false;
            }
         }
      }
   }
  if ((!durum) && (navigator.appName != "Netscape"))
     event.returnvalue=false;
  return durum;
}

//----------------------------------------------------------------------------------------

function tablosatir(str)
{
	var i,j,k,strtut,strtemp,tutar,toplam = 0;
	var toplamvar =false;
//Her satýr ayrýþtýrýlýr
	rows = str.split("!")
	for (i=0;i<rows.length;i++)	
	{	
		document.write("<tr>");
//Her satýrýn kolonlarý ayrýþtýrýlýr ve ekrana yazýlýr 
		cols = rows[i].split("%");
		for (j=0;j<cols.length;j++)
		{	
			if ((i==0) || (j==0))
			{
				document.write("<td bgcolor=F0F0FA style='text-align:center'><b>" +cols[j]+"</b></td>");
			}
			else
			{
				document.write("<td style='text-align: right'>"+cols[j]+"</td>");
			}
//Sayfada Senet Bilgisi mi Çek Bilgisi mi var anlamak için 
//Ýlk satýrýn ikinci kolonuna bakýyor. Eðer Çek Bilgisi ise toplam bilgisi sayfaya yazýlmalý 
			if (i==0 && j==1)
			{
				if (cols[j].indexOf("ÇEK")>=0)
				{
					toplamvar= true;
				}
			}
		}
		document.write("</tr>");
//Tutar bilgisi son kolonda olduðundan her satýrýn son kolonundaki bilgi alýnýr
		j = cols.length - 1;
		strtut = cols[j];
		tutar = "";
//virgülleri atýlýr
		for (k=0;k<strtut.length;k++)
		{
			if (strtut.charAt(k) >= '0' && strtut.charAt(k) <= '9')
				tutar = String(tutar+strtut.charAt(k));		
		}
//Ýntegera çevrilerek toplama eklenir
		if (tutar.length > 0)
		{
			tutar = parseInt(tutar,10);
			toplam = toplam + tutar;
		}
  	}
  	//alert("top:"+toplam);

//Integer stringe çevrilerek edited(virgüllü) hale getirilir
	strtut = "";
	strtemp = String(toplam);
	nokpos = strtemp.length-2
	ondalik=strtemp.substring(nokpos,nokpos+2);
	strtemp=strtemp.substring(0,nokpos);
	i = strtemp.length + 1;
	for (k = strtemp.length % 3;k<i;k+=3)
	{
		if (k != 0)
		{
			if (strtut.length != 0)
			{
				strtut = String(strtut+","+strtemp.substring(k-3,k));
			}
			else
			{
				strtut = strtemp.substring(0,k);
			}
		}
	}
	strtut = strtut+"."+ondalik;
//Eðer sayfa Çek Bilgisi sayfasý ise elde edilen toplam ekrana yazýlýr
	if (toplamvar)
	{
		document.write("<tr><td colspan="+(j-1)+">&nbsp;</td><td style='text-align:right'> <b>Toplam:</b></td><td style='text-align:right'>"+ strtut+"</td></tr>");
	}
	
}
//----------------------------------------------------------------------------------------

function whichNavi()
{
 
}

function put()
{
	var wdeger=document.forms[0].wplakalar.options[document.forms[0].wplakalar.selectedIndex].value;
	document.forms[0].wmkod.value=wdeger.substr(0,1);
	document.forms[0].wtckn.value=wdeger.substr(1,11);
	document.forms[0].wsicil.value=wdeger.substr(12,10);
	document.forms[0].wsoyad.value=wdeger.substr(22,20);
	document.forms[0].wad.value=wdeger.substr(42,16);
	document.forms[0].wadres.value=wdeger.substr(58,30);
	document.forms[0].wtelkod.value=wdeger.substr(88,3);
	document.forms[0].wtelno.value=wdeger.substr(91,7);
	document.forms[0].wcepkod.value=wdeger.substr(98,3);
	document.forms[0].wcepno.value=wdeger.substr(101,7);
	document.forms[0].wplaka1.value=wdeger.substr(108,2);
	document.forms[0].wplaka2.value=wdeger.substr(110,4);
	document.forms[0].wplaka3.value=wdeger.substr(114,5);

        for (var i=0;i< document.forms[0].wg.length;i++)
	{
	   if (document.forms[0].wg.options[i].value == wdeger.substr(119,2))
              document.forms[0].wg.options[i].selected = true;

	}


        for (var i=0;i< document.forms[0].wa.length;i++)
	{
	   if (document.forms[0].wa.options[i].value == wdeger.substr(121,2))
              document.forms[0].wa.options[i].selected = true;

	}


	document.forms[0].wy.value=wdeger.substr(123,4);


        for (var i=0;i< document.forms[0].wtip.length;i++)
	{
	   if (document.forms[0].wtip.options[i].value == wdeger.substr(127,1))
              document.forms[0].wtip.options[i].selected = true;

	}

	document.forms[0].wmodel.value=wdeger.substr(128,4);
	document.forms[0].wkilo.value=wdeger.substr(132,5);
	document.forms[0].wsilindir.value=wdeger.substr(137,5);
	document.forms[0].woturma.value=wdeger.substr(142,3);
	document.forms[0].wistiab.value=wdeger.substr(145,6);

}

function putMtvValues()
{
	var wdeger=document.forms[0].wsahip.options[document.forms[0].wsahip.selectedIndex].value;

	if (wdeger.length >= 1)
	{
		document.forms[0].wmtip.value = wdeger.substr(0,1);
	}
	else
	{
		document.forms[0].wmtip.value = "X";
	}

	if (wdeger.length >= 12)
	{
		document.forms[0].wtckn.value = wdeger.substr(1,11);
	}
	else
	{
		document.forms[0].wtckn.value = "";
	}

	if (wdeger.length >= 22)
	{
		document.forms[0].wvkn.value = wdeger.substr(12,10);
	}
	else
	{
		document.forms[0].wvkn.value = "";
	}

	if (wdeger.length > 22)
	{
		document.forms[0].wplaka.value = wdeger.substr(22,wdeger.length-22);
		document.forms[0].wplaka.readOnly = true;
	}
	else
	{
		document.forms[0].wplaka.readOnly = false;
		document.forms[0].wplaka.value = "";
	}
}

function setTaxQueryType()
{
	if (document.forms[0].wsoru1[0].checked)
	{
		document.forms[0].FieldSet1.style.display = 'block';
		document.forms[0].FieldSet2.style.display = 'none';
	}
	else if (document.forms[0].wsoru1[1].checked)
	{
		document.forms[0].FieldSet1.style.display = 'none';
		document.forms[0].FieldSet2.style.display = 'block';
	}
}



function mtvilk()
{


if ( document.forms[0].wxyz.value == 0)
 {
	put();
	document.forms[0].wxyz.value = 1;

 }

}



function mutluwww()  
{        
	var o; 
	if (document.forms[0].wm1.selectedIndex == 1)
        { 	
	  if (window.showModalDialog)
	  {
	      o = window.showModalDialog("/htmls/ekhesmetin.html","pwdhlp","dialogWidth: 800px; dialogHeight: 500px; scroll: yes; resizable:no;");
	      if (o != null)
	      {
	         if (o.x == "EVET")
 		 {
			document.forms[0].wm3.disabled = false;
			document.forms[0].wm2.disabled = true;
		 }
		 else
			document.forms[0].wm1.options[0].selected=true;
	      }
	  }
	  else
	  {
window.open('/secure/ekhesmetin.html','pwdhlp','toolbar=no,location=no,directories=no,	 status=no,menubar=no,scrollbars=yes,resizable=no,titlebar=no,copyhistory=no,width=550, height=500,top=30,left= 100');
	  }
              
               
        }
        else
        {
        document.forms[0].wm3.options[0].selected=true; 
	document.forms[0].wm2.value="";                      
	document.forms[0].wm2.disabled= true;
	document.forms[0].wm3.disabled= true;
        }
}


function mutluxxx()  
{
	if (document.forms[0].wm1.selectedIndex == 1)
        {
		if (document.forms[0].wm3.selectedIndex == 2)    
		{ 
		document.forms[0].wm2.disabled= false;         	
		document.forms[0].wm2.focus(); 
		}
		else
        	{
 		document.forms[0].whesap1.focus(); 
		document.forms[0].wm2.value="";
		document.forms[0].wm2.disabled= true; 
        	}        
        }
        else
        {
 	document.forms[0].wm3.options[0].selected=true;
	document.forms[0].wm2.value="";	
	document.forms[0].whesap1.focus();
	      
        }
}



function mutluyyy()  
{
	if (document.forms[0].wm1.selectedIndex == 1)
        {
        	 if (document.forms[0].wm3.selectedIndex != 2)    
        	{
		 document.forms[0].wm2.value="";
		document.forms[0].whesap1.focus(); 
		document.forms[0].wm3.options[0].selected=true;
	   	alert('Acil Nakit Sistemi tahsisiyle beraber "Belirttiðim Tutar Aktarýlsýn" seçeneði haricinde tutar giriþi yapýlmaz!');       
        	}       
        }
        else
        {
	document.forms[0].wm2.value="";	
	document.forms[0].whesap1.focus();
        }
}

function MutluChr(txtsay, obj)            
{
	var keyCode;                             
	if (document.all)
	{                       
		keyCode=txtsay.keyCode                 
	}                                        
	else
	{                                    
		keyCode=txtsay.which;                   
	}                                        
	var str=obj.value;                       
	if (!(keyCode >= 48 && keyCode <= 57))
	{
		return false;                           
	}                                        
	return true;                             
}                                         



function Clearguns()

{

var wdeger=document.forms[0].wa.options[document.forms[0].wa.selectedIndex].value;
if ( wdeger != 900005 )

   document.forms[0].wguns.value = "" ;

}


function KontSelect()

{
var wdeger=document.forms[0].wa.options[document.forms[0].wa.selectedIndex].value;
if ( wdeger != 900005 )
  
  document.forms[0].wa.focus();
  

}


function UyumluMu()

{

var wdeger = document.forms[0].wa.options[document.forms[0].wa.selectedIndex].value;

var wgunsay  = document.forms[0].wguns.value;

if ( ( wdeger == 900005 ) && ( wgunsay == "" || wgunsay == 0 ) )
  {
    alert("Serbest Vadeli için gün sayýsý giriniz");
    return false;
  }

if ( ( wdeger == 900005 ) && ( wgunsay > 365 || wgunsay < 28 ) )

   {
	alert("Serbest Vadeli için en az 28 en çok 365 gün giriniz");	
	return false;
  	
   }
return true;

}
function SifreKont(e)
{

  var bagnum = "'48','49','50','51','52','53','54','55','56','57'"; 
  var bagozel = "'13','10'";
  var a,durum = true;
  SifreText = document.forms[0].wsf1.value;
  if (navigator.appName == "Netscape")
  {
    a = e['which'];
  }
  else 
  {
    a = event.keyCode;
  }
  if (bagozel.indexOf(a) == -1)
  {
    if (bagnum.indexOf(a) == -1)
    {
	alert("Þifreniz sadece sayýlardan oluþabilir");
	durum = false;
    }
    else
    {
   	if (SifreText.length == 0 && a == '48')
	{
	  alert("Þifrenizin ilk hanesi sýfýr olamaz");
	  durum = false;   	   
	}		  
    }  
  }

  else if (SifreText.length < 6)
  {
    alert("Þifreniz 6 haneli ve sayýsal olmalýdýr!");
    durum = false;      
  }
  if (durum && SifreText.length == 6)
  {
    document.forms[0].wsub.focus();
  }
  if ((!durum) && (navigator.appName != "Netscape"))
  {
     event.returnvalue=false;
  }
  return durum;
}

function FocusGonder(text)
{
   if (text.value.length==6)
      document.forms[0].wsub.focus();
}

function CheckBrowser()
{
	var browserName = navigator.appName;
	var browserVersion = parseInt(navigator.appVersion);
	var browser;
	if (browserName == "Netscape" && browserVersion == 5) 
	{
	    browser = "nn6";
	}
	else if (browserName == "Netscape" && browserVersion == 4) 
	{
    	    browser = "nn4";
	}
	else if (browserName == "Microsoft Internet Explorer" && 
		browserVersion == 4 &&
         	navigator.appVersion.indexOf("MSIE 7") != -1) 
	{
    	    browser = "ie7";  
	}
	else if (browserName == "Microsoft Internet Explorer" && 
        	 browserVersion == 4 && 
         	navigator.appVersion.indexOf("MSIE 6.0") != -1) 
	{
    	    browser = "ie6";  
	}
	else if (browserName == "Microsoft Internet Explorer" && 
        	 browserVersion == 4 && 
         	navigator.appVersion.indexOf("MSIE 5.5") != -1) 
	{
    	    browser = "ie55";
	}
	else if (browserName == "Microsoft Internet Explorer" && 
        	 browserVersion == 4 && 
         	navigator.appVersion.indexOf("MSIE 5.0") != -1) 
	{
    	    browser = "ie5";
	}
	else if (browserName == "Microsoft Internet Explorer" 
        	 && browserVersion == 4) 
	{
    	    browser = "ie4";
	}

	return browser;

}

function winOpenScript(winURL, winName, w, h, scroll) {
	var returnObj;
	var settings = new String();
	var useReturnObj = false;
	var returnObjAraba = false;
	var returnObjHisse = false;
	var returnObjKurum = false;
        var returnObjBirikim = false;
	var browser = CheckBrowser();

	if(document.forms[0]._ctl0__ctl0_YatirimHesabiOdemeTipi_rdbtnANSTip_0)
	{
		useReturnObj = true;
	}

		    settings = 'width=' + w + 'px, height=' + h + 'px, scrollbars= ' + scroll + ', resizable=1, menubar=1';


		if (winURL.indexOf("kodlar.asp") != -1)
		{
	            winURL = winURL.replace("/programs/kodlar.asp","/Internet/isModules/kodlar.aspx");
	   	    settings = settings.replace("dialogHeight: 500px;","dialogHeight: 560px;");
			// if from a test "ekip" then replace internet //alper
			if (document.location && document.location.href)
			{
				if (document.location.href.toLowerCase().indexOf("ekip") != -1 )
				{
					var ekip = document.location.href.substr(document.location.href.toLowerCase().indexOf("ekip"), 8);
					winURL = winURL.replace("/Internet/isModules/", "/" + ekip + "/isModules/");
				}

				if (document.location.href.toLowerCase().indexOf("preprod2") != -1 )
				{
					var ekip = "preprod2";
					winURL = winURL.replace("/Internet/isModules/", "/" + ekip + "/isModules/");
				}
			}
			// \if from a test "ekip" then replace internet //alper
	   	    useReturnObj = true;
		}
		if (winURL.indexOf("arabacins.html") != -1)
		{
		    winURL = winURL.replace("/arabacins.html","/htmls/arabacins.html");
		    returnObjAraba = true;
		}
		if (winURL.indexOf("hisseler.asp") != -1)
		{
		    winURL = winURL.replace("/programs/hisseler.asp","/htmls/hisseler.asp");
		    returnObjHisse = true;
		}
		if (winURL.indexOf("kurumlar.asp") != -1) {
		    settings = 'width=' + '700' + 'px, height=' + '600' + 'px, scrollbars=' + scroll + ', resizable=1, menubar=1';
		    //alert('new settings:' + settings);
		    winURL = winURL.replace("/programs/kurumlar.asp","/htmls/kurumlar.asp");
            window.open(winURL, winName, settings);
		    
		    returnObjKurum = false;		
			return true;
		}
		if (winURL.indexOf("birikimdikkat.html") != -1)
		{
		    winURL = winURL.replace("/birikimdikkat.html","/htmls/birikimdikkat.html");
		    returnObjBirikim = true;
		}
		if (winURL.indexOf("/brkmdvzdikkat.html") != -1)
		{
		    winURL = winURL.replace("/brkmdvzdikkat.html","/htmls/brkmdvzdikkat.html");
		    returnObjBirikim = true;
		}
		
		//eval("returnObj = window.showModalDialog('"+winURL+"','"+winName+"','"+settings+"');");
		
			eval("window.open('"+winURL+"','"+winName+"','"+settings+"');");

	        if ((useReturnObj) && (returnObj != null))
		{
		    returnObjDoldur(returnObj);
		}
		if ((returnObjAraba) && (returnObj != null))
		{
		    arabaCinsBelirle(returnObj);
		}
		if ((returnObjHisse) && (returnObj != null))
		{
		    hisseBilgiDoldur(returnObj);
		}
		if ((returnObjKurum) && (returnObj != null))
		{
		    KurumBilgiDoldur(returnObj);
		}
		if ((returnObjBirikim) && (returnObj != null))
		{
		    BirikimBilgiDoldur(returnObj);
		}

}

function BirikimBilgiDoldur(returnObj)
{   
    var o = returnObj;
    document.forms[0].aokuma.value = o.x;
}

function KurumBilgiDoldur(returnObj)
{   
    var o = returnObj;
    document.forms[0].whidkrmad.value = o.y;
    document.forms[0].wkrmkd.value = o.x;
    document.forms[0].wkrmad.value = o.y;
    alert(document.forms[0].wkrmad.value);
}

function hisseBilgiDoldur(returnObj)
{   
    var o = returnObj;
    document.forms[0].senad1.value = o.x;        
}

function arabaCinsBelirle (returnObj)
{
  var form = document.forms[0];
  var tip = form.wtip;
  var o = returnObj;
  eval("tip.options["+o.x+"].selected = true");
  var tip_adi = tip[tip.selectedIndex].text; 
  var innerHtml ="Taþýt cinsiniz "+ tip_adi + " olarak belirlenmiþtir.";
  alert(innerHtml);
  switch(o.x)
   {
      case "1":
      case "2":
      {
         form.woturma.value = "";
         form.wistiab.value = "";
      }
        break;
      case "3":
      {
         form.wsilindir.value = "";
         form.woturma.value = "";
         form.wistiab.value = "";
      }
        break;
      case "4":
      case "5":
      {
         form.wsilindir.value = "";
         form.wistiab.value = "";
      }
         break;
      case "6":
      {
         form.wsilindir.value = "";         
         form.woturma.value = "";
      }
        break;
   }
}


function returnObjDoldur(returnObj)
{
    var o = returnObj;
    var index;
    // Eðer Ýþ bankasý Þubesi Seçilmiþ ise sadece þube kodunu yaz
    if (o.x == 64)
    {
		var PayeeBranchObject = new Object();	//Alacaklý
		var PayerBranchObject = new Object();   //Borçlu
		
		// Sayfada Alacaklý Þube varsa
		if(document.forms[0].asube)
		{
			PayeeBranchObject = document.forms[0].asube;
		}
		// ascx'te Alacaklý Þube varsa 
		else if(document.forms[0]._ctl0_asube)
		{
			PayeeBranchObject = document.forms[0]._ctl0_asube;
		}
		else if(document.forms[0]._ctl0_HesabaHavale_txtAlacakliHesapSubeKodu)
		{
			PayeeBranchObject = document.forms[0]._ctl0_HesabaHavale_txtAlacakliHesapSubeKodu;
		}
		else if(document.forms[0]._ctl0__ctl0_HesabaHavale_txtAlacakliHesapSubeKodu)
		{
			PayeeBranchObject = document.forms[0]._ctl0__ctl0_HesabaHavale_txtAlacakliHesapSubeKodu;
		}
		
		else
		{
			PayeeBranchObject = null;
		}
		
		// Sayfada Borçlu Þube varsa
		if(document.forms[0].bsube)
		{
			PayerBranchObject = document.forms[0].bsube;
		}
		// Sayfada Borçlu Þube varsa
		else if(document.forms[0]._ctl0_bsube)
		{
			PayerBranchObject = document.forms[0]._ctl0_bsube;
		}
		else if(document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu)
		{
			PayerBranchObject = document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu;
		}
		else if(document.forms[0]._ctl0_DuzenliKontorYukleme_txtSubeKodu)
		{
			PayerBranchObject = document.forms[0]._ctl0_DuzenliKontorYukleme_txtSubeKodu;
		}
		else if(document.forms[0]._ctl0__ctl0_HesabaHavale_txtBorcluHesapSubeKodu)
		{
			PayerBranchObject = document.forms[0]._ctl0__ctl0_HesabaHavale_txtBorcluHesapSubeKodu;
		}
		else
		{
			PayerBranchObject = null;
		}
		//alper dökümanda where bilgisi var ise oraya ata
		if (document.forms[0].where)
		{
			PayerBranchObject = eval("document.forms[0]." + document.forms[0].where.value);
			PayeeBranchObject = null;
		}
		//\alper dökümanda where bilgisi var ise oraya ata
		else if(document.forms[0]._ctl0_VadeliHesapOzetim_txtSubeKodu)
		{
			PayerBranchObject = document.forms[0]._ctl0_VadeliHesapOzetim_txtSubeKodu;
		}
		else if(document.forms[0]._ctl0_ERandevuYeriSec_txtSube)
		{
			PayerBranchObject = document.forms[0]._ctl0_ERandevuYeriSec_txtSube;
		}
		
		if (PayerBranchObject)
		{
			// Borçlu Þubenin deðeri dolu deðilse gelen deðeri borçlu þubeye koy
			if (PayerBranchObject.value == "")
			{
				PayerBranchObject.value = o.y;
			}
			else
			{
				// Borçlu Þubenin deðeri dolu ise ve sayfada alacaklý þube varsa 
				if (PayeeBranchObject)
				{
					// Gelen deðeri alacaklý þubeye koy 
					PayeeBranchObject.value = o.y;
				}
			}	
		}
 		// Sayfada borçlu þube yoksa ve alacaklý þube varsa deðeri alacaklý þubeye koy
		else if (PayeeBranchObject)
		{
			PayeeBranchObject.value = o.y;
		}

		// Sayfada senet subesi varsa deðeri senet þubeye koy (10 tane)
		else if (document.forms[0].SB01)
		{
		for (i=1;i<11;i++)
		{
			if (i<10)
			index = '0' + i;
			else
			index = i;
			if (eval("document.forms[0].SB"+index))
			{
			if (eval("document.forms[0].SB"+index+".value == ''"))
			{
			eval("document.forms[0].SB"+index+".value = o.y");
			i = 11;
			}
			}
		}
		}
		
    }
//alper diðer bankalarda dökümanda where bilgisi var ise oraya ata
    else if (document.forms[0].whereBank && document.forms[0].whereBranch)
    {
	var BankObject = eval("document.forms[0]." + document.forms[0].whereBank.value);
	var BranchObject = eval("document.forms[0]." + document.forms[0].whereBranch.value);
	BankObject.value = o.x;
	BranchObject.value = o.y;
    }
//\alper diðer bankalarda dökümanda where bilgisi var ise oraya ata
    // Diðer Bankalar Seçilmiþ ise hem banka kodunu hem þube kodunu yaz
    else if (document.forms[0].weban && document.forms[0].wesub)
    {
		document.forms[0].weban.value = o.x;
		document.forms[0].wesub.value = o.y;
    }
    else if (document.forms[0].BB01 && document.forms[0].SB01)  
    {
	   for (i=1;i<11;i++)
	   {
	      if (i<10)
		index = '0' + i;
	      else
		index = i;
	      if (eval("document.forms[0].BB"+index) && eval("document.forms[0].SB"+index))
	      {
		if (eval("document.forms[0].BB"+index+".value == ''"))
		{
		   eval("document.forms[0].BB"+index+".value = o.x");
		   i = 11;
		}
		if (eval("document.forms[0].SB"+index+".value == ''"))
		{
		   eval("document.forms[0].SB"+index+".value = o.y");
		   i = 11;
		}
	      }
	   }	
    }
   else if(document.forms[0]._ctl0_weban && document.forms[0]._ctl0_wesub)
   {
   	document.forms[0]._ctl0_weban.value = o.x;
	document.forms[0]._ctl0_wesub.value = o.y;
   }
   if(document.forms[0]._ctl0__ctl0_YatirimHesabiOdemeTipi_rdbtnANSTip_0)
   {
		document.forms[0].ANSFl.value = o.x;
   }
}

function DevamMi()                                 
{                                                  
  var wt=document.forms[0].whesap1;                    
                                                   
  if (wt.options[wt.selectedIndex].value >= 800000)
  {                                                
     TutarGeriAl();                                
     if (SetValue())                               
        document.forms[0].submit();                    
  }                                                
}                                                  
function GetTimeinMSeconds()
{
	d = new Date();
	return d.getTime(); 
}


/*	Girilen deðer minPayment'tan küçükse veya maxPayment'tan büyükse hata verir.TLType TL veya TL ayrýmý içindir	*/
function checkLiberoPayment(TLType)
{
	var minPayment;					/*	izin verilen en düþük limit 	*/
	var maxPayment;					/*	izin verilen en yüksek limit 	*/
	var minPaymentGoster;			/*	izin verilen en düþük limitin ekranda görünüþ biçimi	*/	
	var maxPaymentGoster;			/*	izin verilen en yüksek limitin ekranda görünüþ biçimi	*/
	var kurus = 00;					/*	Kurus alaný	*/

	var paymentCommas = document.forms[0].tutar.value;		
	var payment = ReplaceCommas(paymentCommas);					/*	tutar alanýndaki virgülleri at	*/

	//if(TLType == 'TL')			/*	TL ise	*/
	//{
	//	minPayment = 1000000;									
	//	maxPayment = 150000000000;							
	//	minPaymentGoster = "1,000,000";
	//	maxPaymentGoster = "150,000,000,000";
	//}
	//else						/*	TL ise	*/
	//{
		minPayment = 100;									
		maxPayment = 15000000;							
		minPaymentGoster = "1";
		maxPaymentGoster = "150,000";
		kurus = document.forms[0].kurus.value;	
		if(kurus.length == 0)		/*	kurus alaný boþ ise	*/
		{
			kurus = "00";			/*	00 þeklinde doldur	*/
		}
		if(kurus.length == 1)		/*	kuruþ alaný tek haneli ise	*/
		{
			kurus = kurus + 0;		/*	iki haneye geniþlet	*/
		}
		payment = payment + kurus;	/*	kontrol için tutar ve kuruþu birleþtir	*/
	//}
	if(payment < minPayment)									/*	Ýzin verilenden küçük bir deðerse	*/
	{
		alert("Lütfen " + minPaymentGoster + " " + TLType + "'den büyük bir deðer giriniz.");
		document.forms[0].tutar.focus();	
		return false;											/*	Hata döndür	*/
	}			
	if(payment > maxPayment)									/*	Ýzin verilenden büyük bir deðerse	*/
	{
		alert("Lütfen " + maxPaymentGoster + " " + TLType + "'den küçük bir deðer giriniz.");					
		document.forms[0].tutar.focus();		
		return false;											/*	Hata döndür	*/
	}	
	return true;												/*	Herhangi bir sorun yok	*/
}

/*	Tutar alanýný kontrol eder,izin verilen bir tutarsa TutarGeriAl() fonksiyonunu çaðýrýr	*/
function LiberoSend(TLType)
{
	if(document.forms[0].libno.value == "")							/*	Üye Numarasý alanýný kontrol et	*/
	{
		alert("Lütfen üye numaranýzý giriniz");
		return false;
	}
	
	if(checkLiberoPayment(TLType))								/*	Tutar alanýný kontrol et */
	{	
		return 	TutarGeriAl();									/*	izin verilen aralýkta ise TutarGeriAl'ý çaðýr	*/
	}
	else
	{
		return false;											/*	Deðilse hata ver	*/
	}
}	

/*	Girilen stringteki virgülleri atar	*/
function ReplaceCommas(inStr)													
{
	var retStr = inStr;
	var i;
	for(i=3;i<retStr.length;i+=3)									/*	3 sýfýrdan sonra virgül konulduðu için döngü kur	*/
	{
		retStr = retStr.replace(",","");							/*	Virgülü at	*/
	}	
	return retStr;													/*	Temizlenmiþ stringi yolla	*/
}

//------------------------------------------------------------
function isObjNumeric(obj)
{
 val = obj.value;
 if (isNaN(obj.value)) //number deðil demekki                      
  {
	//alert ("my tutval is Nan bkz:"+ntutval); 
	obj.focus(); 
	alert("Bu alana numerik bir deðer giriniz.");
	return false;
  }
return true;
}
//**************************************************************************************************************
function process_SOS(selection,iIndex) 
{  
	var islad;  
	islad = selection.name;  
	switch(islad)  
	{ 
		case eval("'wisl"+iIndex+"'") : 
		case eval("'wisld"+iIndex+"'") : 
		case eval("'wisle"+iIndex+"'") : 
			eval("process_choice(selection,document.forms[0].whes"+iIndex+","+iIndex+");");
			eval("process_check(document.forms[0].wkiy"+iIndex+",document.forms[0].wytl"+iIndex+",document.forms[0].wkrs"+iIndex+",islad);");	
			break; 
		case eval("'whes"+iIndex+"'") : 
			eval("process_choice(selection,document.forms[0].wmu"+iIndex+","+iIndex+");process_choice(selection,document.forms[0].wsb"+iIndex+","+iIndex+");"); 
			break;  
	} 
} 

function process_choice(selection,textfield,jIndex) 
{ 
	endeks = selection.selectedIndex; 
	endeks_len = selection.length - 1; 
	deger = selection.value; 
	 if ((endeks == endeks_len) && (deger == 99||deger == "E"||deger == "D"))
	 { 
	 	textfield.disabled=false; 
		textfield.focus(); 
	 } 
	 else if(deger == "S"||"I") 
	 { 
		textfield.selectedIndex=0; 
		textfield.disabled=true;
		eval("document.forms[0].wsb"+jIndex+".value=0;document.forms[0].wmu"+jIndex+".value=0;");
		eval("document.forms[0].wsb"+jIndex+".disabled=true;document.forms[0].wmu"+jIndex+".disabled=true;");
	} 
	else 
	{ 
		textfield.disabled=true; 
		textfield.value="" ; 
	} 
}
function process_check(cfield,tfield1,tfield2,islemad) 
{       

	ival= document.forms[0].web.value;                 
	jval= document.forms[0].wec.value;                 
	sval=eval("document.forms[0]."+islemad+".value"); 
	if ((ival == 1) &&((sval=="D")||(sval=="E")))
	{                                
		cfield.disabled=false;                         
	}                                              
	else 
	{                                         
		cfield.disabled=true;                          
		cfield.selectedIndex=0;                        
	}                                              
	if ((jval == 1)&&((sval=="D")||(sval=="E")))
	{                                
		tfield1.disabled=false;                        
		tfield2.disabled=false;                        
	}                                              
	else 
	{                                         
		tfield1.disabled=true;                         
		tfield2.disabled=true;                         
//		tfield1.value=0 ;                             
//		tfield2.value=0 ;                             
	}
} 

function process_submit(iIndex) 
{ 
	var durum = true;	
	for (var i=iIndex; i > 2; i--) 
	{ 
		ival= eval("document.forms[0].whes"+i+".value"); 
		for (var j=iIndex-1; j > 1; j--) 
		{ 
			jval= eval("document.forms[0].whes"+j+".value"); 
			if ((document.forms[0].trkd.value=="SP001") && (ival !="01" && jval =="01") )
			{  
				alert("Sayýn Müþterimiz; Lütfen Hesap Ekleme Ýþlemlerinizi Sýrasýyla Yapýnýz."); 
				durum = false; 
				return false;
			} 
		} 
	} 
	if (durum) 
	{ 
		for (var l=iIndex; l > 1; l--) 
		{ 
			xval= eval("document.forms[0].wsb"+l+".value"); 
			yval= eval("document.forms[0].wmu"+l+".value"); 
			zval= eval("document.forms[0].whes"+l+".value"); 
			if (zval =="99" && xval =='') 
			{
				alert("Sayýn Müþterimiz; Lütfen Ýþlem Yapýlmasýný Ýstediðiniz Hesabýnýzý Yazýnýz."); 
				durum = false; return false;
			}
		} 

		if (durum) 
		{
			window.open('/secure/txpopup_files/otm_soz.html ','pwdhlp','toolbar=no,location=no,directories=no,   status=yes,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=550,height=700,top=0,left=0');
		}
	}
} 

function process_submit_popup(iIndex) 
{ 
	window.opener.document.forms[0].wkiy1.disabled=false; 
	window.opener.document.forms[0].wytl1.disabled=false; 
	window.opener.document.forms[0].wkrs1.disabled=false; 
	for (var k=2; k <= iIndex; k++) 
	{ 
		eval("window.opener.document.forms[0].whes"+k+".disabled=false; window.opener.document.forms[0].wsb"+k+".disabled=false; window.opener.document.forms[0].wmu"+k+".disabled=false; window.opener.document.forms[0].wkiy"+k+".disabled=false; window.opener.document.forms[0].wytl"+k+".disabled=false; window.opener.document.forms[0].wkrs"+k+".disabled=false; "); 
		eval("if (window.opener.document.forms[0].wsb"+k+".value == ''){window.opener.document.forms[0].wsb"+k+".value=0;}"); 
		eval("if (window.opener.document.forms[0].wmu"+k+".value == ''){window.opener.document.forms[0].wmu"+k+".value=0;}"); 
		eval("if (window.opener.document.forms[0].wytl"+k+".value == ''){window.opener.document.forms[0].wytl"+k+".value=0;}"); 
	} 
	window.close();
	window.opener.document.forms[0].submit();
} 


function process_submit_spd00(iIndex) 
{ 
	document.forms[0].wkiy1.disabled=false; 
	document.forms[0].wytl1.disabled=false; 
	document.forms[0].wkrs1.disabled=false; 
	for (var k=2; k <= iIndex; k++) 
	{ 
		eval("document.forms[0].whes"+k+".disabled=false; document.forms[0].wsb"+k+".disabled=false; document.forms[0].wmu"+k+".disabled=false; document.forms[0].wkiy"+k+".disabled=false; document.forms[0].wytl"+k+".disabled=false; document.forms[0].wkrs"+k+".disabled=false; "); 
		eval("if (document.forms[0].wsb"+k+".value == ''){document.forms[0].wsb"+k+".value=0;}"); 
		eval("if (document.forms[0].wmu"+k+".value == ''){document.forms[0].wmu"+k+".value=0;}"); 
		eval("if (document.forms[0].wytl"+k+".value == ''){document.forms[0].wytl"+k+".value=0;}"); 
	} 
} 
//**************************************************************************************************************
function  ControlAdvisor()
{
	var IsChecked = document.forms[0].wtavs.checked; 
	if(IsChecked)
	{
		document.forms[0].adsoy.disabled = false;
		document.forms[0].wf[0].disabled = false;
		document.forms[0].wf[1].disabled = false;
		ControlAdvisorNo();
	}
	else
	{
		document.forms[0].adsoy.value = "";
		document.forms[0].inmus.value = "";
		document.forms[0].csube.value = "";
		document.forms[0].chesn.value = "";
	
		document.forms[0].adsoy.disabled = true;
		document.forms[0].wf[0].disabled = true;
		document.forms[0].wf[1].disabled = true;
		document.forms[0].inmus.disabled = true;
		document.forms[0].csube.disabled = true;
		document.forms[0].chesn.disabled = true;
	}
}
//**************************************************************************************************************
function ControlAdvisorNo()
{
	document.forms[0].inmus.disabled = true;
	document.forms[0].csube.disabled = true;
	document.forms[0].chesn.disabled = true;
	
	var RadioVal;
	for(i = 0; i < 2; i++)
	{
		if(eval("document.forms[0].wf[" + i + "].checked"))
		{
			RadioVal = i;
			break;
		}
	}
	
	switch(RadioVal)
	{
		case 0:
			document.forms[0].inmus.disabled = false;
			document.forms[0].csube.value	 = "";
			document.forms[0].chesn.value	 = "";
			break;
		case 1:
			document.forms[0].csube.disabled = false;
			document.forms[0].chesn.disabled = false;
			document.forms[0].inmus.value	 = "";
			break;
	}
} 
//**************************************************************************************************************
function ReleaseAdvisorInputs()
{

	var IsChecked = document.forms[0].wtavs.checked; 
	if(!IsChecked)
	{
		document.forms[0].adsoy.disabled = false;
		document.forms[0].wf[0].disabled = true;
		document.forms[0].wf[1].disabled = true;
		document.forms[0].inmus.disabled = false;
		document.forms[0].csube.disabled = false;
		document.forms[0].chesn.disabled = false;
	}
}
//**************************************************************************************************************
function KurumAciklamaGoster()
{
	var KurumAciklamasi = "";
	var i=0;
	
	if ( document && 
	     document.frm1 && 
	     document.frm1.WSCL1 && 
		(KurumKodlari != null) &&
		(KurumAciklamalari != null))
	{
		
		for ( i = 0; i < KurumAciklamalari.length; i++ )
		{
			if (KurumKodlari[i] == document.frm1.WSCL1.value)
			{
				KurumAciklamasi = KurumAciklamalari[i];
				break;
			}
		}		
	}
	
	
    if (KurumAciklamasi.length > 0)
    {
        KurumAciklamasi = "<table><tr><td valign=top><strong>Açýklama&nbsp;: </strong></td><td>" + KurumAciklamasi + "</td></tr></table>";
    }    
	document.getElementById("divKurumAciklamasi").innerHTML = KurumAciklamasi;
	
}
//**************************************************************************************************************
//**************************************************************************************************************
function EnableorDisable( obje, hedefobje1, hedefobje2, hedefobje3, hedefobje4, hedefobje5, hedefobje6, hedefobje7)   {                                                    
 
   if (obje.selectedIndex==1){    
	hedefobje1.disabled=true; 
	hedefobje2.disabled=true; 
	hedefobje3.disabled=true; 
	hedefobje4.disabled=true; 
	hedefobje5.disabled=true; 
	hedefobje6.disabled=true; 
	hedefobje7.disabled=true; 
	hedefobje1.selectedIndex=0; 
	hedefobje2.selectedIndex=0; 
	hedefobje3.selectedIndex=0; 
	hedefobje4.selectedIndex=0; 
	hedefobje5.selectedIndex=0; 
	hedefobje6.selectedIndex=0; 
	hedefobje7.selectedIndex=0; 
}  
   else  {                                                    

	hedefobje7.disabled=false;

 }                                              
}     
//**************************************************************************************************************                                            
function EnableorDisable2( obje, hedefobje1, hedefobje2, hedefobje3, hedefobje4, hedefobje5, hedefobje6 )   {                                                    
 
   if (obje.selectedIndex==1 || obje.selectedIndex== -1) {    
	hedefobje1.disabled=false;
	hedefobje2.disabled=false;
	hedefobje3.disabled=false;
	hedefobje4.disabled=false;
	hedefobje5.disabled=false;
	hedefobje6.disabled=false;
   }  
   else  {                                                    

	hedefobje1.disabled=true; 
	hedefobje2.disabled=true; 
	hedefobje3.disabled=true; 
	hedefobje4.disabled=true; 
	hedefobje5.disabled=true; 
	hedefobje6.disabled=true; 
	hedefobje1.selectedIndex=0; 
	hedefobje2.selectedIndex=0; 
	hedefobje3.selectedIndex=0; 
	hedefobje4.selectedIndex=0; 
	hedefobje5.selectedIndex=0; 
	hedefobje6.selectedIndex=0; 
   }                                              
}                     


//**************************************************************************************************************
function EnableorDisableTerm()               
{                                        
   var wt=document.frm1.wtrh;            
                                         
   if (wt.selectedIndex==1)              
   {                                     
      document.frm1.wyyil.disabled=false;
   }                                     
   else                                  
   {                                     
      document.frm1.wyyil.disabled=true; 
   }                                     
}                                        


//**************************************************************************************************************

var ComboValues  = VeriDoldur();

function VeriDoldur()
{
  var mar = new Array();

  mar=new Array();

  mar[0]=new Object();
  mar[0].adi="Vergi Hareketleri";
  mar[0].value="1";

  mar[0].child=new Array();
  mar[0].child[0]=new Object();
  mar[0].child[0].adi="Tüm Pay.Snt/Varant/Hisse Snt Y.Fon Ýþlemlerim";
  mar[0].child[0].value="1";
  mar[0].child[1]=new Object();
  mar[0].child[1].adi="HB DT/varant alým-satým iþlemlerim";
  mar[0].child[1].value="2";
  mar[0].child[2]=new Object();
  mar[0].child[2].adi="HB DT/varant faiz gelirlerim";
  mar[0].child[2].value="3";
  mar[0].child[3]=new Object();
  mar[0].child[3].adi="Belli bir pay senedine ait iþlemlerim";
  mar[0].child[3].value="4";
  mar[0].child[4]=new Object();
  mar[0].child[4].adi="Tüm yatýrým fonu/borsa yatýrým fonu iþlemlerim";
  mar[0].child[4].value="6";

  mar[1]=new Object();
  mar[1].adi="Maliyet Tablosu";
  mar[1].value="2";

  mar[1].child=new Array();
  mar[1].child[0]=new Object();
  mar[1].child[0].adi="Tüm Pay.Snt/Varant/Hisse Snt Y.Fon Ýþlemlerim";
  mar[1].child[0].value="1";
  mar[1].child[1]=new Object();
  mar[1].child[1].adi="HB DT/varant iþlemlerim";
  mar[1].child[1].value="2";
  mar[1].child[2]=new Object();
  mar[1].child[2].adi="Belli bir pay senedine ait iþlemlerim";
  mar[1].child[2].value="4";
  mar[1].child[3]=new Object();
  mar[1].child[3].adi="Tüm yatýrým fonu/borsa yatýrým fonu iþlemlerim";
  mar[1].child[3].value="6";

  mar[2]=new Object();
  mar[2].adi="Virman Hareketleri";
  mar[2].value="3";

  mar[2].child=new Array();
  mar[2].child[0]=new Object();
  mar[2].child[0].adi="Tüm Pay.Snt/Varant/Hisse Snt Y.Fon Ýþlemlerim";
  mar[2].child[0].value="1";
  mar[2].child[1]=new Object();
  mar[2].child[1].adi="HB DT/varant iþlemlerim";
  mar[2].child[1].value="2";
  mar[2].child[2]=new Object();
  mar[2].child[2].adi="Belli bir pay senedine ait iþlemlerim";
  mar[2].child[2].value="4";
  mar[2].child[3]=new Object();
  mar[2].child[3].adi="Tüm yatýrým fonu/borsa yatýrým fonu iþlemlerim";
  mar[2].child[3].value="6";

  return mar;

}

//**************************************************************************************************************
function  FillParentChildCombos (frmobj, frmopt1, frmopt2, ComboValues)
{

    var i;

	frmobj[frmopt2].length=0;

		for (i=0; i<ComboValues[frmobj[frmopt1].selectedIndex].child.length; i++)
		{
			frmobj[frmopt2].length++;
			frmobj[frmopt2].options[frmobj[frmopt2].length-1].value=ComboValues[frmobj[frmopt1].selectedIndex].child[i].value;
			frmobj[frmopt2].options[frmobj[frmopt2].length-1].text=ComboValues[frmobj[frmopt1].selectedIndex].child[i].adi;
		}

}

//**************************************************************************************************************
function FillCombo(frmobj, frmopt1, ComboValues)
{
	frmobj[frmopt1].length = 0;
		for (i=0; i<ComboValues.length; i++)
		{
			frmobj[frmopt1].length++;
			frmobj[frmopt1].options[i].value=ComboValues[i].value;
			frmobj[frmopt1].options[i].text=ComboValues[i].adi;
		}	

}
//**************************************************************************************************************


function KabulMu()                         
{                                          
   var wt=document.frm1.wkarar;
   if (wt.selectedIndex == 1)         
   { 
      document.frm1.wsub.disabled=false;
   } 
   else 
   {                                    
      document.frm1.wsub.disabled=true;
   }
}                                

function ClearText(ButtonType)
{
	if(ButtonType == "Borclu")
	{
		
		document.forms[0]._ctl0_HesabaHavale_txtBorcluHesapSubeKodu.value = "";
	
	}
	if(ButtonType == "Alacakli")
	{
		if(document.forms[0]._ctl0__ctl1_TanimsizHesabaHavaleTab_txtAlacakliHesapSubeKodu)
			document.forms[0]._ctl0__ctl1_TanimsizHesabaHavaleTab_txtAlacakliHesapSubeKodu.value = "";
		if(document.forms[0]._ctl0_HesabaHavale_txtAlacakliHesapSubeKodu)
			document.forms[0]._ctl0_HesabaHavale_txtAlacakliHesapSubeKodu.value="";

	}
	if(ButtonType == "BorcluYTL")
	{
		
		document.forms[0]._ctl0_DChrysler_txtBorcluHesapYTLSubeKodu.value = "";
	
	}
	if(ButtonType == "BorcluEUR")
	{
		document.forms[0]._ctl0_DChrysler_txtBorcluHesapEURSubeKodu.value = "";
	}
	
}

//**************************************************************************************************************

function CheckWHesOp() 
{                              
	if(document.frm1.whesop.value == 1) 
	{       
		document.frm1.whess.disabled = false;     
		document.frm1.whess.options[0].selected = true;           
		document.frm1.wtem.options[0].selected = true;        
		document.frm1.wdthop.options[0].selected = true;      
		document.frm1.wdthess.disabled = true ;               
		document.frm1.wdthess.options[0].selected = true;
		document.frm1.wythess.disabled = true ;               
		document.frm1.wythess.options[0].selected = true;     
	}     
	else 
	{                                                
		document.frm1.whess.disabled = true;                 
		document.frm1.whess.options[0].selected = true;
	} 
}

//**************************************************************************************************************

function CheckWDthOp() 
{
	if(document.frm1.wdthop.value == 1) 
	{
		document.frm1.wdthess.disabled = false; 
		document.frm1.wtem.options[0].selected = true; 
		document.frm1.whess.disabled = false; 
		document.frm1.wythess.disabled = true; 
		document.frm1.wythess.options[0].selected = true; 
		document.frm1.wdthess.options[0].selected = true; 
	}
	else 
	{
		document.frm1.wdthess.disabled = true; 
		document.frm1.wdthess.options[0].selected = true; 
	} 
}

//---------------------------------------------------------------------

function CheckWYthOp() 
{                            
	if(document.frm1.wtem.value == 1) 
	{                 
		document.frm1.wdthess.disabled = true;              
		document.frm1.wdthess.options[0].selected = true;   
		document.frm1.wdthop.options[0].selected = true;    
		document.frm1.whess.disabled = true;                
		document.frm1.whess.options[0].selected = true;     
		document.frm1.wythess.disabled = false ;            
		document.frm1.wythess.options[0].selected = true; 
	} 
	else 
	{                                              
		document.frm1.whess.disabled = false;               
		document.frm1.wythess.disabled = true;              
		document.frm1.wythess.options[0].selected = true; 
	} 
}

//--------------------------------------------------------------------

function CheckWYthOpDthYok() 
{                      
	if(document.frm1.wtem.value == 1) 
	{                 
		document.frm1.whess.disabled = true;                
		document.frm1.whess.options[0].selected = true;     
		document.frm1.wythess.disabled = false ;            
		document.frm1.wythess.options[0].selected = true; 
	} 
	else 
	{                                              
		document.frm1.whess.disabled = false;               
		document.frm1.wythess.disabled = true;              
		document.frm1.wythess.options[0].selected = true; 
	} 
}

//--------------------------------------------------------------------

function DesaKontrol()                       
{                                                     
	if(document.frm1.wdthop.value == 1 && document.frm1.whess.selectedIndex == 0)        
	{                                                      
		alert("Döviz teminatý kullanýlmasý durumunda mutlaka yatýrým hesabý seçilmelidir.");
                return(false);                                          
	}                                                      
	if(document.frm1.wdthop.value == 1 && document.frm1.wdthess.selectedIndex == 0)
	{                                                      
		alert("Döviz teminatý kullanýlmasý durumunda mutlaka döviz hesabý seçilmelidir.");
		return(false);                                          
	}                                                      
	if(document.frm1.wtem.value == 1 && document.frm1.wythess.selectedIndex == 0)        
	{                                                      
		alert("Kýymet teminatý kullanýlmasý durumunda mutlaka teminat hesabý seçilmelidir.");
		return(false);                                          
	}                                                      
	document.frm1.wdthess.disabled = false;                
	document.frm1.whess.disabled = false;                  
	document.frm1.wythess.disabled = false;                
}    

//--------------------------------------------------------------------                                                                
function KontrolDthYok()                               
{                                                      
	if(document.frm1.wtem.value == 1 && document.frm1.wythess.selectedIndex == 0)
	{                                                      
		alert("Kýymet teminatý kullanýlmasý durumunda mutlaka teminat hesabý seçilmelidir.");        
		return(false);                                         
	}                          
	document.frm1.whess.disabled = false;
	document.frm1.wythess.disabled = false;                
} 
//**************************************************************************************************************
//*****************************Tutar combolarý içinde geçerli bir deðer seçilmiþ mi diye bakar******************
//**************************************************************************************************************
function Ltf_Kontrol()
{
	if(document.forms[0].whesap1 != null && document.forms[0].whesap1.value == "0")
	{
		alert("lütfen bir hesap seçiniz.");
		document.forms[0].whesap1.focus();
		return false;
	}
	if(document.forms[0].whesap2 != null && document.forms[0].whesap2.value == "0")
	{
		if (document.forms[0].asube && document.forms[0].whhes)
		{
			if (document.forms[0].asube.value == "" && document.forms[0].whhes.value == "")
			{
				alert("lütfen bir hesap seçiniz.");
				document.forms[0].whesap2.focus();
				return false;
			}
		}
		else if (document.forms[0].weban && document.forms[0].wesub)
		{
			if (document.forms[0].weban.value == "" && document.forms[0].wesub.value == "")
			{
				alert("lütfen bir hesap seçiniz.");
				document.forms[0].whesap2.focus();
				return false;
			}
		}
		else
		{
			alert("lütfen bir hesap seçiniz.");
			document.forms[0].whesap2.focus();
			return false;
		}
	}
	var EkHesapRadios = document.getElementsByName("wkmh");
	if (EkHesapRadios.length > 0)
	{
		var i = 0;
		var EkHesap_Checked = false;
		for (i = 0; i < EkHesapRadios.length; i++)
		{
			if (EkHesapRadios[i].checked)
			{
				EkHesap_Checked = true;
				break;
			}
		}
		if (!EkHesap_Checked)
		{
			alert("Lütfen ek hesap kullanýmýný seçiniz.");
			return false;
		}
	}
	
	if(document.forms[0].trkd && document.forms[0].trkd.value == "AI001")
	{
		
		if(document.forms[0].asube && document.forms[0].asube.value.length == 0)
		{
			alert("Lütfen alýcýnýn havaleyi teslim alacaðý þubemizin kodunu giriniz.");
			return false;
		}
		if(document.forms[0].aisim && document.forms[0].aisim.value.length == 0)
		{
			alert("Lütfen havale alýcýsýna ait bilgileri giriniz.");
			return false;
		}
		if (document.forms[0].tutar.value < 1)
		{
			alert("Lütfen aktarmak istediðiniz tutarý giriniz.");
			return false;
		}
		if(document.forms[0].ack && document.forms[0].ack.value.length == 0)
		{
			alert("Lütfen Para AKTARILAN kiþinin ev telefonunu veya ev adresini giriniz.");
			return false;
		}
		
	}
	
	if(document.forms[0].trkd &&document.forms[0].trkd.value == "ID001")
	{
		if(document.forms[0].asube && document.forms[0].asube.value.length == 0)
		{
			alert("Lütfen alýcýnýn havaleyi teslim alacaðý þubemizin kodunu giriniz.");
			return false;
		}
		if(document.forms[0].aadi && document.forms[0].aadi.value.length == 0)
		{
			alert("Lütfen havale alýcýsýna ait bilgileri giriniz.");
			return false;
		}
		if(document.forms[0].asoyad && document.forms[0].asoyad.value.length == 0)
		{
			alert("Lütfen havale alýcýsýna ait bilgileri giriniz.");
			return false;
		}
		if(document.forms[0].aadres && document.forms[0].aadres.value.length == 0)
		{
			alert("Lütfen havale alýcýsýna ait bilgileri giriniz.");
			return false;
		}
		if(document.forms[0].asehir && document.forms[0].asehir.value.length == 0)
		{
			alert("Lütfen havale alýcýsýna ait bilgileri giriniz.");
			return false;
		}
		if(document.forms[0].atl && document.forms[0].atl.value.length != 10)
		{
			if(document.forms[0].atl.value.length == 0)
			{
				alert("Lütfen havale alýcýsýna ait bilgileri giriniz.");
			}
			else
			{
				alert("Lütfen telefon numarasýný 10 hane olarak giriniz.");
			}
			return false;
		}
		if (document.forms[0].tutar.value < 1)
		{
			alert("Lütfen aktarmak istediðiniz tutarý giriniz.");
			return false;
		}
	}
	
	return TutarGeriAl();
}

function EnableorDisableSekil()               
{                                        
   var wt=document.frm1.wskl;            
                                         
   if (wt.selectedIndex==1)              
   {                                     
      document.frm1.whesap1.disabled=true;
      document.frm1.wyh.disabled=false;
      document.frm1.wblks.disabled=false;
      document.frm1.wkmgun.selectedIndex=1;
      document.frm1.wkmgun.disabled=false;
      document.frm1.wkarar.disabled=true;
      document.frm1.wkarar.selectedIndex=0;
      document.frm1.wsub.disabled=false;
   }                                     
   else                                  
   {                                     
      document.frm1.whesap1.disabled=false;
      document.frm1.wyh.disabled=true;
      document.frm1.wblks.selectedIndex=0;
      document.frm1.wblks.disabled=true;
      document.frm1.wkmgun.selectedIndex=0;
      document.frm1.wkmgun.disabled=true;
      document.frm1.wkarar.disabled=false;
      document.frm1.wkarar.selectedIndex=1;
      document.frm1.wsub.disabled=false;
   }                                     
}  

function EnableorDisableSekil2()               
{                                        
   var wt=document.frm1.wskl;            
                                         
   if (wt.selectedIndex==1)              
   {                                     
      document.frm1.whesap1.disabled=true;
      document.frm1.wyh.disabled=false;
      document.frm1.wblks.selectedIndex=0;
      document.frm1.wblks.disabled=false;
      document.frm1.wkmgun.selectedIndex=1;
      document.frm1.wkmgun.disabled=false;
      document.frm1.wovrs.selectedIndex=0;
      document.frm1.wovrs.disabled=false;
      document.frm1.wkarar.disabled=true;
      document.frm1.wkarar.selectedIndex=0;
      document.frm1.wsub.disabled=false;

   }                                     
   else                                  
   {                                     
      document.frm1.whesap1.disabled=false;
      document.frm1.wyh.disabled=true;
      document.frm1.wblks.selectedIndex=1;
      document.frm1.wblks.disabled=true;
      document.frm1.wkmgun.selectedIndex=0;
      document.frm1.wkmgun.disabled=true;
      document.frm1.wovrs.selectedIndex=2;
      document.frm1.wovrs.disabled=true;
      document.frm1.wkarar.disabled=false;
      document.frm1.wkarar.selectedIndex=1;
      document.frm1.wsub.disabled=false;

   }                                     
}  

function TutarAlert()               
{                                        
   var wt=document.frm1.wadt;            
                                         
   if (wt.selectedIndex!=0 && document.frm1.wskl.selectedIndex==0)              
   {                                     
      alert("Kredi kartý seçmeniz halinde sadece tutar girebilirsiniz!");
      wt.selectedIndex=0;      
   }
} 

function HesapKesimAlert()               
{                                                                               
   if (document.frm1.wkmgun.selectedIndex==0 && document.frm1.wskl.selectedIndex==1)              
   {                                     
      alert("Hesap seçmeniz halinde geçerli bir talimat günü girmelisiniz!");
   }
}                                                            
//----------------------------------------------------------------------------------------------------------------------------------
var isNav4, isNav6, isIE4;
setBrowser();
//----------------------------------------------------------------------------------------------------------------------------------
function setBrowser()
{
	if (navigator.appVersion.charAt(0) == "4")
	{
		if (navigator.appName.indexOf("Explorer") >= 0)
		{
			isIE4 = true;
		}
		else
		{
			isNav4 = true;
		}
	}
	else if (navigator.appVersion.charAt(0) > "4")
	{
		isNav6 = true;
	}
}
                                                  
//----------------------------------------------------------------------------------------------------------------------------------
function setIdProperty( id, property, value )
{
	if (isNav6)
	{
		var styleObject = document.getElementById( id );
		if (styleObject != null)
		{
			styleObject = styleObject.style;
		        styleObject[ property ] = value;
		}
	}
	else if (isNav4)
	{
		document[id][property] = value;
	}
	else if (isIE4)
	{
		document.all[id].style[property] = value;
	}
}
//----------------------------------------------------------------------------------------------------------------------------------
function SetAggVis(FundCode, SpanName)
{
	var SelectedIndex;
	for(i = 0; i < document.forms[0].WN.length; i++)
	{
		if(document.forms[0].WN[i].checked)
		{
			SelectedIndex = document.forms[0].WN[i].value;
		}
	}
	if(SelectedIndex != null && SelectedIndex != "")
	{
		switch(SelectedIndex.substr(0,3))
		{
			case FundCode:
				setIdProperty(SpanName, "display", "inline");
				break;
			default:
				setIdProperty(SpanName, "display", "none");
		}
	}	
	return true;
}
//----------------------------------------------------------------------------------------------------------------------------------
function checkAgg(FundCode, AgreementCode)
{
	var SelectedIndex;
	for(i = 0; i < document.forms[0].WN.length; i++)
	{
		if(document.forms[0].WN[i].checked)
		{
			SelectedIndex = document.forms[0].WN[i].value;
		}
	}
	if(SelectedIndex != null && SelectedIndex != "")
	{
		if(document.forms[0].wagg.value == AgreementCode && SelectedIndex.substr(0,3) == FundCode && document.forms[0].chAgg.checked == false)
		{
			alert(Yatirim_821_Secilmemis);
			document.forms[0].chAgg.focus();
			return false;	
		}
	}
	document.forms[0].chAgg.checked = false;
	return true;
}
function BrokerUyarisiGoster()
{
	alert("Lütfen emri brokera okuyun.");
	return true;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function Kampanya()
{
  
    var wkflg=document.frm1.wkflg;
    var wkmp=document.frm1.wkmp;   

    if (wkflg[0].checked && wkmp.checked == false)
    {
        alert("Hediye Kumbara Fonu Kampanyasý’na katýlmak için önce kampanya taahhütname formunu onaylamanýz gerekmektedir.");
        document.frm1.wkmp.focus();
        return false;      
    }

    return SetValue();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function Kampanya_OnChange()
{
    var wkflg=document.frm1.wkflg;
    if (wkflg[1].checked)
    {
        document.frm1.wkmp.checked = false;
        document.frm1.wkmp.disabled = true;
    }
    else if (wkflg[0].checked)
    {
        document.frm1.wkmp.disabled = false;
    }
}

var CheckFields_dataAboneNo10HaneOlmali = "Lütfen abone numarasý alanýna 10 haneli bilgi giriniz.";

function CheckAboneNo()
{
     var AboneNo = document.forms[0].W1.value;
     
     if (AboneNo.length <10)

        {    
          alert(CheckFields_dataAboneNo10HaneOlmali);
          document.forms[0].W1.focus();
          return false;
        } 

}

function KumhesKontrol() 
{ 
   if (document.frm1.kumbhes.value <= 10000000000) 
   { 
      alert("Lütfen düzenli olarak Kumbara Fonu almak istediðiniz yatýrým hesap numarasýný 11 hane olarak eksiksiz giriniz "); 
      return false;
   }  else
      return true;
}

function TcknKontrol() {
    var tckn = document.forms[0]._ctl0_TxtNo.value;
    if (tckn == null || tckn.length == 0 || tckn.length != 11 || isNaN(tckn)) {
        //alert("Lütfen geçerli bir TCKN giriniz.");
		alert(invalidTckn);
        document.forms[0]._ctl0_TxtNo.focus();
        return false;
    }
}

