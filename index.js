const nav=document.querySelector('.primary-navigation');

const toggleButton = document.querySelector(".mobile-nav-toggle");

toggleButton.addEventListener("click",()=>{
const visible=nav.getAttribute('isVisible');
if(visible==='false'){
  nav.setAttribute('isVisible',true);
  toggleButton.setAttribute('aria-expanded',true);
}else{
  nav.setAttribute("isVisible", false);
  toggleButton.setAttribute("aria-expanded", false);

}
})


