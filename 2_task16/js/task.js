/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var $ = function(id){
	return document.getElementById(id);
};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var cityName = $("aqi-city-input").value.trim();
	var cityAqi = $("aqi-value-input").value.trim();


    if(!cityName.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!cityAqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
	}
	//判断输入的是否符合条件
	aqiData[cityName] = cityAqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aTable = $("aqi-table");//在tbody外添加了tr，待解决
	aTable.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

	for (city in aqiData) {
		var aTr = document.createElement("tr");
		aTable.appendChild(aTr);

		var tdCity = document.createElement("td");
		tdCity.innerText = city;
		aTr.appendChild(tdCity);

		var tdAir = document.createElement("td");
		tdAir.innerText = aqiData[city];
		aTr.appendChild(tdAir);

		var tdOpn = document.createElement("td");
		tdOpn.innerHTML = "<button>删除</button>";
		let delCity = city;
		tdOpn.onclick = function(){delBtnHandle(delCity);};
		aTr.appendChild(tdOpn);
		
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(tdCity) {
  // do sth.
  delete aqiData[tdCity];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").addEventListener("click", addBtnHandle)
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();