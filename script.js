function toggleSummary(summaryId) {
    const summary = document.getElementById(summaryId);
    if (summary.style.display === "block") {
        summary.style.display = "none";
    } else {
        summary.style.display = "block";
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
});
