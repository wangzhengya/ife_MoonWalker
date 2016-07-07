var data = [1,2,3,4,5];
var $ = function(id){
  return document.getElementById(id);
};
// 渲染队列
function renderQueue(){
  var renderDiv = $("show-queue");
  renderDiv.innerHTML = "";
  data.forEach( function(element, index) {
    var numDiv = document.createElement("div");
    numDiv.innerText = element;
    numDiv.setAttribute("id", "num-div")
    renderDiv.appendChild(numDiv);
  });
}
//获取num-input 中的数字
function getNum(){
  return parseInt($("num-input").value);
}
// 左侧入一个数字：unshift
function unshiftHandle(){
  data.unshift(getNum());
  renderQueue();
}
//右侧入一个数字：push
function pushHandle(){
  data.push(getNum());
  renderQueue();
}
//左侧出一个数字：shift
function shiftHandle(){
  alert(data.shift());
  renderQueue();
}
//右侧出一个数字:pop
function popHandle(){
  alert(data.pop());
  renderQueue();
}
function init(){
  console.log(data);
  $("unshift").addEventListener("click", unshiftHandle);
  $("push").addEventListener("click", pushHandle);
  $("shift").addEventListener("click", shiftHandle);
  $("pop").addEventListener("click", popHandle);

  renderQueue();
}
init();