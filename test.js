require('dotenv').config()
const request = require('request-promise')
const btoa = require('btoa')
const { ISSUER, TEST_CLIENT_ID, TEST_CLIENT_SECRET, DEFAULT_SCOPE, LOCAL_NODE_BACKENDURL,NGROK_URL } = process.env

const test = async () => {
  const token = btoa(`${TEST_CLIENT_ID}:${TEST_CLIENT_SECRET}`)
  try {
    const { token_type, access_token } = await request({
      uri: `${ISSUER}/v1/token`,
      json: true,
      method: 'POST',
      headers: {
        authorization: `Basic ${token}`,
      },
      form: {
        grant_type: 'client_credentials',
        scope: DEFAULT_SCOPE,
      },
    })
/*    console.log("This is the token from OKTA Authz server = "+access_token)*/
/*const  testaccess_token = "iOiJIS2MzcnhTSGFXRTQ1ZnlCSERPUEhsZUtMLTFRWGZMYk5xMVpYYjBEMU9rIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm9keWxnZk9jODJjUG9QaWdOUXh0V2NYR3JWMnptS2tXc082TTVRa01kdVEiLCJpc3MiOiJodHRwczovL2Rldi0zNTY1Mjgub2t0YS5jb20vb2F1dGgyL2F1c3JlNmlhN0NZU3VsRnV1NHg2IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWF0IjoxNTk4Mjk1NDU1LCJleHAiOjE1OTgyOTkwNTUsImNpZCI6IjBvYXJlNjMwa0tBdkQzUWM4NHg2Iiwic2NwIjpbInN1Y2hfc2NvcGUiXSwic3ViIjoiMG9hcmU2MzBrS0F2RDNRYzg0eDYifQ.ZIxTUTmCQGWN4UxSkWMD9dwFvA23FhH0xQcW0YRIQRCVkQz6fkFYGJ5Lggg_Fhc3yc9fQkMCUNIaXnBsyzw8Uamj5vlHEboQliTd77V4otJm2n3PEI-WKYAku3u1FGR1seXgeo-w_j4E1MBLsCL7HXgPEa3lqeojrXLZQOxlCMRXaoAtKd6rntGUX1G26osZkT9aAxYHiOP52wMmrxpQ3jMGGdJwqiQ7jC074RlakDkyb1n482_U5jbcRvLOZpPMGGHJQiYGAyu-O0lmXTb8APYHt88sul254dRuJ-0KlHPkKzg-Rp8vm6tncidcBGiMINH7R"*/
    const response = await request({
      uri: 'https://we5k6hqoui.execute-api.ap-south-1.amazonaws.com',
      json: true,
      headers: {
        authorization: [token_type, access_token].join(' '),
      },
    })

    console.log("\n*Response from Resource API ->"+JSON.stringify(response))
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

test()

