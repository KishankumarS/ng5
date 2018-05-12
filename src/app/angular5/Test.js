var k = "kishan";
var Change = /** @class */ (function () {
    function Change() {
        this.k1 = "Jythi";
    }
    Change.prototype.greet = function () {
        var k = '2';
        var t = k;
        var i = 3;
        console.log(i);
        i = 9;
        console.log(i);
        console.log(t);
    };
    Change.k2 = "buvan";
    return Change;
}());
console.log(k);
console.log(Change.k2);
var obj = new Change();
obj.greet();
console.log(obj.k1);
