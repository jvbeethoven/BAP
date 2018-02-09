import fetch from 'isomorphic-fetch';

const url = `/api/information`;

export default {

  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  insert: message => {
    const method = `POST`;
    const body = new FormData();
    body.append(`message`, message);

    return fetch(url, {method, body})
      .then(r => r.json());
  }

};
