

const API = {

  getTable: function (url) {
   return fetch(`${url}`)
      .then(result => result.json());
  }


};

export default API;