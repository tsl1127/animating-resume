
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
`
var result2 = `

`




var n=0
var id=setInterval(()=>{
  n+=1
  code.innerHTML= result.substring(0,n)//result.slice()
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
  // code.innerHTML = code.innerHTML.replace('html','<span style="color:red">html</span>')
  styleTag.innerHTML=result.substring(0,n)  
  if(n>=result.length){
  window.clearInterval(id)  
  fn2()
  fn3(result)
  }
},10)

 function fn2(){
  var paper = document.createElement('div')
  paper.id='paper'
  document.body.appendChild(paper)
  }

  function fn3(preResult){
    var result = `
    #paper{
      width:100px;
      height:100px;
      background:red;
    }
    `
    var n =0
    var id = setInterval(()=>{
      n+=1
      code.innerHTML = preResult+result.substring(0,n)  //每次只追加1个字符
      code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
      // code.innerHTML = code.innerHTML.replace('html','<span style="color:red">html</span>') 
      styleTag.innerHTML=preResult+result.substring(0,n) 
      if(n>=result.length){
        window.clearInterval(id)
      }
    },50)
  } 