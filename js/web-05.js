
// Vue實例:
new Vue({
    el:'#app',
    data:{
        issignedin:false,
        isUser:false,
        displayname:'',
        photoURL:'',
        email:''
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                if(user.email=='lovelikeyou870405@gmail.com'){
                    this.isUser = true
                }
                this.issignedin = true
                this.displayname = user.displayname
                this.email = user.email
                this.photoURL = user.photoURL
            }
        })
    },
    methods: {
        signInWithGoogle(){
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithRedirect(provider).then((result)=>{

            }).catch(err => console.log(err))
        },
        signOut(){
            firebase.auth().signOut().then(()=>{
                this.displayname=''
                this.email=''
                this.photoURL=null
                this.issignedin=false
                this.isUser=false
            }).catch(err=>console.log(err))
        }
    }
})