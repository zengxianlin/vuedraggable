<!--
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-18 15:41:21
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 拖拽
 -->
 <template>
    <div class="page-sortable">
        <div class="tag-table">
            <h3>拖拽元素</h3>
            <draggable 
                class="draggable-left" 
                v-model="tagTableLeft"
                :options="optionsLeft"
                :clone="cloneDog" 
                :move="onMove" 
                :list="tagTableLeft"
                @update="datadragEnd">
                <transition-group tag="ul">
                    <li v-for="(item) in tagTableLeft" :key="item.name" class="module-left">
                        <p>{{item.name}}</p>
                    </li>
                </transition-group>
            </draggable>
        </div>
        <div class="sortable">
            <div class="headline">
                <i-input class="large" size="large" :value.sync="value" placeholder="请输入标题" style="width: 70%"></i-input>
                <p>第（1）期</p>
                <div class="small">
                    <i-input size="small" :value.sync="value1" placeholder="请输入标题"></i-input>
                    <span>2018-12-12</span>
                </div>
            </div>
            <div class="draggable-module">
                <draggable
                    class="draggable-right"
                    :options="optionsRight"
                    :list="tagTableRight"
                    handle=".handle"
                    :move="onMove">
                    <transition-group tag="ul" class="tagTableRight">
                        <li v-for="(item,index) in tagTableRight" :key="item.name">
                            <sortableTable :id="item.id" :name="item.name" :index="index" @removeCallback="removeCallback" />
                        </li>
                    </transition-group>
                </draggable>
                <!-- 添加元素 -->
                <div class="placeholder" v-if="tagTableRight.length == 0">
                    <h1>添加元素</h1>
                    <p>选中左侧元素，拖动到这里</p>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <script>
    import sortableTable from '@/components/sortableTable/index.vue'
    import draggable from 'vuedraggable';
import { log } from 'util';
    let idGlobal = 10;
    export default {
        data(){
            return{
                value: '简报名称',
                tagTableLeft: [
                    {
                        name: '文本',
                        id: '001',
                    },
                    {
                        name:'简报概述',
                        id: '002',
                    },
                    {
                        name:'监测概述',
                        id: '003',
                    },
                    {
                        name:'事件走势图',
                        id: '004',
                    },
                    {
                        name:'网站统计',
                        id: '005',
                    },
                    {
                        name:'来源类型分析',
                        id: '006',
                    },
                    {
                        name:'媒体活跃度',
                        id: '007',
                    },
                    {
                        name:'情感分析',
                        id: '008',
                    },
                    {
                        name:'地域分布图',
                        id: '009',
                    }
                ],
                tagTableRight: []
            }
        },
        components:{
            draggable,
            sortableTable
        },
        computed:{
            optionsLeft(){
                return {
                    animation: 150,
                    group: {
                        name: "people",
                        pull: 'clone',
                        put: false
                    },
                    ghostClass: "ghost",
                    sort: false,
                }
            },
            optionsRight(){
                return {
                    animation: 0,
                    group: "people",
                }
            }
        },
        updated(){
            
            // console.log(this.tagTableRight);
        },
        methods:{
            log: function(evt) {
                console.log(evt);
            },
            cloneDog(obj) {
                
                console.log(obj);
                return {
                    id: `${obj.id}`,
                    name: `${obj.name}`,
                    isShow: `${!obj.isShow}`,
                };
            },
            onMove(evt){
                // console.log(evt); 
                // console.log(evt.draggedContext.index)
                // console.log(evt.draggedContext.element)
                // console.log(evt.draggedContext.futureIndex)
                // console.log(evt.relatedContext.index)
                // console.log(evt.relatedContext.element)
                // console.log(evt.relatedContext.list)
                // console.log(evt.relatedContext.component)
            },
            datadragEnd(item){
                console.log(item); 
            },
            removeCallback(index){
                this.tagTableRight.splice(index, 1);
                console.log(this.tagTableRight);
                
            }
        }
    }
 </script>
 
 <style lang="scss">
    .page-sortable{
        width: 1200px;
        margin: 40px auto;
        position: relative;

        .tag-table{
            width: 200px;
            height: 500px;
            border: 1px solid #ccc;
            position: fixed;
            left: 50%;
            top: 40px;
            margin-left: -600px;
            background-color: #fff;

            h3{
                padding: 12px 0;
                font-size: 16px;
                text-align: center;
                background-color:#ccc;
            }

            p{
                color: #333;
                padding: 10px 14px;
                cursor: move;

                &:hover{
                    background-color:#ccc;
                }
            }

            .module-left{
                position: relative;

                .echarts-left{
                    position: absolute;
                    top: 40px;
                    left: 0;
                }
            }


            div[draggable=true]{
            // .ghost{
                .echarts{
                    display: block !important;
                }
            }
        }

        .sortable{
            width: calc(100% - 220px);
            min-height: 700px;
            border: 1px solid #ccc;
            margin-left: 220px;
            background-color: #fff;
            padding: 20px;

            .headline{
                text-align: center;
                margin-top: 20px;

                .ivu-input-wrapper{
                    margin: 0 auto;
                    display: block !important;

                    input{
                        text-align: center;
                    }
                }

                p{
                    padding: 16px 0;
                    font-size: 14px;
                }

                .large{

                    input{
                        height: 50px;
                        line-height: 50px;
                        color: #fc697a !important;
                        font-size: 20px;
                    }
                }

                .small{

                    .ivu-input-wrapper{
                        display: inline-block !important;;
                        width: 140px !important;
                        margin-right: 10px;

                        input{
                            height: 30px;
                            line-height: 30px;
                            font-size: 14px;
                        }
                    }

                }
            }

            .draggable-module{
                position: relative;

                .draggable-right{
                    padding: 20px;
                }
            }

            .tagTableRight{
                width: 100%;
                min-height: 200px;
                margin-top: 20px;

                li{
                    min-height: 200px;
                    margin-bottom: 20px;
                }
            }
            .echarts {
                width: 100% !important;
                height: 400px !important;
                margin-bottom: 20px;
            }

            .placeholder{
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 0;
                text-align: center;
                width: calc(100% - 40px);
                padding: 120px 0;
                border: dashed 1px #DCDCDC;
                text-align: center;
                
                h1{
                    font-size: 20px;
                }
                
                p{
                    padding-top: 20px;
                }
            }
        }

        .ghostClass{
        }
    }
 </style>
 
