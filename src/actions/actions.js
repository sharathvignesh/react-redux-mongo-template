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

    }//postItem()
