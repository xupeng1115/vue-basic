var data={
    name:"Bukcy"
}

Vue.component('greeting',{
    template:`
        <p>
            {{name}}大家好，给大家介绍一下我的女朋友@关晓彤
            <button @click="changeName">改名</button>
        </p>
    `,
    //组件内部data属性
    data:function(){
        return {
            name:"鹿晗"
        }
    },
    methods:{
        changeName:function(){
            this.name="henry";
        }
    }
})

var one = new Vue({
    el: '#vue-app-one',
    data:{
        name:"xiaoming"
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data:{
        name:"AB"
    }
});

