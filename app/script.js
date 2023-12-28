const notificationsContainer = document.querySelectorAll('.notification-container');
const notifications = document.querySelectorAll('h3');
const marked = document.querySelector('#marked');


function clickNotice(){
    notificationsContainer.forEach(function(notfication){
        notfication.addEventListener("click", function(e){
            let clicked = e.target;
            e.preventDefault();
            notfication.style.backgroundColor = 'white';
            notifications.forEach(function(element){
                if (element === clicked){
                    let afterElement = getComputedStyle(element)
                    element.style.setProperty('--after-color', 'white');
                } else {
                    return;
                }
            })
        });
    })
}
clickNotice();

function clickAll(){
    marked.addEventListener('click', function(e){
        e.preventDefault();
        notificationsContainer.forEach(function(el){
            el.classList.add('read');
        });
    })
}
clickAll();



