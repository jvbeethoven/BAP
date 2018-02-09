import fetch from 'isomorphic-fetch';

const url = `/api/information`;

export default {

  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  create: (message, tag) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`message`, message);
    body.append(`tag`, tag);

    return fetch(url, {method, body})
      .then(r => r.json());
  }

};
