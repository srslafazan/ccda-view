const bb = require("@amida-tech/blue-button")
const bbg = require("./blue-button-generate")
const fs = require("fs")

const file = process.argv[2]
const data = fs.readFileSync(`./samples/${file}`, "utf-8")

const parsedCCD = bb.parse(data);

console.log(parsedCCD)

parsedCCD.data.demographics.name.first = "John"

const modifiedDataCCD = bbg.generateCCD(parsedCCD);

console.log(modifiedDataCCD)
