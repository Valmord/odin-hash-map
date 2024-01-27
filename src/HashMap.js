import LinkedList from "./LinkedList";

export default class HashMap {
  constructor(tableSize = 9, loadFactor = 0.75) {
    this.buckets = Array(tableSize); // Creates array with tableSize length
    this.capacity = 0;
    this.LOAD_FACTOR = loadFactor;
  }

  get length() {
    let count = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        count += this.buckets[i].size;
      }
    }
    return count;
  }

  hash(key) {
    if (typeof key !== "string") key = String(key);
    let hashCode = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode += PRIME_NUMBER * hashCode + key[i].charCodeAt(0);
    }
    return hashCode % this.buckets.length;
  }

  rehash() {
    const oldBuckets = this.buckets;
    this.buckets = Array(this.buckets.length * 2 + 1);
    this.capacity = 0;
    const pairArray = [];
    oldBuckets.forEach((bucket) => {
      let pair = "something";
      while (pair !== null) {
        pair = bucket.pop();
        if (pair !== null) pairArray.push(pair.data);
      }
    });
    console.log("rehashing", pairArray);
    pairArray.forEach((pair) => this.set(pair.key, pair.value));
  }

  set(key, value) {
    const hash = this.hash(key);
    if (this.capacity / this.buckets.length > this.LOAD_FACTOR) this.rehash();
    if (this.buckets[hash] === undefined) {
      this.buckets[hash] ??= new LinkedList();
      this.capacity += 1;
    }
    this.buckets[hash].add({ key, value });
  }

  get(key) {
    try {
      return this.buckets[this.hash(key)].get(key);
    } catch (err) {
      console.log(`${key} isn't in map`);
      return null;
    }
  }

  has(key) {
    try {
      return this.buckets[this.hash(key)].has(key);
    } catch (err) {
      console.log(`${key} isn't in map`);
      return null;
    }
  }

  remove(key) {
    try {
      return this.buckets[this.hash(key)].remove(key);
    } catch (err) {
      console.log(`${key} isn't in map`);
      return null;
    }
  }

  keys() {
    let keys = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        keys = keys.concat(bucket.getKeys());
      }
    });
    return keys;
  }

  values() {
    let valueArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        valueArray = valueArray.concat(bucket.getValues());
      }
    });
    return valueArray;
  }

  entries() {
    let entriesArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        entriesArray = entriesArray.concat(bucket.getEntries());
      }
    });
    return entriesArray;
  }

  clear() {
    this.buckets = new Array(this.buckets.length);
  }
}
