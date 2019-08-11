<template>
    <div class="main-container">
        <div id="main" style="width:100%;height:600px;margin-top:30px;">
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
        return {
            charts: '',
        /*  opinion: ["1", "3", "3", "4", "5"],*/
            opinionData: ["78", "88", "89", "100", "77", "60", "0"],
            opinionData2: ["22", "12", "11", "0", "23", "40", "100"]
        }
    },
    methods: {
        drawLine(id) {
            this.charts = echarts.init(document.getElementById(id))
            this.charts.setOption({
                //鼠标放到折线图上展示的数据展示样式
                tooltip: {
                    trigger: 'axis'  // axis   item   none三个值
                },
                //每条折线的含义
                legend: {
                    data: ['近七日任务完成率%', '近七日任务未完成率%']
                },
                //下载图片按钮
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                //配置x轴数据、样式、名称
                xAxis: {
                    type: 'category',
                    name: '星期',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],   // x轴数据
                },
                ////配置y轴样式、名称
                yAxis: {
                    type: 'value',
                    name: '完成率%'
                },
                //y轴数据，每条折线的名称和数据
                series: [
                    {
                        name: '近七日任务完成率%',
                        type: 'line',
                        data: this.opinionData
                    },
                    {
                        name: '近七日任务未完成率%',
                        type: 'line',
                        data: this.opinionData2
                    }
                ]
            })
        }
    },
    //调用
    mounted() {
        this.$nextTick(function() {
            this.drawLine('main')
        })
    }
}
</script>