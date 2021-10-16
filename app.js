"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send("\n    <h1>Express Demo App</h1>\n    <h4>Message: Success Again</h4>\n\n    <p>Version 2.0</p>\n  ");
});
app.get('/products', function (req, res) {
    res.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }
    ]);
});
app.listen(port, function () {
    console.log("Demo app is up and listening to port: " + port);
});
