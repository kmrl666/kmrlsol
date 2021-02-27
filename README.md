

<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Kamarul | Soleha Wedding RSVP</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
      <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
      <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
      <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
      <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
      <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
      <link rel="stylesheet" type="text/css" href="css/util.css">
      <link rel="stylesheet" type="text/css" href="css/main.css">
      <link rel="stylesheet" type="text/css" href="css/stuff.css">
   </head>
   <body oncontextmenu="return false">
   	<div id="overlay"><img src="images/loading.gif" width="100" height="100" style="position: absolute;top: 50%;left: 50%;font-size: 50px;color: white;transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);"></div>
      <div class="container-contact100" style="background-color:#394962">
      <div class="wrap-contact100">
         <center><img src="logo.png" width="300" height="300"></center>
         <br><span class="contact100-form-title" id="idCheck"><input class="input100" type="text" id="idNum" placeholder="Enter Your ID"><br><button class="contact100-form-btn" onclick="getDetails()"><span><i class="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>Check my RSVP</span></button></span>
         <div id='mainBody' style="display:none; " class="container-contact100">
            <span style="color:#B1A25F" id='Name' class="contact100-form-title"></span>
            <span style="color:#B1A25F" class="contact100-form-title">
               <p style="color:#B1A25F" id='status'></p>
            </span>
            <form id="formAF">
               <div class="form-row">
                  <div class="form-group col-md-6"> <label class="mr-sm-2" for="inlineFormCustomSelect2" style="color:#B1A25F">Are you attending?</label> <select class="custom-select mr-sm-2" id="inlineFormCustomSelect2"> </select> </div>
                  <div class="form-group col-md-6"> <label class="mr-sm-2" for="inlineFormCustomSelect" style="color:#B1A25F">Number of Attendee</label> <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"> </select> </div>
               </div>
            </form>
            <br>
            <center><p style="color:#B1A25F" id='RSVPtag'></p></center><br>
            <div id="sendbtn" class="container-contact100-form-btn"><button class="contact100-form-btn" onclick="update()"><span><i class="fa fa-check m-r-6" aria-hidden="true"></i>Send</span></button>
            	<img ID="inv" src="" width="800" height="873" id="invBox" style="display:none"><a id="dl" href="" target="_blank" <span ID="einv"><p href="assets/Kamarul-E-Inv.pdf" class="contact100-form-btn">Download E-Invite</p></span></a><br> </div>
         </div>
      </div>
      <div id='ThankYou' style='display:none' class="wrap-contact100">
         <span style="color:#B1A25F" class="contact100-form-title">
            Thank You for Updating.<br>
            <p style="color:#B1A25F">Come back to this page on 28th March 2021 for further details.</p>
            <br>
            <p style="color:#B1A25F"> This invitation is valid for only <span id="guestss"></span>
         </span>
      </div>
      <div class="modal fade" id="myModal" role="dialog">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button> 
                  <h4 class="modal-title">ID Not Found</h4>
               </div>
               <div class="modal-body">
                  <p>Please Try Again.</p>
               </div>
               <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div>
            </div>
         </div>
      </div>
      <script src="vendor/jquery/jquery-3.2.1.min.js"></script><script src="vendor/animsition/js/animsition.min.js"></script><script src="vendor/bootstrap/js/popper.js"></script><script src="vendor/bootstrap/js/bootstrap.min.js"></script><script src="vendor/select2/select2.min.js"></script><script src="vendor/daterangepicker/moment.min.js"></script><script src="vendor/daterangepicker/daterangepicker.js"></script><script src="vendor/countdowntime/countdowntime.js"></script><script src="js/main.js"></script><script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script><script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-database.js"></script><script>var firebaseConfig={apiKey:"AIzaSyB_4YuT2PqGxya7lbF8uKHivg9vAQAoVUE",authDomain:"wedding-list-62b6d.firebaseapp.com",databaseURL:"https://wedding-list-62b6d.firebaseio.com",projectId:"wedding-list-62b6d",storageBucket:"wedding-list-62b6d.appspot.com",messagingSenderId:"678009454752",appId:"1:678009454752:web:4bf2287b01ad4db9a389c5"};firebase.initializeApp(firebaseConfig);</script>
   </body>
</html>

