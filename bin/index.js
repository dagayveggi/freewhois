#!/usr/bin/env node

const whois = require("../");

const args = process.argv.splice(2);
const domain = args[0];

if (domain) {
    whois(domain).then(res => console.log(JSON.stringify(res))).catch(err => console.log(err))
} else {
    console.log("No domain entered, syntax is 'freewhois https://example.com`");
}
