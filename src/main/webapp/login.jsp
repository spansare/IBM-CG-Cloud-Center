
<!DOCTYPE html>
<html xml:lang="en">
<head>
	<title>
		Login
	</title>
	<meta http-equiv="Cache-Control" content="No-Cache" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

    <link href="http://fonts.googleapis.com/css?family=Raleway:400,200,100,300,500,600,700,800,900" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lato:400,100,300,300italic,700,900" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet" type="text/css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/fonts/fontawesome-webfont.woff" rel="stylesheet" type="text/css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf" rel="stylesheet" type="text/css">

    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/style.css">     

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
    
    <style>
		.login-screen {
			display: flex;
			flex-flow: row nowrap;
			flex: 1;
			height: 100% !important;
			align-content: stretch;
			align-items: stretch;
		}

		.login-welcome {
			display: inline-flex;
			flex-flow: column wrap;
			justify-content: center;
			align-content: flex-start;
			flex: 1 1 auto;
			max-width: 100%;
			padding: 3em;
		}
		.login-heading {
			font-size: 4.5vh;
		}
		.login-heading, .login-sub-heading {
			font-family: ssp-xtra-light, sans-serif;
			color: white;
			display: block;
		}

		.login-sub-heading {
			font-size: 3rvh;
		}

		.login {
			background: linear-gradient(to bottom, #253447 0%, #1a4463 60%, #134f75 100%);
			display: flex;
			flex: 1 1 34%;
			height: 100%;
			flex-flow: column nowrap;
			justify-content: space-between;
			align-content: flex-end;
		}

		.login-form {
			display: flex;
			flex-flow: row wrap;
			flex: 1 1 90%;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			width: 90%;
		}
		.login-stage {
			display: flex;
			flex-flow: column nowrap;
			flex: 1 1 66%;
			height: 100%;
			align-self: flex-start;
			align-items: flex-start;
			justify-content: center;
		}
		.login h2 {
			color: #fff;
		}
    
    </style>
    </head>
    <body>
		<nav class="navbar navbar-fixed-top">
            <div class="headerClass">
                <div class="tb_left pull-left">
                	<img class="topBarLogoImg" src="images/IBM_Bluemix_logo.png" />
				</div>
				<div class="tb_left pull-left">
					<h1 class="headerLogoText" style="margin-top:0px;">IBM Capgemini Cloud Center</h1>
				</div>
				<!-- <div class="tb_right pull-right">
					<button id="homeBtn" class="btn btn-primary headerBtnLogin">Home</button>
				</div> -->
            </div>
        </nav>
		<div class="login-screen">
			<div class="login-stage hidden-ph" style="height:92vh;">
				<div class="login-welcome" id="login-welcome-1" style="display:none;">
					<a href="https://bluemix.net" target="_blank">
						<span class="login-heading">Capgemini and IBM</span>
						<span class="login-sub-heading">your partners for a new generation of doing business: The Global Alliance between Capgemini and IBM in place since 2001 is focused on helping clients meet increasingly specific business needs</span>
					</a>

				</div>
				<div class="login-welcome" id="login-welcome-2" style="display:none;">
					<a href="https://bluemix.net" target="_blank">
						<span class="login-heading">Capgemini and IBM</span>
						<span class="login-sub-heading">Business insights and delivery expertise from Capgemini combine with leading edge IBM technology to create high value solutions, designed to foster innovation, growth and profitability.</span>
					</a>
				</div>
				<div class="login-welcome" id="login-welcome-3" style="display:none;">
					<a href="https://bluemix.net" target="_blank">
						<span class="login-heading">Capgemini and IBM</span>
						<span class="login-sub-heading">your partners for a new generation of doing business: The Global Alliance between Capgemini and IBM in place since 2001 is focused on helping clients meet increasingly specific business needs</span>
					</a>
				</div>
				<div class="login-welcome" id="login-welcome-4" style="display:none;">
					<a href="https://bluemix.net" target="_blank">
						<span class="login-heading">Capgemini and IBM</span>
						<span class="login-sub-heading">Business insights and delivery expertise from Capgemini combine with leading edge IBM technology to create high value solutions, designed to foster innovation, growth and profitability.</span>
					</a>
				</div>
				<div class="login-welcome" id="login-welcome-5" style="display:none;">
					<a href="https://bluemix.net" target="_blank">
						<span class="login-heading">Capgemini and IBM</span>
						<span class="login-sub-heading">your partners for a new generation of doing business: The Global Alliance between Capgemini and IBM in place since 2001 is focused on helping clients meet increasingly specific business needs</span>
					</a>
				</div>
				<div class="login-welcome" id="login-welcome-6" style="display:none;">
					<a href="https://bluemix.net" target="_blank">
						<span class="login-heading">Capgemini and IBM</span>
						<span class="login-sub-heading">Business insights and delivery expertise from Capgemini combine with leading edge IBM technology to create high value solutions, designed to foster innovation, growth and profitability.</span>
					</a>
				</div>
			</div>
			<div class="login" style="height:92vh;">
				<div class="login-form">
					<form method="post" action="loginServlet"  id="ctl00">
						<h2>Login</h2>
						<div class="bg-danger text-danger FailureCont">
						</div>
						<div class="form-group">
							<span id="BodyContent_LoginCtrl_UserNameRequired" title="Username is required." class="bg-danger text-danger block" style="visibility:hidden;">Username is required.</span>
							<div class="input-group login-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
								<input name="username" type="text" id="username" tabindex="1" class="form-control" placeholder="Username" autocomplete="off" data-validate="placeholder required" />
							</div>
						</div>
						<div class="form-group">
							<span id="BodyContent_LoginCtrl_PasswordRequired" title="Password is required." class="bg-danger text-danger block" style="visibility:hidden;">Password is required.</span>
							<div class="input-group login-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
								<input name="password" type="password" id="password" tabindex="2" class="form-control" placeholder="Password" autocomplete="off" data-validate="placeholder required" />
							</div>
						</div>
						<input type="submit" name="ctl00$BodyContent$LoginCtrl$LoginButton" value="Login" id="BodyContent_LoginCtrl_LoginButton" tabindex="3" class="btn btn-primary btn-block" />
						
						<input type="submit" name="ctl00$BodyContent$LoginCtrl$LoadingLoginButton" value="Login" id="BodyContent_LoginCtrl_LoadingLoginButton" class="btn btn-primary btn-block hidden" />
					</form>
				</div>
			</div>
		</div>
		<!-- FOOTER COPYRIGHT -->
        <div class="footer-bottom bottomClass" style="height:8vh;">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-7">
                        <ul class="flinks">
                            <li><a href="https://bluemix.net" target="_blank"><img class="logoImg" src="images/IBM_Bluemix_logo.png" /></a></li>
                            <li><a href="https://bluemix.net" target="_blank">Powered by IBM Bluemix</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


		<div id="large" class="hidden-md hidden-sm hidden-xs"></div>
		<div id="medium" class="hidden-lg hidden-sm hidden-xs"></div>
		<div id="small" class="hidden-lg hidden-md hidden-xs"></div>
		<div id="x-small" class="hidden-lg hidden-md hidden-sm"></div>

		<script type="text/javascript">
			var	lrg = $('#large').is(':visible'),
			med = $('#medium').is(':visible'),
			sml = $('#small').is(':visible'),
			xsm = $('#x-small').is(':visible');

			var messageCount = 6,
			transitionTime = 500,
			waitTime = 9000,
			randomMessage = random(messageCount, null);

			$("#login-welcome-" + randomMessage).show();
			window.setInterval(function () {
				$("#login-welcome-" + randomMessage).fadeOut(transitionTime, function () {
					randomMessage = random(messageCount, randomMessage);
					$("#login-welcome-" + randomMessage).fadeIn(transitionTime);
				});
				
			}, 2 * transitionTime + waitTime);
			
			if (lrg || med) {
				var imageCount = 3,
					randomImage = random(imageCount, null);
				imgPath = ('./images/blocks/' + randomImage + '.jpg');
				$('.login-stage').css({
					"background-image": "linear-gradient(to right, rgba(11, 79, 96, 1), rgba(68, 138, 154, 0.6)), url('" + imgPath + "')",
					"background-size": "contain, cover",
					"background-repeat": "no-repeat, no-repeat"
				});
		
			}
			if(sml || xsm) {
				$('.login-stage').css({
					"background-image": "linear-gradient(to right, rgba(11, 79, 96, 1), rgba(68, 138, 154, 0.6))",
					"background-size": "contain",
					"background-repeat": "no-repeat"
				});
			}
			   
			   function random(n, x) {
				   var randomNum = Math.round(Math.random() * (n - 1)) + 1;
				   if (randomNum == x) {
					   while (randomNum == x) {
						   randomNum = Math.round(Math.random() * (n - 1)) + 1;
					   }
				   }
				   return randomNum;
			   }
			   
		   $('#homeBtn').on("click", function () {
		    	window.location.href='index.html';
		    });
		</script>
    </body>
</html>