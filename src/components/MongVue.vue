<template lang="html">
    <section class="mong-vue">
        <h1>mong-vue Component</h1>
        {{msg}}
    </section>
</template>
<script lang="js">
    export default {
        name: 'mong-vue',
        props: ['msg'],
        mounted() {},
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>
<style scoped lang="scss">
    .mong-vue {}
</style>
