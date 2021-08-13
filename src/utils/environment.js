let BASE_URL = "";
if(process.env.NODE_ENV === "development"){
  BASE_URL = "http://localhost:3000"
}

if(process.env.NODE_ENV === "production"){
  BASE_URL = "http://dev.test.com:3500/v1"
}

export {BASE_URL};
