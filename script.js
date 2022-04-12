

//dashboard extension animation
var dashboard = document.querySelector('.dashboard');
var dash_btn = document.querySelector('.dash-item');
var dash_text = document.querySelectorAll('.dash-item h2');

dash_btn.addEventListener('click', e =>{
    for(let i=0;i<dash_text.length;i++){
        dash_text[i].classList.toggle('item-show');
    }
    dashboard.classList.toggle('dash-extended');
})




