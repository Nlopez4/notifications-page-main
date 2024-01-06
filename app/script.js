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

        notificationContainer.className = 'notification-container';
        leftContainer.className = 'container-left';
        rightContainer.className = 'container-right';
        userImage.className = 'userImage'
        userImage.src = notification.photo;
        notificationTag.className = 'notifications';

        
        mainContainer.appendChild(notificationContainer);
        notificationContainer.appendChild(leftContainer);
        notificationContainer.appendChild(rightContainer);
        leftContainer.appendChild(userImage);
        rightContainer.appendChild(notificationTag);

        if (notification.sub === null) {
            rightContainer.innerHTML = `<h3><span class="name">${notification.firstName + ' ' + notification.lastName}</span> ${notification.notification}</h3> <div><p class="time">${notification.time}</p></div>`;
        } else {
            rightContainer.innerHTML = `<h3><span class="name">${notification.firstName + ' ' + notification.lastName}</span> ${notification.notification} <span class="sub">${notification.sub}</span></h3> <div><p class="time">${notification.time}</p></div>`;
        };

        notificationContainer.addEventListener('click', function(e){
            e.preventDefault();
            notificationContainer.classList.add('read');
            notificationContainer.style.backgroundColor = 'white';
            let afterElement = getComputedStyle(notificationContainer);
            notificationContainer.style.setProperty('--after-color', 'white');
        });
    };
};








