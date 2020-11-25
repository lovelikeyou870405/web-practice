
//建立Vue元件:
const TechBooks = {
    template:`<div>資訊科技叢書</div>`
}

const TechBooks1 = {
    template:`<div>
                <h3>TechBook1</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>`
}

const TechBooks2 = {
    template:`<div>
                <h3>TechBook2</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>`
}

const FoodsBooks = {
    template:`<div>健康飲食叢書</div>`
}

const FoodsBooks1 = {
    template:`<div>
                <h3>FoodsBook1</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>`
}

const FoodsBooks2 = {
    template:`<div>
                <h3>FoodsBook2</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>`
}

const CollectionBooks = {
    template:`<div>珍藏經典叢書</div>`
}

const Login = {
    data() {
        return {
            email:'',
            password:''
        }
    },
    template:`<div class="card">
    <div class="card-header">
      <h3>登入</h3>
    </div>
    <div class="card-body">
      <h5 class="card-title">請登入您的會員帳號。</h5>
      <form>
        <div class="form-group">
          <label>電子信箱</label>
          <input v-model="email" type="email" class="form-control" placeholder="請輸入您的電子信箱">
        </div>
        <div class="form-group">
          <label>密碼</label>
          <input v-model="password" type="password" class="form-control" placeholder="請輸入您的密碼">
        </div>
        <button type="submit" class="btn btn-primary">登入</button>
        <small>您還沒有帳號嗎 ? 您可以點選
            <router-link to="/signup">註冊新帳號</router-link>
        </small>
      </form>
    </div>
  </div>`
}

const SignUp = {
    data() {
        return {
            email:'',
            password:''
        }
    },
    template:`<div class="card">
    <div class="card-header">
      <h3>註冊</h3>
    </div>
    <div class="card-body">
      <h5 class="card-title">請登入您的會員帳號。</h5>
      <form>
        <div class="form-group">
          <label>電子信箱</label>
          <input type="email" class="form-control" v-model="email" placeholder="請輸入您的電子信箱">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密碼</label>
          <input type="password" class="form-control" v-model="password" placeholder="請輸入您的密碼">
        </div>
        <button type="submit" class="btn btn-primary">註冊</button>
        <small>如果您已經有帳號了 ， 請直接點選
            <router-link to="/login">登入</router-link>
        </small>
      </form>
    </div>
  </div>`
}

//建立router:
const router = new VueRouter({
    //mode:'history',
    routes:[
        {
            path:'*',
            redirect:'/tech'
        },
        {
            path:'/tech',
            components:{
                default:TechBooks,
                part1:TechBooks1,
                part2:TechBooks2
            }
        },
        {
            path:'/foods',
            components:{
                default:FoodsBooks,
                part1:FoodsBooks1,
                part2:FoodsBooks2
            }
        },
        {
            path:'/collection',
            component:CollectionBooks,
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/signup',
            component:SignUp
        }
    ]
})

//Vue Router定義後，製作監視者router.beforeEach:
router.beforeEach((to, from, next) => {
    const currentUser = null
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if(requiresAuth && !currentUser){
        next('/login')
    }else if(requiresAuth && currentUser){
        next()
    }else{
        next()
    }
})

//建立Vue實例:
new Vue({
    el:'#app',
    router
})