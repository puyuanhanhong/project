// 登录页面
<template>
    <div class="login">
        <div class="logo">LOGO</div>
        <form>
            <div class="user">
                <span>用户名</span><input type="text" placeholder="请输入用户名" id="username">
            </div>

            <div class="pass">
                <span>密码</span><input type="password" placeholder="请输入密码" id="password"><br>
            </div>

            <div class="che" >
                <p><input type="checkbox" name="" id="chex"/><span>记住密码</span></p>
                <router-link to="">忘记密码？</router-link>
            </div>
            <input type="button" id="btn" value="登录">
        </form>
    </div>
</template>

<script>
export default {
    name:"Login",
}
</script>

<style scoped>
    
    .login{
        width: 100%;
        height: 100%; 
    }
    .logo{
        width: 193px;
        height: 193px;
        border: 1px solid #cccccc;
        border-radius: 50%;
        text-align: center;
        line-height: 193px;
        margin: auto;
        margin-top: 30%;
    }
    form{
        display: block;
        width: 90%;
        height: 300px;
        
        margin: auto;
    }
    .user{
        margin-top: 50px;
        
        
    }
    .pass{
        margin-top: 8%;
    }
    .che{
        margin-top: 3%;
        display: flex;
        justify-content: space-around;
        font-size: 14px;
    }
    #btn{
        margin-top: 5%;
        width: 80%;
        height: 30px;
        margin-left: 62px;
        background: #939191 100%;
        border: none;
    }
    #username{
        width: 80%;
        height: 30px;
        border: 1px solid rgba(136, 136, 136, 1);
        margin-left: 15px;
    }
     #password{
        width: 80%;
        height: 30px; 
        border: 1px solid rgba(136, 136, 136, 1);
        margin-left: 30px;
    }


</style>
