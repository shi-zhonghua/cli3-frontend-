<template>
<canvas id="mycanvas" width="1200" height="260" style="background-color: rgba(0,0,0,0.2)">你的浏览器不支持canvas</canvas>
</template>

<script>
// import {
//     API_HOST
// } from './../../http/config'
export default {
    data() {
        return {
            interval: "",
            canvas: "",
            ctx: "",
            msgs: [],
            canvasWidth: 1200,
            canvasHeight: 260,
            font: '18px 黑体',
            colorArr: ["Olive",
                "OliveDrab",
                "Orange",
                "OrangeRed",
                "Orchid",
                "PaleGoldenRod",
                "PaleGreen",
                "PaleTurquoise",
                "PaleVioletRed",
                "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue"
            ],
            intervalTime: 40,
            requestApiIntervalTime: 3000,
            requestApiInterval: ''
        }
    },
    methods: {
        /**
         * @description 初始化canvas
         */
        initCanvas() {
            this.canvas = document.getElementById('mycanvas');
            this.ctx = this.canvas.getContext('2d');
            this.msgs = new Array(500);
            this.canvasWidth = 1280; //canvas分辨率1280*720
            this.canvasHeight = 260;
            this.canvas.width = this.canvasWidth;
            this.canvas.height = this.canvasHeight;
            this.ctx.font = this.font;
        },
        /**
         * 绘制canvas
         */
        draw() {
            if (this.interval != "") return;
            this.interval = setInterval(() => {
                //清空当前画布
                this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                this.ctx.save();
                for (var i = 0; i < this.msgs.length; i++) {
                    if (!(this.msgs[i] == null || this.msgs[i] == "" || typeof (this.msgs[i]) == "undefined")) {
                        if (this.msgs[i].L == null || typeof (this.msgs[i].L) == "undefined") {
                            //设置每个选项的宽度为屏幕宽度
                            this.msgs[i].L = this.canvasWidth; //x
                            this.msgs[i].T = parseInt(Math.random() * 240); //y
                            this.msgs[i].S = parseInt(Math.random() * (10 - 4) + 4); //速度
                            this.msgs[i].C = this.colorArr[Math.floor(Math.random() * this.colorArr.length)]; //字体颜色
                        } else {
                            console.log('a')
                            if (this.msgs[i].L < -200) {
                                this.msgs[i] = null;
                            } else {
                                this.msgs[i].L = parseInt(this.msgs[i].L - this.msgs[i].S);
                                this.ctx.fillStyle = this.msgs[i].C;
                                this.ctx.fillText(this.msgs[i].msg, this.msgs[i].L, this.msgs[i].T);
                                this.ctx.restore();
                            }
                        }
                    }
                }
            }, this.intervalTime);
        },
        clear() {

            clearInterval(this.interval);
            clearInterval(this.requestApiInterval);
            this.interval = "";
            this.requestApiInterval = '';
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.ctx.save();
            for (var i = 0; i < this.msgs.length; i++) {
                this.msgs[i] = null;
            }
        },
        destroyed() {
            this.clear();
        },
        /**
         * @description 处理新增数据
         */
        putMsg(datas) {
            for (var j = 0; j < datas.length; j++) {
                for (var i = 0; i < this.msgs.length; i++) {
                    if (this.msgs[i] == null || this.msgs[i] == "" || typeof (this.msgs[i]) == "undefined") {
                        this.msgs[i] = datas[j];
                        break;
                    }
                }
            }
            this.draw();
        },
        requestData() {
            if (this.requestApiInterval != "") return;

            this.requestApiInterval = setInterval(() => {
                    var datas = [{
                        "msg": "追加数据2"
                    }, {
                        "msg": "追加数据1"
                    }, {
                        "msg": "追加数据3"
                    }, {
                        "msg": "追加数据4"
                    }, {
                        "msg": "追加数据5"
                    }, {
                        "msg": "追加数据6"
                    }, {
                        "msg": "追加数据7"
                    }, {
                        "msg": "追加数据8"
                    }, {
                        "msg": "追加数据9"
                    }];
                    this.putMsg(datas);
                },
                this.requestApiIntervalTime
            );

        }
    },
    mounted() {
        this.initCanvas();
        var datas = [{
            "msg": "看着不错。。。。"
        }, {
            "msg": "哈哈哈。。。。"
        }, {
            "msg": "不错不错。。"
        }, {
            "msg": "真好看1。。。。"
        }, {
            "msg": "真好看2。。。。"
        }, {
            "msg": "真好看3。。。。"
        }, {
            "msg": "真好看4。。。。"
        }, {
            "msg": "真好看5。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }, {
            "msg": "真好看6。。。。"
        }];
        this.putMsg(datas)
        this.requestData()
    }
}
</script>
