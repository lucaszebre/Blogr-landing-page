const open = document.getElementById('open');
const close = document.getElementById('close');
const offcanvas = document.getElementById('offcanvas');
document.addEventListener('click', (e) => {
    if (e.target === open) {
        open.style.display = 'none';
        close.style.display = 'flex';
        offcanvas.style.display = 'flex';
    } else if (e.target === close) {
        open.style.display = 'flex';
        close.style.display = 'none';
        offcanvas.style.display = 'none';
    }
})
// Dropdown Nav Mobile 
const AllArrow = document.querySelectorAll('.arrow-mobile');
const AllMenu = document.querySelectorAll('.ul-header');
for (let i = 0; i < AllArrow.length; i++) {
    AllArrow[i].addEventListener('click', (e) => {
        if(AllMenu[i].style.display === 'flex'){
            AllMenu[i].style.display = 'none';
            AllArrow[i].style.transform = 'rotate(0deg)';
    }else{
        AllMenu[i].style.display = 'flex';
        AllArrow[i].style.transform = 'rotate(180deg)';
    }
}
    )} 

const AllTitle = document.querySelectorAll('.title');
for (let i = 0; i < AllTitle.length; i++) {
    AllTitle[i].addEventListener('click', (e) => {
        if(AllMenu[i].style.display === 'flex'){
            AllMenu[i].style.display = 'none';
            AllArrow[i].style.transform = 'rotate(0deg)';
            AllArrowDesktop[i].style.transform = 'rotate(0deg)';
    }else{
        AllMenu[i].style.display = 'flex';
        AllArrow[i].style.transform = 'rotate(180deg)';
        AllArrowDesktop[i].style.transform = 'rotate(180deg)';
    }
}
    )}

// Dropdown Nav Desktop
const AllArrowDesktop = document.querySelectorAll('.arrow-pc');
for (let i = 0; i < AllArrowDesktop.length; i++) {
    AllArrowDesktop[i].addEventListener('click', (e) => {
        if(AllMenu[i].style.display === 'flex'){
            AllMenu[i].style.display = 'none';
            AllArrowDesktop[i].style.transform = 'rotate(0deg)';
    }else{
        AllMenu[i].style.display = 'flex';
        AllArrowDesktop[i].style.transform = 'rotate(180deg)';
    }
}
    )}
