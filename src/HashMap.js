import LinkedList from "./LinkedList";

export default class HashMap {
  constructor(tableSize = 9, loadFactor = 0.75) {
    this.buckets = Array(tableSize); // Creates array with tableSize length
    this.capacity = 0;
    this.LOAD_FACTOR = loadFactor;
  }

  hash(key) {
    if (typeof key !== "string") key = String(key);
    let hashCode = 0;
    const PRIME_NUMBER = 37;
    for (let i = 0; i < key.length; i++) {
      hashCode += PRIME_NUMBER * hashCode + key[i].charCodeAt(0);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const hash = this.hash(key);

    console.log(
      `capacity ${this.capacity}, bucket length: ${this.buckets.length}`
    );
    if (this.capacity / this.buckets.length > this.LOAD_FACTOR)
      console.log("do something");
    if (this.buckets[hash] == undefined) {
      this.buckets[hash] ??= new LinkedList();
      this.capacity += 1;
    }
    this.buckets[hash].append({ key, value });
  }
}
