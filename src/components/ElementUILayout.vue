<template>
    <div>
        <el-button @click="visible = true">Element UI</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Element UI</p>
        </el-dialog>
        <element-tree></element-tree>
    </div>
</template>
<script>
    import ElementTree from '@/components/ElementTree.vue'
    export default {
        data() {
            return {
                visible: false
            }
        },
        components: {ElementTree}
    }
</script>
<style lang="scss" scoped>
    /*@import url("//unpkg.com/element-ui/lib/theme-chalk/index.css");*/
</style>
