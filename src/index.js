import HashMap from "./HashMap";
import HashSet from "./HashSet";

const map = new HashMap();

console.log("HashMap");
map.set("cat", 55);
map.set("pat", 155);
map.set("wad", 255);
map.set("tad", 355);
map.set("log", 455);
map.set("rod", 555);
map.set("pog", 655);
map.set("nod", 755);
map.set("frog", 5755);
map.set("wod", 3755);
map.set("todd", 7255);
map.set("ruff", 1755);
map.set("ruffy", 17565);
map.set("dictionary", 175875);
map.set("library", 1756235);
map.set("mapset", 1723455);
map.set("binary", 163755);

console.log("get library key:", map.get("library"));
console.log("has mapset key:", map.has("mapset"));
console.log("has asdgw4 key:", map.has("asdgw4"));
console.log("removing library", map.remove("library"));
console.log("has library key:", map.has("library"));
console.log("Length:", map.length);

console.log("get nod value:", map.get("nod"));
map.set("nod", 800);
console.log("Adding nod again with different value..");
console.log("get nod value:", map.get("nod"));

console.log("hashmap keys:", map.keys());
console.log("hashmap values:", map.values());
console.log("hashmap entries:");
console.table(map.entries());

// Hashset

const hashSet = new HashSet();
console.log("\n");
console.log("Hashset");
hashSet.set("cat", 55);
hashSet.set("pat", 155);
hashSet.set("wad", 255);
hashSet.set("tad", 355);
hashSet.set("log", 455);
hashSet.set("rod", 555);
hashSet.set("pog", 655);
hashSet.set("nod", 755);
hashSet.set("frog", 5755);
hashSet.set("wod", 3755);
hashSet.set("todd", 7255);
hashSet.set("ruff", 1755);
hashSet.set("ruffy", 17565);
hashSet.set("dictionary", 175875);
hashSet.set("library", 1756235);
hashSet.set("hashset", 1723455);
hashSet.set("binary", 163755);

console.log("get library key:", hashSet.get("library"));
console.log("has hashset key:", hashSet.has("hashSetset"));
console.log("has asdgw4 key:", hashSet.has("asdgw4"));
console.log("removing library", hashSet.remove("library"));
console.log("has library key:", hashSet.has("library"));
console.log("Length:", hashSet.length);

console.log("get nod value:", hashSet.get("nod"));
hashSet.set("nod", 800);
console.log("Adding nod again with different value..");
console.log("get nod value:", hashSet.get("nod"));

console.log("hashSet keys:", hashSet.keys());
console.log("hashSet values:", hashSet.values());
console.log("hashSet entries:");
console.table(hashSet.entries());
