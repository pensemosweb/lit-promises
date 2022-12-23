class MyFailFetchError extends Error {
  constructor(message, data) {
    super(message);
    this.name = 'MyFailFetchError';
    this.message = message;
    this.data = data
  }
}

export function pwAjax(url, config = {}) {
  return fetch(url, config)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }

      throw new Error('La respuesta es incorrecta', { cause: response })

      //throw new MyFailFetchError('La respuesta es incorrecta', response);
    });
}


/*pwAjax
.then(data => {
  document.querySelector('mini-search')._characters = data.results;
})
.catch(error => {
  document.querySelector('mini-search').error = true;
  document.querySelector('mini-search').errorMsj = error;
});*/