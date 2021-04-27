var nameProduct = document.getElementById('name-product')
var saveBtn = document.getElementById('save-data')

function checkName() {
    if(nameProduct.value == "" ){
        nameProduct.placeholder = 'Mời nhập đầy đủ tên sản phẩm';
        nameProduct.style.border = '1px solid red'
        return false;
    }
    return true;
}
function name() {
    if(nameProduct.value.length <5 || nameProduct.value.length > 100){
        nameProduct.placeholder ='tên giới hạn 5-100 kí tự!'
        nameProduct.style.border = '1px solid red'
        return false
    }
    return true;
}
var price = document.getElementById('price-product')

function checkprice() {
    if(price.value == "" ){
        alert('không để trống');
        price.style.border = '1px solid red'
        return false;
    }
    return true;
}

saveBtn.addEventListener('click', function() {
    checkName() &&
    checkprice() &&
    name()
})
//================thêm======
function them() {
    
    var tr = document.createElement('tr');
    
    var th1 = document.createElement('th');
    td.innerHTML = document.getElementById('name-product').value;
    tr.appendChild(th1);
    var th2 = document.createElement('th');
    td.innerHTML = document.getElementById('price-product').value;
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    td.innerHTML = document.getElementById('list-product').value;
    tr.appendChild(th3);
    var th4 = document.createElement('th');
    td.innerHTML = document.getElementById('status-product').value;
    tr.appendChild(th4);

    document.getElementById('giohang').appendChild(tr);
}
