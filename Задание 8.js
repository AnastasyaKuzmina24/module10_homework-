// Создаём произвольный массив Map
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set(3, "value3");
map.set({a: 1}, "value4");


for (let [key, value] of map) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}