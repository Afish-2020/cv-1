let html1 = document.querySelector('#html1')
let style = document.querySelector('#style')
let n = -1
let string = `
/* 你好，我是小余
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
*/
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
/*
接下来我把div变成个一个八卦图
注意看好了
首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background-color:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background-color:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let string2=''
let step = () => {
    setTimeout(()=>{
    n = n + 1
    if(string[n]==='\n'){
        string2+='<br>'
    }else if(string[n]===' '){
            string2+='&nbsp'
        }else{
        string2+=string[n]
    }    
    html1.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);  //滚动条滚动到最下面
    html1.scrollTo(0,99999);    //滚动条滚动到最下面
    if(n + 1 < string.length){
    step()
    }    
    },50)
}

step()