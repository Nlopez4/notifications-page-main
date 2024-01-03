// const notificationsContainer = document.querySelectorAll('.notification-container');
const mainContainer = document.querySelector('#main-container');
const markAll = document.querySelector('#marked');

async function renderData(){
    const response = await fetch("notifications.json");
    const data = await response.json();
    createElements(data);
}
renderData();

function createElements(data){
    const {notifications} = data;
    for (let notification of notifications){
        const notificationContainer = document.createElement('div');
        const leftContainer = document.createElement('div');
        const userImage = document.createElement('img');
        const rightContainer = document.createElement('div');
        const notificationTag = document.createElement('a');
        const time = document.createElement('p');

        notificationContainer.className = 'notification-container';
        leftContainer.className = 'container-left';
        rightContainer.className = 'container-right';
        rightContainer.innerHTML = `<h3><span class="name">${notification.firstName + ' ' + notification.lastName}</span> ${notification.notification} <span class="sub">${notification.sub}</span></h3>`
        userImage.src = notification.photo;
        notificationTag.className = 'notifications';
        time.className = 'time';
        time.innerHTML = notification.time;
        
        mainContainer.appendChild(notificationContainer);
        notificationContainer.appendChild(leftContainer);
        notificationContainer.appendChild(rightContainer);
        leftContainer.appendChild(userImage);
        rightContainer.appendChild(notificationTag);
        rightContainer.appendChild(time);

    }
}








