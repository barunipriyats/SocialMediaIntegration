console.log("Helo");
function statusChangeCallback(response) {
          console.log('statusChangeCallback');
          console.log(response);
          if (response.status === 'connected') {
              testAPI();
          } else {
              // The person is not logged into your app or we are unable to tell.
              //document.getElementById('status').innerHTML = 'Please log into this app.';
              document.getElementById('login-button').style.display = 'block';
              document.getElementById('logout-button').style.display = 'none';
            }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function logout() {
    FB.logout(function (response) {
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('login-button').style.display = '';
        document.location.reload();
    });
}

window.fbAsyncInit = function() {
                        FB.init({
                        appId      : '3744043092364414',
                        cookie     : true,  // enable cookies to allow the server to access the session
                        xfbml      : true,  // parse social plugins on this page
                        version    : 'v11.0' // use graph api version 2.8
                    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', 'GET', {
        fields: 'first_name,last_name,name,picture.width(100).height(100)'
    }, function(response) {
        console.log('Successful login for: ' + response.name);
         document.getElementById('login-button').style.display = 'none';
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('data').style.display = 'block';
        $("#image").attr('src', response.picture.data.url);
        $("#name").text(response.name);
        $("#first").text(response.first_name);
        $("#last").text(response.last_name);
    });
}
