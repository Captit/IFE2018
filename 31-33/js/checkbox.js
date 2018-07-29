function createCheckbox(wrapperId,content) {
    var wrapper = document.querySelector(wrapperId);
    var allCheckbox = '<input type="checkbox" idType="all">全选';
    var childCheckbox = '';
    for (var i = 0; i < content.length; i++) {
        childCheckbox += '<input type="checkbox" idType="child"' + ' value=' + content[i].text + '>' + content[i].text;
    }
    wrapper.innerHTML = allCheckbox + childCheckbox;
    //默认状态为全选
    var input = document.querySelectorAll(wrapperId + ' input');
    for (var i = 0; i < input.length; i++) {
        input[i].checked = true;
    }
    

    wrapper.onclick = function(e) {
        var target = e.target;
        //选中的child选项
        var checked = document.querySelectorAll(wrapperId + ' input[idType="child"]:checked');
        if (target.type === 'checkbox') {
            //按全选按钮
            if (target.getAttribute('idType') === 'all') {
                //所有按钮都选中
                for (var i = 0; i < input.length; i++) {
                    input[i].checked = true;
                }
            } 
            //不是全选按钮
            else {
                //child全部选中，全选按妞也选中
                if (checked.length === 3) {
                    document.querySelector(wrapperId + ' input[idType="all"]').checked = true;
                } 
                //child都不选中，恢复最后一个的选中状态
                else if (checked.length === 0) {
                    target.checked = true;
                    alert("请至少选择其中一项！");
                } 
                //其他情况，去掉全选按钮的勾选状态
                else {
                    document.querySelector(wrapperId + ' input[idType="all"]').checked = false;
                }
            }
        }
    }
}

createCheckbox('#region-wrapper',[{
    value: 1,
    text: '华东'
}, {
    value: 2,
    text: '华北'
}, {
    value: 3,
    text: '华南'
}]);

createCheckbox('#product-wrapper',[{
    value: 1,
    text: '手机'
}, {
    value: 2,
    text: '笔记本'
}, {
    value: 3,
    text: '智能音箱'
}]);