// 登录页面
<template>
    <div>
       <div class="log">
            LOGO
       </div>
        <from style="position:absolute;top:390px;left:53px;">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="user" ></mt-field>
            <mt-field label="密码" placeholder="请输入密码" v-model="pass"></mt-field>
            <button>登录</button>
        </from>
    </div>

    
</template>

<script>
export default {
    name:"Login",
    data() {
        return {
            pass: "",
            user: ""
        }
    },

    methods: {
        login(){

        }

    },
}
</script>

<style scoped>
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
    button{
        width: 188px;
        height: 33px;
        margin-top: 30px;
        margin-left: 40px;
        font-size: 20px;
    }
    
</style>
