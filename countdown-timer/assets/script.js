const data = {
    celebrations: [
        {
            name: 'Christmas',
            date: new Date(new Date().getFullYear(), 11, 24),
            image: 'https://images.pexels.com/photos/717988/pexels-photo-717988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]
};

var cardElement = document.getElementById('celebration');
var nameElement = document.getElementById('name');

var dayElement = document.getElementById('day');
var hourElement = document.getElementById('hour');
var minuteElement = document.getElementById('minute');
var secondElement = document.getElementById('second');

setInterval(() => {
    data.celebrations.forEach(celebration => {
        nameElement.innerHTML = celebration.name;
        cardElement.style.backgroundImage = `url(${ celebration.image })`;

        const currentDate = new Date();
        const diffMs = Math.abs(celebration.date - currentDate);

        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        secondElement.innerHTML = diffSeconds % 60;
        minuteElement.innerHTML = diffMinutes % 60;
        hourElement.innerHTML = diffHours % 24;
        dayElement.innerHTML = diffDays;
    });
}, 1000)