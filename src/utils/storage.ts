const prefix = "bless";
export const storage = {
  getItem(key: string) {
    const item = localStorage.getItem(`${prefix}-${key}`);
    return item;
  },

  /**
   *
   * @param key
   * @param value
   * @param maxAge 相对缓存时间，单位s，默认1day，转换为expires(绝对时间)存储，传null不过期
   */
  setItem(key: string, value: string) {
    this.removeItem(`${prefix}-${key}`);
    // const expires = maxAge && Date.now() + maxAge * 1000;
    localStorage.setItem(`${prefix}-${key}`, value);
  },

  removeItem(key: string) {
    localStorage.removeItem(`${prefix}-${key}`);
  },

  clear() {
    localStorage.clear();
  },
};
