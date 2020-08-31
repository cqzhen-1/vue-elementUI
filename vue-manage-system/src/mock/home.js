import Mock, { mock } from "mockjs";

//图表数据
let List = [];

export default {
    getStatisticalData: () => {
        for (let i = 0; i < 14; i++) {
            List.push(
                Mock.mock({
                    vue: Mock.Random.float(100, 8000, 0, 2),
                    wechat: Mock.Random.float(100, 8000, 0, 2),
                    ES6: Mock.Random.float(100, 8000, 0, 2),
                    Redis: Mock.Random.float(100, 8000, 0, 2),
                    React: Mock.Random.float(100, 8000, 0, 2),
                    springboot: Mock.Random.float(100, 8000, 0, 2),
                })
            );
        }
        return {
            code: 20000,
            //折线图
            orderData: {
                data: List,
                date: [
                    "20191001",
                    "20191002",
                    "20191003",
                    "20191004",
                    "20191005",
                    "20191006",
                    "20191007",
                ],
            },
            //柱状图
            userData: [{
                    data: "周一",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
                {
                    data: "周二",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
                {
                    data: "周三",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
                {
                    data: "周四",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
                {
                    data: "周五",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
                {
                    data: "周六",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
                {
                    data: "周日",
                    new: Mock.Random.integer(1, 100),
                    active: Mock.Random.integer(100, 1000),
                },
            ],
            //饼图
            videoData: [
                { name: "SpringBoot", data: Mock.Random.float(1000, 20000, 0, 2) },
                { name: "Vue", data: Mock.Random.float(1000, 20000, 0, 2) },
                { name: "小程序", data: Mock.Random.float(1000, 20000, 0, 2) },
                { name: "ES6", data: Mock.Random.float(1000, 20000, 0, 2) },
                { name: "Redis", data: Mock.Random.float(1000, 20000, 0, 2) },
                { name: "React", data: Mock.Random.float(1000, 20000, 0, 2) },
            ],
            //表格
            tableData: [{
                    name: "SpringBoot",
                    monthBuy: Mock.Random.float(1000, 5000, 0, 2),
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    totalBuy: Mock.Random.float(1000, 20000, 0, 2),
                },
                {
                    name: "Vue",
                    monthBuy: Mock.Random.float(1000, 5000, 0, 2),
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    totalBuy: Mock.Random.float(1000, 20000, 0, 2),
                },
                {
                    name: "小程序",
                    monthBuy: Mock.Random.float(1000, 5000, 0, 2),
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    totalBuy: Mock.Random.float(1000, 20000, 0, 2),
                },
                {
                    name: "ES6",
                    monthBuy: Mock.Random.float(1000, 5000, 0, 2),
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    totalBuy: Mock.Random.float(1000, 20000, 0, 2),
                },
                {
                    name: "Redis",
                    monthBuy: Mock.Random.float(1000, 5000, 0, 2),
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    totalBuy: Mock.Random.float(1000, 20000, 0, 2),
                },
                {
                    name: "React",
                    monthBuy: Mock.Random.float(1000, 5000, 0, 2),
                    todayBuy: Mock.Random.float(100, 300, 0, 2),
                    totalBuy: Mock.Random.float(1000, 20000, 0, 2),
                },
            ],
        };
    },
};