<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-22 16:54:03
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 
 -->
<template>
    <div>
        <div class="module-title">
            {{name}}
            <span @click="removeAt(index)" title="删除板块">删除</span>
            <span class="handle" title="移动板块">拖动</span>
            <!-- <Icon type="trash-a" @click="removeAt(index)"></Icon> -->
            <!-- <Icon type="arrow-expand" class="handle"></Icon> -->
        </div>
        <!-- 文本模块 -->
        <textModule v-if="id == '001'" />
        <!-- 简报概述 -->
        <briefingModule v-if="id == '002'" />
        <!-- 监测概述 -->
        <monitorModule v-if="id == '003'" />
        <!-- 事件走势图 -->
        <eventTrendModule v-if="id == '004'" />
        <!-- 网站统计 -->
        <websiteModule v-if="id == '005'" />
        <!-- 来源类型分析 -->
        <sourceTypeModule v-if="id == '006'" />
        <!-- 媒体活跃度 -->
        <activeMediaModule v-if="id == '007'" />
        <!-- 情感分析 -->
        <emotionMdoule v-if="id == '008'" />
        <!-- 地域分布图 -->
        <regionModule v-if="id == '009'" />
    </div>
</template>

<script>
    import activeMediaModule from './activeMediaModule.vue'
    import briefingModule from './briefingModule.vue'
    import emotionMdoule from './emotionMdoule.vue'
    import eventTrendModule from './eventTrendModule.vue'
    import monitorModule from './monitorModule.vue'
    import regionModule from './regionModule.vue'
    import sourceTypeModule from './sourceTypeModule.vue'
    import textModule from './textModule.vue'
    import websiteModule from './websiteModule.vue'
    
    export default {
        props: [ 'id', 'name', 'index' ],
        components:{
            activeMediaModule,
            briefingModule,
            emotionMdoule,
            eventTrendModule,
            monitorModule,
            regionModule,
            sourceTypeModule,
            textModule,
            websiteModule
        },
        methods:{
            removeAt(index){
                this.$emit('removeCallback', index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .module-title{
        overflow: hidden;
        border-bottom: 1px solid #c8c8c8;
        padding-bottom: 14px;
        margin-bottom: 14px;; 
        
        span{
            color: #f40;
            float: right;
            padding: 0 10px;
            cursor: pointer;

            &:hover{
                background-color: #e8e8e8;
            }
        }
        
    }
</style>
