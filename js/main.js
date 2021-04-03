function ready()
{
   document.getElementById('name').value = nameV

}




function getDetails()
{ 

	onOL();
    var dbAdd =firebase.database().ref(document.getElementById('idNum').value)
    passCode = document.getElementById('idNum').value
    dbAdd.on
    ('value',function(snapshot)
        {
            document.getElementById('idNum').value = ''
            if(!snapshot.exists()||(document.getElementById('idNum').value = null)||(document.getElementById('idNum').value = '')){$("#myModal").modal();
            setTimeout(offOL(), 4000);
        }
            else
            {dbAdd.on('value',function(snapshot)
        {
            document.getElementById('Name').innerHTML += snapshot.val().AttendeeName;

            if (snapshot.val().Enable == "Disabled")
            	{
				document.getElementById('status').innerHTML += "Apologies. <br> Reservation is now full. <br> Only 160 Pax on both side is permitted.<br> Try Again Next Time."; 
            	document.getElementById("formAF").style.display='none';
            	document.getElementById("sendbtn").style.display='none';
            	}

            else if (snapshot.val().Enable != "Disabled" && (snapshot.val().Attending == null || snapshot.val().Attending == ""))
                {
                   document.getElementById('status').innerHTML += "You are no longer invited as you did not RSVP'd in time.";
                }
            else if (snapshot.val().Enable != "Disabled" && snapshot.val().Attending == "Yes")
                {
                    document.getElementById('status').innerHTML += "This Invitation is valid only for " + (snapshot.val().Amount) + " Person(s) only";
                }
            else if (snapshot.val().Enable != "Disabled" && snapshot.val().Attending == "No")
                {
                    document.getElementById('status').innerHTML += "You will not be attending the wedding.";
                }
            else
	            {
	            	{$("#myModal").modal();}
	            }

            if (snapshot.val().Side == "Groom" && snapshot.val().Enable != "Disabled")
            	{
            		document.getElementById("inv").src="images/kmrlcrd.png";
            		document.getElementById("inv").style.display='inline';
            		document.getElementById("dl").href="assets/Kamarul-E-Inv.pdf";
            	}
            else if (snapshot.val().Side == "Bride" && snapshot.val().Enable != "Disabled")
            	{
            		document.getElementById("inv").src="images/solcrd.png";
            		document.getElementById("inv").style.display='inline';
            		document.getElementById("dl").href="assets/Soleha-E-Inv.pdf";
            	}

            console.log(snapshot.val().Side);
            document.getElementById("QRCode").src="https://api.qrserver.com/v1/create-qr-code/?data="+passCode+"&size=200x200&color=B1A25F&bgcolor=394962" 
            //noGuests(snapshot.val().Limit, snapshot.val().Amount );
            //attend(snapshot.val().Attending);
            console.log(snapshot.val().AttendeeName);
            document.getElementById("idCheck").style.display='None';
            console.log(passCode);
            document.getElementById("mainBody").style.display='Block';
            //document.getElementById('idNum').value = '';
            setTimeout(offOL(), 4000);
            document.getElementById("formAF").style.display='block';
            document.getElementById("pets").classList.add("form-control-sm");


        }
    );}
        }
    );
}



function onOL() {
  document.getElementById("overlay").style.display = "block";
}

function offOL() {
  document.getElementById("overlay").style.display = "none";
} 

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

    $(function qrGen() { 

        let finalURL = 
'https://chart.googleapis.com/chart?cht=qr&chl=' + 
          htmlEncode($('#content').val()) + 
          '&chs=160x160&chld=L|0' 
  
        // Replace the src of the image with 
        // the QR code image 
        $('.qr-code').attr('src', finalURL); 

    }); 
