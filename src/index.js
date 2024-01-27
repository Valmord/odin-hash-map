import HashMap from "./HashMap";

const map = new HashMap();
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

console.log("hashmap values:", map.values());
console.log("hashmap entries:");
console.table(map.entries());
