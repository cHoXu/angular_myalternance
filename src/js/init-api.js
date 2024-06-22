
window.fbAsyncInit = function() {
  FB.init({
    appId      : '350313904833860',
    cookie     : true,
    xfbml      : true,
    version    : 'v20.0'
  });

  FB.AppEvents.logPageView();

};

  (function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/fr_FR/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.addEventListener('DOMContentLoaded', function() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
});

