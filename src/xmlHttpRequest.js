const req = new XMLHttpRequest();
req.addEventListener('load', function () {
  console.log('this.response', this.response);
  console.log('this.responseText', this.responseText);
  console.log('this.responseType', this.responseType);
  console.log('this.responseURL', this.responseURL);
  console.log('this.responseXML', this.responseXML);
});

req.addEventListener('error', function (error) {
  console.log(error);
  console.log('hubo un error', this.status, this.statusText);
});

req.open('GET', 'https://rickandmortyapi.com/api/character/2sds');
req.send();

$.ajax({
  accepts: {
    mycustomtype: 'application/x-some-custom-type'
  },
 
  // Instructions for how to deserialize a `mycustomtype`
  converters: {
    'text mycustomtype': function(result) {
      // Do Stuff
      return newresult;
    }
  },
 
  // Expect a `mycustomtype` back from server
  dataType: 'mycustomtype',
  complete: function() {}
  fail: function(){}
});
