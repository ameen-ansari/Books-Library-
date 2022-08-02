let book = document.getElementById('exampleFormControlInput1')
let text = document.getElementById('exampleFormControlTextarea1')
let a = document.getElementById('exampleRadios1')
let b = document.getElementById('exampleRadios2')
let c = document.getElementById('exampleRadios3')
let save = document.getElementsByClassName('save')[0]
let clear = document.getElementsByClassName('clear')[0]
let table = document.getElementsByClassName('table')[0]

// console.log(book,text,a,b,c,save,clear,table);

objmk = function (name,fname,type) {
    this.name = name
    this.fname = fname
    this.type = type
}
var array = [1]
objmk.prototype.show = function () {
    table.innerHTML +=  `<tr class="tr">
    <td >${array}</td>
    <td class="w-25">${this.name}</td>
    <td class="w-25">${this.fname}</td>
    <td class="w-25">${this.type}</td>
    <td class="w-25"><button type="button" onclick="(del(this))" class="btn btn-success rounded btn-sm">Delete</button></td>
</tr>`
}
save.addEventListener('click',function() {
    console.log('click event');
    let name = book.value
    let fname = text.value
    if (a.checked === true) {var type = 'a' }
    else if (b.checked === true) {var type = 'b' }
    else if (c.checked === true) {var type = 'c' };
    var obj1 = new objmk(name,fname,type)
    console.log(obj1);
    obj1.show()
    book.value = ""
    text.value = ""
    array.length = array++
})
clear.addEventListener('click',function () {
    let conf = confirm('You are Sure to Delete All Library Books')
    if(conf === true){
    table.innerHTML = `<tr>
    <th >No.</th>
    <th class="w-25">Books</th>
    <th class="w-25">Writer</th>
    <th class="w-25">Type</th>
    <th class="w-25">Delete button</th>
</tr>`
array = [1]
}})
del = (e)=>{
    var r = e.parentElement.parentElement.remove()
    console.log(r);
    // array.length = array--
   
}

