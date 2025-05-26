var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var u3;
var u4;
u3 = { name: "david", age: [40], id: "4" };
var u1;
u1 = { name: "sdf", age: 40 };
var s1;
s1 = __assign(__assign({}, u1), { grades: [1, 2, 3] });
var Directions;
(function (Directions) {
    Directions["Up"] = "up";
    Directions["Down"] = "down";
    Directions["Right"] = "right";
    Directions["Left"] = "left";
})(Directions || (Directions = {}));
var myDirection;
myDirection = Directions.Left;
// myDirection = Directions.Up;
console.log(myDirection);
var Country;
(function (Country) {
    Country[Country["ISRAEL"] = 0] = "ISRAEL";
    Country[Country["AMERIKA"] = 1] = "AMERIKA";
})(Country || (Country = {}));
var c = Country.ISRAEL;
///////////////////////////////
var myObject;
myObject = {
    40: 40
};
console.log(myObject);
