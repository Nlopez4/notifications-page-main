const notificationsContainer = document.querySelectorAll('.notification-container');
const notifications = document.querySelectorAll('h3');

function clickNotice(){
    notificationsContainer.forEach(function(notfication){
        notfication.addEventListener("click", function(e){
            let clicked = e.target;
            console.log(clicked)
            e.preventDefault();
            notfication.style.backgroundColor = 'white';
            notifications.forEach(function(element){
                if (element === clicked){
                    let afterElement = getComputedStyle(element)
                    element.style.setProperty('--after-color', 'white');
                }
            })
        });
    })
}
clickNotice()

