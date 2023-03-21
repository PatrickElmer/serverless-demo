const rtr = document.querySelector("body")

window.addEventListener("DOMContentLoaded", onRouteChange)
window.addEventListener("hashchange", onRouteChange)

function onRouteChange() {
    let uri = window.location.hash.substr(1) || 'index'
    fetch(`http://127.0.0.1:5000/${uri}`)
        .then(res => { return res.json() })
        .then(data => { rtr.innerHTML = data.html })
}
