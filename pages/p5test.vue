<template>
    <div>
        <h1>p5 test</h1>
        <div id="canvas"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        let sketch = function (p) {
            let bgColor = "red";

            p.setup = function () {
                p.createCanvas(600, 600);

                p.background(bgColor);
            };

            p.draw = function () {

            };
        };

        const p5 = require("p5");
        new p5(sketch, "canvas");
    },

    methods: {},
};
</script>