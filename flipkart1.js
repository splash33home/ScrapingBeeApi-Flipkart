var axios = require('axios');
let api_key = 'OIOV1R9GT1D75EMZIKOHROMFX8LLOP5NXMLIS5AYG1TIKE90MELPGFHE4DCCNC4F7GQIHGZ9LIWTI0Z8';
let siteUrl =encodeURIComponent("https://www.flipkart.com/saregama-carvaan-mini-scm02-3-w-bluetooth-speaker/p/itm1f3a352f3c42a?pid=ACCF7W4CNMHUQRFC&lid=LSTACCF7W4CNMHUQRFCQMNY2H&marketplace=FLIPKART&q=saregama&store=search.flipkart.com&srno=s_1_4&otracker=search&otracker1=search&fm=SEARCH&iid=35742152-ead1-46ac-9f93-a427a295ff84.ACCF7W4CNMHUQRFC.SEARCH&ppt=sp&ppn=sp&qH=2754cb9e89bb7039");
let js_snippet ='dmFyIGxpbmsgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl8xX3hvTVMnKTsKaWYgKGxpbmspIAp7CiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuXzFfeG9NUycpLmNsaWNrKCkKfQ==';
let  wait = 13500; 
let  extract_rules ='{"details":{"selector":"._2Y3EWJ","type":"list","output":{"price":"._30jeq3","sellerdata":"._3enH42"}}}'

var config = {
  method: 'get',
  url: 'https://app.scrapingbee.com/api/v1?js_snippet='+js_snippet+'&url='+siteUrl+'&api_key='+api_key+'&extract_rules='+extract_rules+'&wait='+wait//+'&wait_for='+wait_for
};

axios(config)
.then(function (response) {
  let responseData  = JSON.stringify(response.data);

  console.log(responseData);
})
.catch(function (error) {
  console.log(error);
});
