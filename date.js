function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    document.getElementById('dateTime').innerText = now.toLocaleString('en-US', options);
}
setInterval(updateDateTime, 1000);
updateDateTime();