<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-22 15:47:17
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 网站统计
 -->
<template>
    <div class="website-module">
        <i-table stripe :columns="columns1" :data="data1"></i-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            columns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ]
        }
    }
}
</script>

<style>

</style>
