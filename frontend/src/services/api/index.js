import api from './config';
import formatParams from './formatParams';

function get(method, parameters) {
  return api.get(method, formatParams(parameters));
}

function getOne(method, parameters) {
  const { id } = parameters;

  return api.get(`${method}/${id}`, formatParams(parameters));
}

function post(method, parameters) {
  const { data } = parameters;

  return api.post(method, data, formatParams(parameters));
}

function putt(method, parameters) {
  const { data } = parameters;

  return api.put(method, data, formatParams(parameters));
}

function patch(method, parameters) {
  const { data } = parameters;

  return api.patch(method, data, formatParams(parameters));
}

function del(method, parameters) {
  return api.delete(method, formatParams(parameters));
}

export { get, getOne, post, putt, patch, del };
