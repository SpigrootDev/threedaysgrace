// scripts.js

document.getElementById("guestbook-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const message = this.message.value;

    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${name}</strong>: <p>${message}</p><hr>`;

    document.getElementById("guestbook-entries").prepend(entry);

    this.reset();
});
