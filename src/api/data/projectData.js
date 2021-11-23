import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createProject = (project) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/projects.json`, project)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getProjects().then(resolve);
        });
    })
    .catch(reject);
});

const updateProject = (project) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/projects/${project.firebaseKey}.json`, project)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const deleteProject = (project) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/projects/${project.firebaseKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

export {
  getProjects, getProject, createProject, updateProject, deleteProject,
};
