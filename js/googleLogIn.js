function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    console.log(profile.getName());
    console.log(profile.getEmail());
    console.log(profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
}
          
  
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You are about to sign out !");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}