<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-18 14:41:16
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 
 -->
<!-- 单环形图 -->
<template>
    <div>
        <div :id="getElementById" style="width:100%;height:100%"></div>
    </div>
</template>

<script>
export default {
    props: ['getElementById'],
    data(){
        return {
            option: option
        }
    },
    mounted(){
        //初始化图表
        let myChart = this.$echarts.init(document.getElementById(this.getElementById))
        // 绘制图表
        myChart.setOption(this.option);
    }
}
export const option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        y: 'bottom',
        x : 'center',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['50%', '70%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
}
</script>

<style>

</style>
