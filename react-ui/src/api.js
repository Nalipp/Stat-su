const APIURL = '/api/timeSlips/';

export async function getTimeSlips() {
  return fetch(APIURL)
  .then(res => {
    return reqResult(res);
  })
}

export async function getTimeSlip(id) {
  return fetch(APIURL + id)
  .then(res => {
    return reqResult(res);
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
    return reqResult(res);
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
    return reqResult(res);
  })
}

export async function postTime(id, body) {
  return fetch(APIURL + id, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({total_time: body.totalTime, last_update: Date.now()})
  })
  .then(res => {
    return reqResult(res);
  })
}

export async function deleteTimeSlip(id) {
  return fetch(APIURL + id, {
    method: 'delete',
  })
  .then(res => {
    reqResult(res);
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

function reqResult(res) {
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
}

