const imgs=document.querySelectorAll('.header-slider ul img');
const prev=document.querySelector('.control-prev');
const next=document.querySelector('.control-next');

let n=0;

function changeImg(){
  for(let i=0; i<imgs.length; i++){
    imgs[i].style.display='none';
  }
  imgs[n].style.display='block';
}
changeImg();

 prev.addEventListener('click',function(){
  n--;
  if(n<0){
    n=imgs.length-1;
  }
  changeImg();
 })

 next.addEventListener('click',function(){
  n++;
  if(n>=imgs.length){
    n=0;
  }
  changeImg();
 })

 const scrollContainer=document.querySelectorAll('.products');

 for(const container of scrollContainer){
  container.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
  })
 }
