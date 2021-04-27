
var toan = '';
    function toan_hang(x) {
        var kq = document.getElementById("txtkq").value;
        var so = kq + x;
        txtkq.value = so
    }
    
    function toan_tu(t) {
        a = document.getElementById("txtkq").value;
        toan = t;
        document.getElementById("txtkq").value = ""

    }
    function lam_lai(){
        a = null
        b = null
        toan = null
        document.getElementById("txtkq").value = ""
    }
    function thuc_hien() {
    b = document.getElementById("txtkq").value;
    switch (toan){
        case '+':
            var c = Number(a) + Number(b);
            document.getElementById("txtkq").value = c;
            break;
        case '-':
            var c = Number(a) - Number(b);
            document.getElementById("txtkq").value = c;
            break;
        case '*':
            var c = Number(a) * Number(b);
            document.getElementById("txtkq").value = c;
            break;
        case '/':
            var c = Number(a) / Number(b);
            document.getElementById("txtkq").value = c;
            break;
    }
}
