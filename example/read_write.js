#!/usr/bin/env node

process.stdin.setEncoding("utf8");

console.log(process.argv[2]);

var transit   = require("../src/transit.js"),
    transport = process.argv[2] || "json",
    r         = transit.reader(transport),
    w         = transit.writer(transport);

process.stdin.on("data", function(data, err) {
    process.stdout.write(w.write(r.read(data)));
});
