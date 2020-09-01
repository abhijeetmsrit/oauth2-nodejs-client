# oauth2-nodejs-client
Sample oauth2 test client written in NODE js. 
The functionality of the script is to - 
  Invoke OAUTH2 Authorization server setup in OKTA and fetch a valid ACCESS token.
  Upon receiving the access token , this client invokes the AWS API Gateway to access the Resource Server.
The environment file consists of variable used by this client. The "NGROK_URL" variable is dynamic and is NOT being used by this client script.
