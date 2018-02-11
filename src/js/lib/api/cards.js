import fetch from 'isomorphic-fetch';

const url = `/api/cards`;

export default {

  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  create: (email, message, informationId, years, dreamOne, dreamTwo, dreamThree, dreamFour, dreamFive, person) => {
    const method = `POST`;
    const body = new FormData();
    body.append(`email`, email);
    body.append(`message`, message);
    body.append(`informationId`, informationId);
    body.append(`years`, years);
    body.append(`dreamOne`, dreamOne);
    body.append(`dreamTwo`, dreamTwo);
    body.append(`dreamThree`, dreamThree);
    body.append(`dreamFour`, dreamFour);
    body.append(`dreamFive`, dreamFive);
    body.append(`person`, person);

    return fetch(url, {method, body})
      .then(r => r.json());
  }

};
