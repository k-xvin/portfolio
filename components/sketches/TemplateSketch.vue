<template>
    <v-card class="ma-5">
        <div style="height: 85vh" id="canvas"></div>
    </v-card>
</template>

<script>
export default {
    mounted() {
        let sketch = function (p) {
            //https://coolors.co/0d3b66-faf0ca-f4d35e-ee964b-f95738
            let palette = [
                "#0D3B66",
                "#FAF0CA",
                "#F4D35E",
                "#EE964B",
                "#F95738",
            ];

            let canvasWidth = document.getElementById("canvas").clientWidth;
            let canvasHeight = document.getElementById("canvas").clientHeight;
            p.setup = function () {
                p.createCanvas(canvasWidth, canvasHeight);

            };

            p.draw = function () {
                // dynamic resizing here
                canvasWidth = document.getElementById("canvas").clientWidth;
                canvasHeight = document.getElementById("canvas").clientHeight;
                p.resizeCanvas(canvasWidth, canvasHeight);
                p.background(palette[1]);
                p.translate(canvasWidth / 2, canvasHeight / 2);


                p.circle(30, 30, 20);

            };

            
        };
        const p5 = require("p5");
        new p5(sketch, "canvas");
    },
};
</script>

<style>
</style>