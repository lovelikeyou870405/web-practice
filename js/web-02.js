var msg = document.querySelector('#textDiv');
var pointMsg = document.querySelector('#point');
var kc=0;
var point=0;
document.addEventListener("keydown",e=>{
    if(typeof e === 'object'){
        let str = "請按下";
        let pointStr = "你現在";
        if(kc==0){
            switch(e.code)
            {
                case "Space":
                    kc = (Math.ceil(Math.random()*25)+65);
                    str+=("<span>"+String.fromCharCode(kc)+"</span>");
                    msg.innerHTML=str;
                    break;
                default:
                    break;
            }
        }
        else
        {
            if(e.keyCode == kc)
            {
                point+=10;
                kc = (Math.ceil(Math.random()*25)+65);
                str+=("<span>"+String.fromCharCode(kc)+"</span>");
                pointStr +=("<span>"+point+"</span>分");
                msg.innerHTML=str;
                pointMsg.innerHTML=pointStr;
            }
            else
            {
                point -= 5;
                pointStr +=("<span>"+point+"</span>分");
                pointMsg.innerHTML=pointStr;
            }
        }
        /*let str = "嘿! 你按下ㄌ";
        switch(e.code){
            case　"Space":
                str+="空白鍵";
                break;
            case "AltLeft":
                str+="左邊的ALT鍵";
                break;
            case "shiftKey":
                str+="shift鍵";
                break;
            default:
                str+=String.fromCharCode(e.keyCode);
        }
        
        kc = (Math.ceil(Math.random()*25)+65);
        str+=String.fromCharCode((65+kc));
        msg.innerHTML = str;
        console.log(String.fromCharCode(kc));*/
    }

})