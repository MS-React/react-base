import Service from './service';

export function fetchUsers(params = {}) {
  return Service.get(params);
}

export function createUsers(data = {}) {
  return Service.post(data);
}

export function deleteUsers(userId) {
  return Service.delete(userId);
}

export function updateUsers(userId, data = {}) {
  return Service.put(userId, data);
}
