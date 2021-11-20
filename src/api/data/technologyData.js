import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/technologies.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/technologies/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createTechnology = (technology) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/technologies.json`, technology)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/technologies/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTechnologies().then(resolve);
        });
    })
    .catch(reject);
});

const updateTechnology = (technology) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/technologies/${technology.firebaseKey}.json`, technology)
    .then(() => getTechnologies().then(resolve))
    .catch(reject);
});

const deleteTechnology = (technology) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/technologies/${technology.firebaseKey}.json`)
    .then(() => getTechnologies().then(resolve))
    .catch(reject);
});

export {
  getTechnologies,
  getTechnology,
  createTechnology,
  updateTechnology,
  deleteTechnology,
};
