function isNotNumberValue(value) {
    return isNaN(value) || !isFinite(value);
}
var calc = new Vue({
    el: "#app",
    data: { x: 0, y: 0, finRes = 0 },
    computing: {
        div: function() {
            let x = parseFloat(this.x)
            if (isNotNumberValue(x))
                return this.finRes;
            let y = parseFloat(this.y)
            if (isNotNumberValue(y))
                return this.finRes;
            this.finRes = x / y
            return this.finRes
        },
        mul: function() {
            let x = parseFloat(this.x)
            if (isNotNumberValue(x))
                return this.finRes;
            let y = parseFloat(this.y)
            if (isNotNumberValue(y))
                return this.finRes;
            this.finRes = x * y
            return this.finRes
        }
    }
});