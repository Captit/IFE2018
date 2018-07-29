//获得选中的数据
function getData(val) {
    var resultData = [];
    for (var i = 0; i < sourceData.length; i++) {
        if (val.indexOf(sourceData[i].region) !== -1
            && val.indexOf(sourceData[i].product) !== -1) {
            var data = [];
            //排序
            if (isOrder()) {
                data.push(sourceData[i].region);
                data.push(sourceData[i].product);
            } else {
                data.push(sourceData[i].product);
                data.push(sourceData[i].region);
            }
            //放入工资数据
            for (var j = 0; j < sourceData[i].sale.length; j++) {
                data.push(sourceData[i].sale[j]);
            }
            resultData.push(data);
        }
    }
    return resultData;
}

//判断对于地区在前的情况，返回true
function isOrder() {
    var region = document.querySelectorAll('#region-wrapper input:checked');
    var product = document.querySelectorAll('#product-wrapper input:checked');
    if (product.length > 1 && region.length == 1) {
        return true;
    }
    return false;
}