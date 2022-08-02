let book = document.getElementById('exampleFormControlInput1')
let texta = document.getElementById('exampleFormControlTextarea1')
let a = document.getElementById('exampleRadios1')
let b = document.getElementById('exampleRadios2')
let c = document.getElementById('exampleRadios3')
let save = document.getElementsByClassName('save')[0]
let clear = document.getElementsByClassName('clear')[0]
let table = document.getElementsByClassName('table')[0]

objm = function(name,text,val){
    this.name = name
    this.text = text
    this.val = val
}
save.addEventListener('click',()=>{
    let name = book.value
    let text = texta.value
    let val;
    if(a.checked === true){val = 'a'}
    else if(b.checked === true){val = 'b'}
    else if(c.checked === true){val = 'c'}
    var obj1 = new objm(name,text,val) 
    console.log(obj1);
    book.value = ""    
    text.value = ""    
})