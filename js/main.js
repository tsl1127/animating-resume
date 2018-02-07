/* 把code写到#code和style标签里*/
function writeCode(prefix,code,fn){    //这里code就是指之前的result字符串
    let domCode = document.querySelector('#code')
    // domCode.innerHTML = prefix ||''
    let n=0
    // console.log('设置闹钟')
    let id=setInterval(()=>{
      n+=1
      // console.log('开始写代码')
      domCode.innerHTML= prefix+code.substring(0,n)//result.slice()
      domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css);
      // code.innerHTML = code.innerHTML.replace('html','<span style="color:red">html</span>')
      styleTag.innerHTML=prefix+code.substring(0,n)  
      // domCode.scrollTop=10000   //每次更新，往下拉10000像素，保证这个div不会超过10000像素
      domCode.scrollTop = domCode.scrollHeight  //能下拉多长就拉多长
      if(n>=code.length){
      window.clearInterval(id)  
      fn&&fn.call()
      }
    },10)
}


function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper>.content')
  let n=0
  let id=setInterval(()=>{
    n+=1
    // console.log('开始写代码')
    domPaper.innerHTML= markdown.substring(0,n)//result.slice()
    // code.innerHTML = code.innerHTML.replace('html','<span style="color:red">html</span>') 
    // domCode.scrollTop=10000   //每次更新，往下拉10000像素，保证这个div不会超过10000像素
    domPaper.scrollTop = domPaper.scrollHeight  //能下拉多长就拉多长
    if(n>=markdown.length){
    window.clearInterval(id)  
    fn&&fn.call()
    }
  },10)
}

var result =`/*
面试官你好，我是YYY
我将以动画的形式来展示我的简历
只用文字介绍太单调了
我就用代码来介绍吧

首先准备一些样式*/
*{
  transition:all 1s;   //让过渡自然点
}
  html{
    background:rgb(222,222,222);
    font-size:16px;
  }
#code{
  border:solid red 1px;
  padding:16px;
}
/*我需要一点代码来高亮*/
.token.selector{
  color: #690;  
}

.token.property{
  color: #905;
}

.token.function{
  color: #DD4A68;
}
/*加点3D效果 */
#code{
  transform:rotate(360deg);
}
/*我来介绍一下我自己吧 */
/*我需要一张白纸 */
#code{
  position :fixed;
  left:0;
  width:50%;
  height:100%
}

#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:green;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:5px;
}
#paper > .content{
  background:white;
  width:100%;
  height:100%;
}

`


var result2 =`
#paper{

}
/*
接下来把markdown变成HTML    -marked.js
*/

/*
接下来给HTML加样式
*/

/*
这就是我的会动的简历了
谢谢观看
*/
`



// writeCode(result)
// console.log('执行fn2');fn2()
// 1、定闹钟10ms以后开始执行
// 2、定完闹钟，writeCode就有返回值
// 3、执行fn2()
// 4、闹钟时间到
// 5、开始写第一行代码



var md=`
#自我介绍

我叫陶思亮

1986年12月出生
XXX学习毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉JavaScript CSS  HTML

#项目介绍

1、无缝轮播
2、我的简历
3、手机画板

#联系方式

-QQ：
-Email：
-电话：
`

writeCode('',result,()=>{ //writeCode call the function
  console.log('哦，你结束了')
  createPaper(()=>{   //createPaper call the function
    console.log('paper有了')
    writeCode(result,result2,()=>{
      writeMarkdown(md)
    })   //保留前面的
  })
})




 function createPaper(fn){
  var paper = document.createElement('div')
  paper.id='paper'
  var content = document.createElement('pre')
  content.className='content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn&&fn.call()
  }


  // function fn3(preResult){
  //   var result = `
  //   #paper{
  //     width:100px;
  //     height:100px;
  //     background:red;
  //   }
  //   `
  //   var n =0
  //   var id = setInterval(()=>{
  //     n+=1
  //     code.innerHTML = preResult+result.substring(0,n)  //每次只追加1个字符
  //     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
  //     // code.innerHTML = code.innerHTML.replace('html','<span style="color:red">html</span>') 
  //     styleTag.innerHTML=preResult+result.substring(0,n) 
  //     if(n>=result.length){
  //       window.clearInterval(id)
  //     }
  //   },50)
  // } 