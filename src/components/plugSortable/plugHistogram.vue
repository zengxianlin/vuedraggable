<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-11 16:33:34
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 柱状图
 -->
 <template>
    <div class="plug-histogramEcharts echarts" :id="getElementById" style="width:100%;height:100%"></div>
 </template>

<script>
export default {
    props: [ 'getElementById' ],
    data(){
        return{
            option: {
                "backgroundColor": "rgb(20, 58, 110)",
                "color": ["#3cefff"],
                // "tooltip": {},
                // "grid": {
                //     "containLabel": true
                // },
                "xAxis": [{
                    "type": "category",
                    "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                    "axisTick": {
                        "alignWithLabel": true
                    },
                    "nameTextStyle": {
                        "color": "#82b0ec"
                    },
                    "axisLine": {
                        "lineStyle": {
                            "color": "#82b0ec"
                        }
                    },
                    "axisLabel": {
                        "textStyle": {
                            "color": "#82b0ec"
                        }
                    }
                }],
                "yAxis": [{
                    "type": "value",
                    "axisLabel": {
                        "textStyle": {
                            "color": "#82b0ec"
                        },
                        "formatter": "{value}%"
                    },
                    "splitLine": {
                        "lineStyle": {
                            "color": "#0c2c5a"
                        }
                    },
                    "axisLine": {
                        "show": false
                    }
                }],
                "series": [{
                    "name": "",
                    "type": "pictorialBar",
                    "symbolSize": [0, 0],
                    "symbolOffset": [0, 0],
                    "symbolPosition": "end",
                    "z": 12,
                    "label": {
                        "normal": {
                            "show": true,
                            "position": "top",
                            "formatter": "{c}%"
                        }
                    },
                    "data": [60, 70, 80, 90, 60, 70, 80, 90]
                },{
                    "type": "bar",
                    "itemStyle": {
                        "normal": {
                            "opacity": 0.7
                        }
                    },
                    "barWidth": "20",
                    "data": [60, 70, 80, 90, 60, 70, 80, 90],
                }]
            }
        }
    },
    mounted(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(this.getElementById))
        // 绘制图表
        myChart.setOption(this.option);
    }
}
</script>

<style>

</style>
