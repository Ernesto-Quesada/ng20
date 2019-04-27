var jsonConcat = require("json-concat");
 
jsonConcat({
    src: "mock-data/data", dest: "mock-data/data.json",
    dest: "./config.json"
}, function (json) {
    console.log(json);
});