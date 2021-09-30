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

            let palette2 = ["#F4D35E", "#EE964B", "#F95738"];

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
                p.background(palette[0]);
                //p.translate(canvasWidth / 2, canvasHeight / 2);

                //p.circle(30, 30, 20);

                p.fill(palette[1]);
                p.strokeWeight(4);
                p.stroke(palette[4]);
                let msgPosition = 0;
                //let message = "happybirthdayjeremyhavefunreadingthis :)))) ";
                let message = " ";

                for (let x = 0; x < p.floor(canvasWidth / 150); x++) {
                    //polygon(x, x, 200, 8);
                    for (let y = 0; y < p.floor(canvasHeight / 150); y++) {
                        p.stroke(palette2[x % 3]);
                        let baseX = x * 150 + 100;
                        let baseY = y * 150 + 100;
                        if (
                            x % 2 === 1 &&
                            y != p.floor(canvasHeight / 150 - 1)
                        ) {
                            stackedPoly(baseX, baseY + 75, 50, 8, y % 4);
                            drawLetter(message[msgPosition], baseX, baseY + 75);
                            if (msgPosition != message.length - 1)
                                msgPosition++;
                        } else if (x % 2 === 0) {
                            stackedPoly(baseX, baseY, 50, 8, y % 4);
                            drawLetter(message[msgPosition], baseX, baseY);
                            if (msgPosition != message.length - 1)
                                msgPosition++;
                        }
                    }
                }
            };

            function drawLetter(letter, x, y) {
                p.push();
                p.textSize(40);
                p.stroke(0);
                p.text(letter, x+p.random(3), y+p.random(3));
                p.pop();
            }

            function stackedPoly(x, y, radius, npoints, direction) {
                for (let i = 0; i < 10; i++) {
                    switch (direction) {
                        case 0:
                            polygon(x + i, y + i, radius, npoints);
                            break;
                        case 1:
                            polygon(x + i, y - i, radius, npoints);
                            break;
                        case 2:
                            polygon(x - i, y - i, radius, npoints);
                            break;
                        default:
                            polygon(x - i, y + i, radius, npoints);
                            break;
                    }
                }
            }

            function polygon(x, y, radius, npoints) {
                let angle = p.TWO_PI / npoints;
                p.beginShape();
                for (let a = 0; a < p.TWO_PI; a += angle) {
                    let sx = x + p.cos(a) * radius;
                    let sy = y + p.sin(a) * radius;
                    p.vertex(sx, sy);
                }
                p.endShape(p.CLOSE);
            }
        };
        const p5 = require("p5");
        new p5(sketch, "canvas");
    },
};
</script>

<style>
</style>