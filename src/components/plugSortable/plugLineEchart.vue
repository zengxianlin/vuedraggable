<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-18 14:41:16
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 
 -->
<!-- 折线图 -->
 <template>
    <div class="plug-lineEchart echarts" :id="getElementById" style="width:100%;height:100%"></div>
 </template>

<script>
export default {
    props: [ 'getElementById' ],
    data(){
        return {
            option: {
                color: ['#94bdf1','#2db4e2','#fba555','#e84252','#c83743'],
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['全部','正面','中性','负面','负面占比'],
                    top: 10,
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['2019-05-01','2019-05-08','2019-05-15','2019-05-22','2019-05-29']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                    }
                ],
                series : [
                    {
                        name:'全部',
                        type:'line',
                        smooth:true,
                        data:[11, 11, 15, 13, 12, 13, 10],
                    },
                    {
                        name:'正面',
                        type:'line',
                        smooth:true,
                        data:[71, 50, 32, 45, 32, 25, 90],
                    },
                    {
                        name:'中性',
                        type:'line',
                        smooth:true,
                        data:[81, 20, 62, 45, 43, 22, 50],
                    },
                    {
                        name:'负面',
                        type:'line',
                        smooth:true,
                        data:[23, 53,12, 65, 53, 28, 50],
                    },
                    {
                        name:'负面占比',
                        type:'line',
                        smooth:true,
                        data:[13, 60, 26, 53, 37, 22, 102],
                    }
                ]
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
