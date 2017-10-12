<template>
    <div>
        <canvas id="myCanvas" width="600" height="300"></canvas>
        <canvas id="canvasLineDash" width="600" height="300"></canvas>
        <canvas id="dottedLine" width="600" height="600"></canvas>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

    },
    computed: {

    },
    created() {
        this.$nextTick(() => {
            this.canvasGarid();
            this.canvasLineDash();
            this.dottedLine();
        })
    },
    mounted() {

    },
    methods: {
        dottedLineInit() {
            let canvasPrototype = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
            canvasPrototype.dottedLine = function(x1, y1, x2, y2, interval) {
                /**
                 * @param interval 间隔
                 * @param x1 起始X点
                 * @param y1 起始Y点
                 * @param x2 截止X点
                 * @param y2 截止Y点
                 * @param isHorizontal 是否水平 
                 */
                if (!interval) {
                    interval = 5;
                }
                let isHorizontal = true;
                if (x1 == x2) {
                    isHorizontal = false;
                }
                let len = isHorizontal ? x2 - x1 : y2 - y1;
                this.moveTo(x1, y1);
                let progress = 0;
                while (len > progress) {
                    progress += interval;
                    if (progress > len) {
                        progress = len;
                    }
                    if (isHorizontal) {
                        this.moveTo(x1 + progress, y1);
                        this.arc(x1 + progress, y1, 1, 0, Math.PI * 2, true);
                        this.fill();
                    } else {
                        this.moveTo(x1, y1 + progress);
                        this.arc(x1, y1 + progress, 1, 0, Math.PI * 2, true);
                        this.fill();
                    }
                }
            }
        },
        canvasSupport(e) {
            return !!e.getContext;
        },
        canvasGarid() {
            let myCanvas = document.getElementById('myCanvas');
            if (!this.canvasSupport(myCanvas)) {
                return;
            }
            let ctx = myCanvas.getContext('2d');
            myCanvas.width = document.querySelector('.layout-content').clientWidth - 40;

            function drawGrid(color, stepX, stepY) {
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.5;
                for (let i = stepX + 0.5; i < myCanvas.width; i += stepX) {
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, myCanvas.height);
                    ctx.stroke();

                }
                for (let i = stepY + 0.5; i < myCanvas.height; i += stepY) {
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(myCanvas.width, i);
                    ctx.stroke();
                }
            }

            function drawScreen() {
                let dx = 50;
                let dy = 50;

                // 初始坐标原点
                let x = 0;
                let y = 0;
                let w = myCanvas.width;
                let h = myCanvas.height;
                let xy = 10;

                while (y < h) {
                    y = y + dy;
                    //横坐标的数字  
                    ctx.font = "12px Calibri";
                    ctx.fillText(xy, x, y);
                    xy += 10;
                }
                // 画竖线
                y = 0;
                xy = 10;
                while (x < w) {
                    x = x + dx;
                    //纵坐标的数字  
                    ctx.font = "12px Calibri";
                    ctx.fillText(xy, x, 10);
                    xy += 10;
                }

                drawGrid('#333', 50, 50);
            }
            // drawGrid('#333', 50, 50)
            drawScreen();

        },
        canvasLineDash() {
            let myCanvas = document.getElementById('canvasLineDash');
            if (!this.canvasSupport(myCanvas)) {
                return;
            }
            let ctx = myCanvas.getContext('2d');
            function drawScreen() {
                ctx.lineWidth = 4;

                ctx.beginPath();
                ctx.setLineDash([5, 30, 20]);
                ctx.strokeStyle = '#f36';
                ctx.moveTo(10, 100);
                ctx.lineTo(400, 100);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.setLineDash([40, 30, 20, 10]);
                ctx.strokeStyle = 'blue';
                ctx.moveTo(10, 120);
                ctx.lineTo(400, 120);
                ctx.stroke();
                ctx.closePath();
            }
            drawScreen();
        },
        dottedLine() {
            this.dottedLineInit();
            let myCanvas = document.getElementById('dottedLine');
            if (!this.canvasSupport(myCanvas)) {
                return;
            }
            let ctx = myCanvas.getContext('2d');
            // 绘制横线
            ctx.dottedLine(10, 100, 200, 200);

            // 绘制竖线
            ctx.dottedLine(10, 120, 10, 200);

            // 改变间距值
            ctx.dottedLine(250, 100, 400, 200, 10);

            // 绘制矩形
            ctx.dottedLine(10, 300, 200, 300, 10);
            ctx.dottedLine(10, 300, 10, 500, 10);
            ctx.dottedLine(200, 300, 200, 500, 10);
            ctx.dottedLine(10, 500, 200, 500, 10);
        }
    }
}
</script>
<style lang="less" scoped>
canvas {
    border: 1px solid #333;
    margin-bottom: 20px;
}
</style>
