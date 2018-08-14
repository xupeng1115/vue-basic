//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"呵呵",
        job:'web开发',
        website:'http://www.thenewstep.com',
        websiteTag:'<a href="http://www.baidu.com">百度一下</a>',
        age:30,
        X:0,
        Y:0,
        a:0,
        b:0,
        changeColor:false,
        changeLength:false,
        error:false,
        success:false,
        characters:['Mario','Luffy','Yoshi'],
        users:[
            {name:'Henry',age:20},
            {name:'jack',age:30},
            {name:'andy',age:18}
        ]
    },
    methods:{
        greet:function(time){
            console.log(time);
            return 'Good '+time+' '+this.name+'!';
        },
        add:function(inc){
            if(inc){
                this.age+=inc;
            }else{
                this.age++;
            }
            
        },
        subtract:function(dec){
            if(dec){
                this.age-=dec;
            }else{
                this.age--;
            }
        },
        updateXY:function(event){
            this.X=event.offsetX;
            this.Y=event.offsetY;
        },
        stopMoving:function(event){
            event.stopPropagation();
        },
        Alert:function(){
            alert("禁止跳转");
        },
        logName:function(event){
            console.log("你正在输入名字");
        },
        logAge:function(event){
            console.log("你正在输入年龄");
        },
        getName:function(){
            this.name=this.$refs.name.value;
        },
        getAge:function(){
            this.age=this.$refs.age.value;
        },
        addToA:function(){
            console.log('add to A');
            return this.a+this.age;
        },
        addToB:function(){
            console.log('add to B');
            return this.b+this.age;
        },
        changeStyle:function(){
            this.changeColor=!this.changeColor;
        }
    },
    computed:{
        addToA1:function(){
            return this.age+this.a;
        },
        addToB1:function(){
            return this.age+this.b;
        },
        compClasses:function(){
            return {
                red:this.changeColor,
                back:this.changeLength
            }
        }
    }
});

/*
*   el:element 需要获取的元素，一定是html中的根容器元素
*   data:用于对当前数据的存储,将需要绑定渲染的内容放到一个虚拟dom中，同构虚拟dom的操作将内容插入真实的dom中
*   methods:用于存储各种方法
*   data-binding:给属性绑定对应的值
*   comuted:里面的方法不会所有都执行，但是methods会所有都执行，消耗性能；有大量的渲染的时候最好用computed属性来进行操作
*   
*/


