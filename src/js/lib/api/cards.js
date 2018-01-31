import fetch from 'isomorphic-fetch';

const url = `/api/cards`;

export default {

  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  insert: (email, message, informationId, dreamsId, personId) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`email`, email);
    body.append(`message`, message);
    body.append(`informationId`, informationId);
    body.append(`dreamsId`, dreamsId);
    body.append(`personId`, personId);

    return fetch(url, {method, body})
      .then(r => r.json());
  }

};
