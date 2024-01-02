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
    for (let i of notifications){
        console.log(notifications)
        let container = document.createElement('div');
        container.className = 'notification-container'
        container.innerHTML = i.firstName + ' ' + i.lastName;
        mainContainer.appendChild(container)
    }
}






