const up = document.querySelector('.uarr');
const down = document.querySelector('.darr');

const img01 = document.getElementById('img01');
const img02 = document.getElementById('img02');
const img03 = document.getElementById('img03');
const img04 = document.getElementById('img04');
const img05 = document.getElementById('img05');


const album =[img01,img02,img03,img04,img05];

const off = document.getElementsByClassName('off');

let i = 0;

down.addEventListener('click' , function(){
  
  console.log(i);

  album[i].classList.add('d-none');
  off[i].classList.remove('d-none');
  
  i++ ;
  if(i === album.length){
    i = 0;  
  }

  album[i].classList.remove('d-none');
  off[i].classList.add('d-none');

})

up.addEventListener('click' , function(){

  console.log(i);

  album[i].classList.add('d-none');
  off[i].classList.remove('d-none');
  
  i-- ;
  if(i < 0){
    i = album.length - 1;  
  }

  album[i].classList.remove('d-none');
  off[i].classList.add('d-none');

})

