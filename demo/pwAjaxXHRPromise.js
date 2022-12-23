export function pwAjaxXHRPromise(url, config = { method: 'GET'}) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.addEventListener('load', function loadXHRHandler() {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
      }
    });
  
    req.addEventListener('error', function errorXHRHandler(error) {
      console.warn(error);
      reject(new Error(`Hubo un error ${this.statusText}`, { cause: error }))
    });
  
    req.open(config.method, url);
    req.send();
  })
}

export function delay(data, time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), time)
  });
}