"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var Routes_1 = require("./routes_container/Routes");
var app = (0, express_1.default)();
var key = "key";
var port = 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/', Routes_1.default);
app.use('/subject', Routes_1.default);
var server = app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
exports.default = server;
