<template>
    <div class="logo">
        <div class="log">
            LOGO
        </div>
        <router-link to="/Login" tag="span" style="position:absolute;top:470px;left:100px;">登录</router-link>
        <router-link to="/Register" tag="span" style="position:absolute;top:530px;left:100px;">注册</router-link>
    </div>
</template>

<script>
export default {
    name:"Logo",
}
</script>

<style scoped>
    .logo{
        position: relative;
    }
    .log{
        position: absolute;
        top: 157px;
        left: 100px;
        width: 193px;
        height: 193px;
        border: 1px solid #cccccc;
        border-radius: 50%;
        text-align: center;
        line-height: 193px;
    }
    span{
        display: block;
        width: 193px;
        height: 30px;
        border: 1px solid #cccccc;
        text-align: center;
        line-height: 30px;
    }
</style>
