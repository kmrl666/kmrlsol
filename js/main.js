var nameV,passCode;
var link;
var timestamp;

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
                   document.getElementById('status').innerHTML += "You have not decided on your attendance";
                   document.getElementById('RSVPtag').innerHTML += "• Please RSVP by 13th March 2021<br>• Changes after the date will not be considered<br>• Non-Respondants will be considered as \"Not Attending\"<br>• Number of guests are limited to what is given<br>• Invitations are not transferable<br>• More details will be provided after 28th March 2021";
                }
            else if (snapshot.val().Enable != "Disabled" && snapshot.val().Attending == "Yes")
                {
                    document.getElementById('status').innerHTML += "You will be attending with " + (snapshot.val().Amount-1) + " other people, making a party of " + snapshot.val().Amount ;
                   document.getElementById('RSVPtag').innerHTML += "• Please RSVP by 13th March 2021<br>• RSVPs after it will not be considered<br>• Non-Respondants will be considered as \"Not Attending\"<br>• Number of guests are limited to what is given<br>• Invitations are not transferable<br>• More details will be provided after 28th March 2021";
                }
            else if (snapshot.val().Enable != "Disabled" && snapshot.val().Attending == "No")
                {
                    document.getElementById('status').innerHTML += "You will not be attending the wedding";
                   document.getElementById('RSVPtag').innerHTML += "• Please RSVP by 13th March 2021<br>• RSVPs after it will not be considered<br>• Non-Respondants will be considered as \"Not Attending\"<br>• Number of guests are limited to what is given<br>• Invitations are not transferable<br>• More details will be provided after 28th March 2021";
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

            console.log(snapshot.val().Side)
            noGuests(snapshot.val().Limit, snapshot.val().Amount );
            attend(snapshot.val().Attending);
            console.log(snapshot.val().AttendeeName);
            document.getElementById("idCheck").style.display='None';
            console.log(passCode);
            document.getElementById("mainBody").style.display='Block';
            document.getElementById('idNum').value = '';
            setTimeout(offOL(), 4000);

            document.getElementById("pets").classList.add("form-control-sm");

        }
    );}
        }
    );
}

function update()
{
	const timeElapsed = Date.now();
	timestamp= new Date(timeElapsed)
	console.log(timestamp.toUTCString())

    var updateAttend = document.getElementById("inlineFormCustomSelect2").value;
    var Guests = document.getElementById("inlineFormCustomSelect").value;
    console.log(updateAttend)
    console.log(Guests)

    dbAdd =firebase.database().ref(passCode).update({
        Attending: updateAttend,
        Amount: Guests,
        Updated: timestamp.toUTCString()
    })

    document.getElementById("mainBody").style.display='None';
    document.getElementById('guestss').innerHTML += Guests + " Guest(s)"
    document.getElementById("ThankYou").style.display='Flex';
}



function attend(b)
{   
    var ans = b;
    var selectAttend = document.getElementById("inlineFormCustomSelect2");

    if (!ans || ans == "No")
    {
        var option = document.createElement("option");
        option.value = "No";
        option.text = "No";
        selectAttend.appendChild(option); 

        var option = document.createElement("option");
        option.value = "Yes";
        option.text = "Yes";
        selectAttend.appendChild(option); 
    }
    else
    {
        var option = document.createElement("option");
        option.value = "Yes";
        option.text = "Yes";
        selectAttend.appendChild(option);

        var option = document.createElement("option");
        option.value = "No";
        option.text = "No";
        selectAttend.appendChild(option); 
    }

}
 

function noGuests(a,b)
{

    var values = [];
    
    if (!b)
         {
            values = [];
         }
    else
        {
            values = [b];
        }

    var i = 0;
    for (i = a; i > 0; i--)
    {
     if (i == b)
         {
        
         }
    else
        {
            values.push(i.toString())
        }
      
    }  

  var select = document.getElementById("inlineFormCustomSelect");
 
  for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val;
    select.appendChild(option);
  }

}

function others()
{
        var dbAdd =firebase.database().ref(document.getElementById('idNum').value)
    dbAdd.on
    ('value',function(snapshot)
        {
            document.getElementById('Name').innerHTML += snapshot.val().AttendeeName +"<p>Please RSVP before 10th March 2021</p>";
            console.log(snapshot.val().AttendeeName);
            document.getElementById("idCheck").style.display='None';
            console.log(document.getElementById('idNum').value)
            document.getElementById("mainBody").style.display='Block';
            document.getElementById('idNum').value = ''
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
