//生成表格并放到result-wrapper中
function createTable(data) {
    var table = document.createElement("table");
    //确定表头的前两个顺序
    var first2 = ['产品','地区'];
    if (isOrder()) {
        first2.reverse();
    }
    var th = ''
    + '<tr>'
    +    '<th>' + first2[0] + '</th>'
    +    '<th>' + first2[1] + '</th>'
    +    '<th>一月</th>'
    +    '<th>二月</th>'
    +    '<th>三月</th>'
    +    '<th>四月</th>'
    +    '<th>五月</th>'
    +    '<th>六月</th>'
    +    '<th>七月</th>'
    +    '<th>八月</th>'
    +    '<th>九月</th>'
    +    '<th>十月</th>'
    +    '<th>十一月</th>'
    +    '<th>十二月</th>'
    + '</tr>';
    var td = '';
    //遍历所有行
    for (var i = 0; i < data.length; i++) {
        td += '<tr>';
        //第一个进行特殊处理
        //能被第二列的种类数整除，则加上rowspan
        if (i % getCols() == 0) {
            td += '<td rowspan=' + getCols() + '>' + data[i][0] + '</td>';
        }
        //从第二个开始，正常显示
        for (var j = 1; j < data[i].length; j++) {
            td += '<td>' + data[i][j] + '</td>';
        }
        td += '</tr>';
    }
    table.innerHTML = th + td;
    //将table展现到wrapper中
    var tableWrapper = document.getElementById("table-wrapper");
    tableWrapper.innerHTML = '';
    tableWrapper.appendChild(table);
}


//取得第二列的种类数
function getCols() {
    var region = document.querySelectorAll('#region-wrapper input:checked');
    var product = document.querySelectorAll('#product-wrapper input:checked');
    if (product.length > 1 && region.length == 1) {
        if (product.length == 4) {
            return product.length - 1;
        }
        return product.length;
    } else {
        if (region.length == 4) {
            return region.length - 1;
        }
        return region.length;
    }
}