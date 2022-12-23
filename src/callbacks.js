function formatearMensaje(msj, formateador) {
  return formateador(msj);
}

formatearMensaje('Hola mundo', function(data) {
  const partes = data.split(' ');

  return partes[0] + ' me llamo Jaime, soy de este ' + partes[1]
});

/*
const pwFetch = {}
pwFetch.then = function (callback) {
  //....
  callback(response)
}
*/
