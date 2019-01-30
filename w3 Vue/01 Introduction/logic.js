let ID = -1;

function isNotNumberValue(value) {
    return isNaN(value) || !isFinite(value);
}
var calc = new Vue({
    el: '#app',
    data: { x: 0, y: 0, lastResult: 0 },
    computed: {
        result: function() {

            return this.lastResult;
        }
    },
    methods: {
        divideBy: function() {
            let x = parseFloat(this.x)
            if (isNotNumberValue(x))
                return this.lastResult;
            let y = parseFloat(this.y)
            if (isNotNumberValue(y))
                return this.lastResult;

            var calc = { number1: x, number2: y, operation: x / y }
            ID++
            localStorage.setItem(ID, JSON.stringify(calc))
            console.log('updted local storage: ');
            for (id = 0; id <= ID; id++) {
                var log = (JSON.parse(localStorage.getItem(id) || '[]'))
                console.log(log)
            };
            return this.lastResult = x / y

        },
        multiplyBy: function() {
            let x = parseFloat(this.x)
            if (isNotNumberValue(x))
                return this.lastResult;
            let y = parseFloat(this.y)
            if (isNotNumberValue(y))
                return this.lastResult;
            var calc = { number1: x, number2: y, operation: x * y }
            ID++
            localStorage.setItem(ID, JSON.stringify(calc))
            console.log('updted local storage: ');
            for (id = 0; id <= ID; id++) {
                var log = (JSON.parse(localStorage.getItem(id) || '[]'))
                console.log(log)
            };

            return this.lastResult = x * y
        }
    }
});