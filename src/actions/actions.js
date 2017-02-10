import fetch from 'isomorphic-fetch';
export const STORE_NAME = 'STORE_NAME';
export const STORE_VALUE = 'STORE_VALUE';


export function storeName(name) {
  return dispatch => {
    return dispatch({
      type: STORE_NAME,
      name: name
    });
  };
}

export function storeValue(value) {
  return dispatch => {
    return fetch('http://localhost:8081/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify({'value' : value})})
      body: JSON.stringify({'value' : value})})
      // .then(res => {
      //   if (res.status !== 200) {
      //     let status = res.status;
      //     console.log('error in posting event');
      //   }
      //   console.log("succesfully saved");
      //   return res.json();
      // })
  };
}
