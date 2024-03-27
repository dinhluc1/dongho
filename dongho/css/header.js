var hinh =[
    'img/br5.jpeg',
    'img/br4.jpg',
    'img/asd.jpg',
    'img/br9.jpeg',
];
var index =0;

function next(){
index++;
if(index == hinh.length) index=0
document.getElementById('img').src = hinh[index]

}

function prev(){
    index--;
    if (index<0) index=hinh.length-1
    document.getElementById('img').src = hinh[index]
    
    }

next(hinh[0])
setInterval('next()',1500)