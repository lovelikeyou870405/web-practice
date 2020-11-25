console.log('hello world');

new Vue({
    el:'#app',
    data:{
        message:'hellow',
        yourname:'填入你的名字'
    },
    methods: {
        sayHi(event){
            console.log('hi');
        },
        Primary(){
            return 'this is a button.';
        },
        sayName(){
            alert(`hi, ${this.yourname}, welcome to vue.js !`);
        }
    }
})

const posts = []
const sections_tw = "文學,數學,科技,A,B,C,D,E"
new Vue({
    el:'#app1',
    data:{
        posts,
        results:[],
        currentMeg:'',
        meg:'123',
        sections:sections_tw.split(','),
        fontStyle:{
            color:'red'
        },
        item:''
    },
    mounted() {
        axios.get('./json/web-03.json')
        .then(res => {
            this.posts = res.data;
            console.log(this.posts);
        })
        .catch(err => {
            console.error(err); 
        })
    },
    methods:{
        selectColor(){

        },
        setText(event){
            this.meg=this.item;
            console.log(this.item);
        }
    }
})

new Vue({
    el:'#app2',
    data:{
        meg:'A',
        isA:true,
        isB:false
    },
    methods:{
        changeAB(){
            this.isA=!this.isA;
            this.isB=!this.isB;
            console.log('A is '+this.isA);
            console.log('B is '+this.isB);
        }
    }
})

new Vue({
    el:'#app3',
    data:{
        yourText:'',
        yourStr:''
    },
    methods:{
        clickBtn(){
            console.log(this.yourText)
            this.yourStr= this.yourText+',歡迎使用vue.js前端框架設計'
        },
        keyPress(){
            console.log('you press something.')
        },
        rightPress(){
            console.log('you press right click.')
        }
    }
})

new Vue({
    el:'#app4',
    data:{
        selected:'',
        selections:[
            {
                id:'1',
                title:'A'
            },
            {
                id:'2',
                title:'B'
            }
        ]
    },
    methods:{
        changeSelection(){
            console.log(this.selected)
        }
    }
})

Vue.component('todo', {
    methods:{
        newItem($event){
            this.$emit("additem",$event.target.value)
            $event.target.value=''
        }
    },
    template: '#todoUI'
})

new Vue({
    el:'#app5',
    data:{
        todos:[]
    },
    methods:{
        addItem(value){
            if(value!=''){
                this.todos.push(value)
            }
        },
        removeItem(item){
            let ndx = this.todos.indexOf(item)
            if(ndx!=-1){
                this.todos.splice(ndx,1)
            }
        }
    }
})
