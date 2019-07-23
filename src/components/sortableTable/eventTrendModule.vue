<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-22 15:44:23
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 事件走势图
 -->
<template>
    <div class="eventTrend-module">
        <plugLineEchart :getElementById="Math.random().toString(36).substr(2,10)" />
    </div>
</template>

<script>
    import plugLineEchart from '@/components/plugSortable/plugLineEchart.vue'
    export default {
        components:{
            plugLineEchart
        }
    }
</script>

<style>

</style>
