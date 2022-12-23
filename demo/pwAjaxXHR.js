export function pwAjaxXHR(url, config = { method: 'GET'}) {
  const req = new XMLHttpRequest();

  req.addEventListener('load', function loadXHRHandler() {
    if (this.status === 200) {
      config.onSuccess?.(JSON.parse(this.response));
    }
  });

  req.addEventListener('error', function errorXHRHandler(error) {
    console.warn(error);
    console.warn('hubo un error', this.status, this.statusText);
  });

  req.open(config.method, url);
  req.send();
}
/*

pwAjaxXHR('rickMorty.json', {
  onSuccess: (data) => {
    document.querySelector('mini-search')._characters = data.results
    pwAjaxXHR(`sdsds/${data.results[0].id}`, {
      onSuccess: (data) => {
        pwAjaxXHR(`sdsds/sds`, {
          onSuccess: (data) => {
            pwAjaxXHR(`sdsds/sds`, {
              onSuccess: (data) => {
                pwAjaxXHR(`sdsds/sds`, {
                  onSuccess: (data) => {
              }
            }
          },
        })
      },
    })
  },
  onError: (error) => {
    document.querySelector('mini-search').error = true;
    document.querySelector('mini-search').errorMsj = error;
  }
});


pwAjaxXHR('rickMorty.json')
.then(data => pwAjaxXHR(`sdsds/${data.results[0].id}`))
.then(data => pwAjaxXHR(`sdsds/sds`))
.then(data => pwAjaxXHR(`sdsds/sds`))
.then(data => pwAjaxXHR(`sdsds/sds`))
.then(data => pwAjaxXHR(`sdsds/sds`))
.then(data => {
  // manejo los datos
})
 */
