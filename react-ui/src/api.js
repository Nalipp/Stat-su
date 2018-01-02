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
