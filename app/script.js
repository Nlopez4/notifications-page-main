const notificationsContainer = document.querySelectorAll('.notification-container');
const markAll = document.querySelector('#marked');

function clickNotice(){
    notificationsContainer.forEach(function(notfication){
        notfication.addEventListener("click", function(e){
            e.preventDefault();
            notfication.style.backgroundColor = 'white';
            let afterElement = getComputedStyle(notfication)
            notfication.style.setProperty('--after-color', 'white');
        });
    });
    markAll.addEventListener('click', function(e){
        e.preventDefault();
        notificationsContainer.forEach(function(el){
            el.classList.add('read');
            el.style.backgroundColor = 'white';
            let afterElement = getComputedStyle(el)
            el.style.setProperty('--after-color', 'white');
        });
    });
};
clickNotice();




