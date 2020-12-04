

function burguerMenu(){
    document.querySelector('#burguer-menu').addEventListener('click', activaMenu);

    function activaMenu(e){
        this.classList.toggle('active');
        document.querySelector('#burguer-menu-target').classList.toggle('active');
    }
}

export {burguerMenu};