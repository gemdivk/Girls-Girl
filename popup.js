function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupForm').style.display = 'none';
}
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById('popupForm').style.display = 'block';
}
function handleContactSubmit(event) {
    event.preventDefault();
    const popupEmail = document.getElementById('popupEmail').value;
    alert('Thank you for contacting us!🤍');
    closePopup();
}