export const mystorage = {
  get: function(key: any) {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        const valueJson = JSON.parse(value);
        if (typeof valueJson === 'object') {
          return valueJson;
        } else {
          return value;
        }
      } catch (e) {
        return value;
      }
    } else {
      return value;
    }
  },
  set: function(key: any, value: any) {
    if (typeof value === 'object') {
      return localStorage.setItem(key, JSON.stringify(value));
    } else {
      return localStorage.setItem(key, value);
    }
  },
  remove: function(key: any) {
    localStorage.removeItem(key);
  },
  clear: function() {
    localStorage.clear();
  }
};