var btnAuthInstagram = document.getElementById('btn-auth-instagram');

btnAuthInstagram.addEventListener("click", () => authToInstagram());
function authToInstagram() {
  // Get redirect url from chrome once authentication is successful
  var redirectUrl = chrome.identity.getRedirectURL();
  // This is a stub clientId
  var clientId = "abc";
  var authUrl = "https://instagram.com/oauth/authorize/?" +
      "client_id=" + clientId + "&" +
      "response_type=token&" +
      "redirect_uri=" + encodeURIComponent(redirectUrl);

  chrome.identity.launchWebAuthFlow({url: authURL, interactive: true}, () => {
    // This code will determine what to do 
    // once Instagram OAuth is successful
  });
}