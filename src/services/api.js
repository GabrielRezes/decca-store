import axios from 'axios';

const CLIENT_ID = 'c0266f50c43530a'

// export const api = axios.create({
//   baseURL: 'https://api.imgur.com'
// })

// const authorization = `Authorization, Client-ID ${CLIENT_ID}`;

export const getAccess = async () => {
  
  const refreshToken = "87adff90469dcd65356f100d68e4bb074fbfdd10"
  const clientId = "c0266f50c43530a"
  const clientSecret = "4178823dc209412af2f882155f76df0dc7ece938"
  const grantType = "refreshToken"
  
  var formdata = new FormData();
  formdata.append("refresh_token", refreshToken);
  formdata.append("client_id", clientId);
  formdata.append("client_secret", clientSecret);
  formdata.append("grant_type", refreshToken);

  console.log('FORMDATA',formdata.append);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("https://api.imgur.com/oauth2/token", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
