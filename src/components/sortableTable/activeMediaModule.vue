<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-22 16:04:24
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 媒体活跃度
 -->
<template>
    <div class="activeMedia-module">
        <plugHistogram :getElementById="Math.random().toString(36).substr(2,10)" />
    </div>
</template>

<script>
    import plugHistogram from '@/components/plugSortable/plugHistogram.vue'
    export default {
        components:{
            plugHistogram
        }
    }
</script>

<style>

</style>
