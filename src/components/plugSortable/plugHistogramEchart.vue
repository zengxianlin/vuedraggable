<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-18 20:52:49
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 
 -->
<!--
 * @Author: xzk
 * @Description: 柱状图
 -->
 <template>
    <div class="plug-histogramEchart echarts" :id="id" style="width:100%;height:100%"></div>
 </template>

<script>
import { setTimeout } from 'timers';
export default {
    props: ['id','type','showName'],
    data(){
        return{
            option: {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: 10,
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        nameTextStyle: {
                            color: '#5bb0f0'
                        },
                        axisLabel:{
                             rotate: 0,
                             margin: 10,
                         },
                        nameGap: 10,
                        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        nameTextStyle: {
                            color: '#5bb0f0',
                            padding: [0,-50,0,0]
                        },
                        axisLine:{
                            show: true,         
                        },  
                        splitLine: {
                            show: false ,
                        },
                        axisTick: {
                            show: true
                        },
                        axisLabel : {
                            show: true
                        },
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '40%',
                        data:[10, 52, 200, 334, 390, 330, 220],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[
                                    {offset: 0, color: '#7ebcf6'},
                                    {offset: 1, color: '#188df0'}
                                ])
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'top'
                            }
                        },
                    }
                ]
            }
        }
    },
    mounted(){
        //存在type类型并未light时改变样式，事件分析 粉丝质量，文章位置
        if(this.type == 'light'){
            let {grid,series,yAxis,xAxis} = this.option;
            let {splitLine,axisLine,axisTick,axisLabel} = yAxis[0];
            [(grid['top']),(series[0]['itemStyle']['normal']['color']),
            (splitLine['show']),(axisLine['show']),(axisTick['show']),
            (axisLabel['show']),(xAxis[0]['axisTick']['show']),(series[0]['label']['normal']['show'])] 
            = ['50','#5bb0f0',true,false,false,false,false,true];
            //事件分析 粉丝质量 存在showName时添加y轴x轴名字，x轴文字转向
            if(this.showName){
                [(grid['right']),(yAxis[0]['name']),(xAxis[0]['name']),
                (xAxis[0]['axisLabel']['rotate'])] 
                = ['60','微博个数','粉丝数量','-20'];
            }
        }
        let myChart = this.$echarts.init(document.getElementById(this.id));
        myChart.setOption(this.option);
    }
}
export const option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 10,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false ,

            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[10, 52, 200, 334, 390, 330, 220],
        }
    ]
};

</script>

<style>

</style>
