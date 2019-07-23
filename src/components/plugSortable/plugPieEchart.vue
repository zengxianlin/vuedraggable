<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-10 17:22:08
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 饼图
 -->
 <template>
    <div class="plug-pieEchart echarts" :id="id" style="width:100%;height:100%"></div>
 </template>
 
 <script>
import { setTimeout } from 'timers';
 export default {
     props: ['layout','id'],
     data(){
         return{
            option: {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : '80%',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '40%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
         }
     },
     mounted(){
        // 如果为左布局就改变legend
        if(this.layout == 'left'){
            let {legend,series} = this.option;
            [(legend['x']),(legend['y']),legend['orient'],series[0]['radius'],series[0]['center'][1]] 
            = [30,20,'vertical','40%','60%'];
        }
        setTimeout(() => {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(this.id))
            // 绘制图表
            myChart.setOption(this.option);
        },100)
     }
 }
 </script>
 
 <style>
 
 </style>
 
