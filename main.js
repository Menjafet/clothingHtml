//hide menu when display is mobile
const mobileMenu = () => {
    if(document.getElementById('menu').display == 'flex'){
        //nw
        document.getElementById('menu').display = 'none';
    }else{
        document.getElementById('menu').display = 'flex';
    }
    //document.getElementById('menu-toggle').addEventListener('click', mobileMenu());
}
document.getElementById('menu-toggle').addEventListener('click', mobileMenu());
const resetMenu = () => {
    if(window.innerWidth >= 900){
        document.getElementById('menu').display = 'flex';
    }else if(window.innerWidth < 900){
        document.getElementById('menu').display = 'none';
    }
}
window.addEventListener('resize', resetMenu())