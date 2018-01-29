<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue'

    import Element from 'element-ui'
    import './styles/custom-element.scss'
//    import 'element-ui/lib/theme-chalk/index.css'
//    Vue.use(Element, { size: 'small' })
    Vue.use(Element)

    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        /*@import '~element-ui/lib/theme-chalk/index.css'*/

    }

    #app {
        /*@import url("//unpkg.com/element-ui/lib/theme-chalk/index.css");*/
        /*@import 'styles/custom-element.scss';*/
        /*@import 'styles/custom-bootstrap.scss';*/
        /*@import '~bootstrap/scss/bootstrap.scss';*/

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        height: 100%;
        /*margin-top: 60px;*/
    }
</style>
