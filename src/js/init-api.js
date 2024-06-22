
  (window.fbAsyncInit = function() {
    FB.init({
      appId      : '350313904833860',
      cookie     : true,
      xfbml      : true,
      version    : 'v20.0'
    });

    FB.AppEvents.logPageView();

  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });


