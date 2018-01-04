const APIURL = '/api/timeSlips/';

export async function getTimeSlips() {
  return fetch(APIURL)
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
    return res.json()
  })
}

export async function createTimeSlip(language, url, description) {
  url = requireHttp(url);
  return fetch(APIURL, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({language, url, description})
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
    return res.json()
  })
}

export async function archiveTimeSlip(timeSlip) {
  return fetch(APIURL + timeSlip._id, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({completed: !timeSlip.completed})
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
    return res.json();
  })
}

export async function deleteTimeSlip(id) {
  return fetch(APIURL + id, {
    method: 'delete',
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status <= 500) {
        return res.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: 'Server is not responding'};
        throw err;
      }
    }
  })
}

function requireHttp(url) {
  if (url) {
    let index = url.search(/http/);
    if (index === 0) return url;
    return `http://${url}`
  }
  return undefined;
}
