const foo = new Counter(4);
foo.hack = function() {
    count = 1337;
};

function Counter(start) {
    var count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    }
}
