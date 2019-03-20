<template>
    <div>
        <h3>大数据分析</h3>
        <div class="BtnLink">
					<a v-for="(item,index) in btnLinkList" :key="index">
					    <i class="LinkIcon"></i>
					    <p>
					        <strong>{{item.titel}}</strong>
					        <span>{{item.info}}</span>
					    </p>
					</a>
        </div>
        <h3>最新入驻商家</h3>
        <div class="houseList">
            <ul>
                <li v-for="(item,index) in houseList" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)">
                    <a href="#">
                             <img :src='item.imgUrl'>
                              <strong>
                                  <b>{{item.name}}</b>
                                  <span>{{item.count}}</span>
                              </strong>
                          </a>
                    <p v-if="currentIndex===index" class="house-text">{{item.info}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentIndex: '',
            btnLinkList: [{
                titel: '实名认证',
                info: '严格审核杜绝虚假厂家'
            }, {
                titel: '百万数据',
                info: '上百万厂家产品让您精挑细选'
            }, {
                titel: '精准定位',
                info: '只能匹配您要的产品'
            }, {
                titel: '种类齐全',
                info: '覆盖多乐器种类'
            }],
            houseList: [{
                    imgUrl: require('../assets/imgages/1.jpg'),
                    name: '橘子培训',
                    count: 3000,
                    info: '文本显示文本显示文本显示文本显示文本显示文本显示'
                },
                {
                    imgUrl: require('../assets/imgages/2.jpg'),
                    name: '胡桃夹子舞蹈培训',
                    count: 20,
                    info: '文本显示文本显示文本显示文本显示文本显示文本显示'
                },
                {
                    imgUrl: require('../assets/imgages/3.jpg'),
                    name: '伦敦',
                    count: 19,
                    info: '文本显示文本显示文本显示文本显示文本显示文本显示'
                },
                {
                    imgUrl: require('../assets/imgages/3.jpg'),
                    name: '伦敦',
                    count: 19,
                    info: '文本显示文本显示文本显示文本显示文本显示文本显示'
                }
            ]
        }

    },
    methods: {
        enter(index) {
            this.currentIndex = index


        },
        leave(index) {
            this.currentIndex = false
        }
    }
}
</script>
<style lang="less" scoped>
.BtnLink {
    min-height: 250px;
    overflow: hidden;

}

.BtnLink a {
    display: inline-block;
    width: 25%;
    text-align: center;
    position: relative;
    height: 250px;
    color: #000;
    float: left;
    margin-bottom: 25px;
    text-decoration: none;

    span,
    strong {
        display: block;
    }

    strong {
        font-size: 36px;
    }

    span {
        color: #555555;
        font-size: 20px;
    }

    .LinkIcon {
        display: block;
        width: 50%;
        height: 180px;
        border-radius: 50%;
        background: #ccc;
        margin-left: 90px;
    }
}

.houseList {
    padding: 30px 10px 10px;
    overflow: hidden;
}

.houseList ul {
    overflow: hidden;
}

.houseList li {
    width: 310px;
    margin: 10px 11px;
    float: left;
    overflow: hidden;
    position: relative;
}

.house-text {
    position: absolute;
    bottom: 0;
    margin: 0;
    background: #ccc;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding: 4px;

}

.houseList li img {
    width: 370px;
    height: 233px;
}

.houseList li a {
    display: block;
}

.houseList li a strong {
    color: #fff;
    height: 70px;
    width: 50%;
    position: absolute;
    top: 50%;
    margin-top: -35px;
    left: 50%;
    margin-left: -25%;
}

.houseList li b {
    font-size: 24px;
}

.houseList li b,
.houseList li span {
    display: block;
    vertical-align: middle;
    text-align: center;
    line-height: 30px;
}

.houseList li span {
    letter-spacing: 5px;
}
</style>