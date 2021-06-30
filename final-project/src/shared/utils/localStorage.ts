const storage = window.localStorage;
const storageManager = {
  save(key: string, object: any) {
    storage.setItem(key, JSON.stringify(object));
  },
  get(key: string) {
    const value = storage.getItem(key);

    return value && JSON.parse(value);
  },
  remove(key: string) {
    return storage.removeItem(key);
  },
  clear() {
    storage.clear();
  },
};

export default storageManager;
