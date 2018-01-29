<template>
    <div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                    label: 'Level one 1',
                    children: [{
                        label: 'Level two 1-1',
                        children: [{
                            label: 'Level three 1-1-1'
                        }]
                    }]
                }, {
                    label: 'Level one 2',
                    children: [{
                        label: 'Level two 2-1',
                        children: [{
                            label: 'Level three 2-1-1'
                        }]
                    }, {
                        label: 'Level two 2-2',
                        children: [{
                            label: 'Level three 2-2-1'
                        }]
                    }]
                }, {
                    label: 'Level one 3',
                    children: [{
                        label: 'Level two 3-1',
                        children: [{
                            label: 'Level three 3-1-1'
                        }]
                    }, {
                        label: 'Level two 3-2',
                        children: [{
                            label: 'Level three 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            handleNodeClick(data) {
//                console.log(data);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .demo-tree {

        .leaf {
            width: 20px;
            background: #ddd;
        }

        .folder {
            width: 20px;
            background: #888;
        }

        .buttons {
            margin-top: 20px;
        }

        .filter-tree {
            margin-top: 20px;
        }
    }
</style>
