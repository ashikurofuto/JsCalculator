function insert(nun) {
    document.form.textview.value =
     document.form.textview.value + nun;
}

function clear(){
    document.form.textview.value ="";
}

function back() {
    let map = document.form.textview.value;
    document.form.textview.value = map.substring(0,map.lenght - 1);
}


function equal () {
    let map = document.form.textview.value;
    if (map) {
        document.form.textview.value = eval(map);
    }
}