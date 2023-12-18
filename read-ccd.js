const bb = require("@amida-tech/blue-button")
const bbg = require("./blue-button-generate")
const fs = require("fs")

const file = process.argv[2]
const data = fs.readFileSync(`./samples/${file}`, "utf-8")

const doc = bb.parse(data);
// const valid = bb.validator.validateDocumentModel(doc);

console.log(doc)
