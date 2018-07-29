displayTable();
document.getElementsByTagName("body")[0].onclick = function(e) {
    var target = e.target;
    if (target.nodeName.toLowerCase() === 'input') {
          displayTable();
    }
}

//根据选中结果展示表格
function displayTable() {
    var val = [];
    var checkInput = document.querySelectorAll('input:checked');
    for (var i = 0; i < checkInput.length; i++) {
        val.push(checkInput[i].value);
    }
    var data = getData(val);
    createTable(data);
}

