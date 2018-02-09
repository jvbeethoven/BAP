import fetch from 'isomorphic-fetch';

const url = `/api/dreams`;

export default {

  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  insert: (name, imageName) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`name`, name);
    body.append(`imageName`, imageName);

    return fetch(url, {method, body})
      .then(r => r.json());
  }

};
