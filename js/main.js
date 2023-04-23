// Variables

// Gestion des fenêtres modales des pages

var accueil = document.querySelectorAll(".accueil")
var livres = document.querySelectorAll(".livres")
var accueil_lien = document.querySelector("#accueil_lien")
var livre_lien = document.querySelector("#livre_lien")
var livre_lien2 = document.querySelector("#livre_lien2")
var a_propos_lien = document.querySelector("#a_propos_lien")
var a_propos_lien2 = document.querySelector("#a_propos_lien2")

// Gestion du profil
var profileImages = document.querySelectorAll(".profile-img")
var i = 0

// Loader
var loader = document.querySelector(".loader")

// Traitement

// Loader

window.onload = function () {
    loader.classList.add("end")
}

// Gestion du profil

profileImages[1].style.display = "none"

function clearImage() {
    for (var j=0; j<profileImages.length; j++) {
        profileImages[j].style.display = "none"
    }
}

setInterval(() => {
    clearImage()
    profileImages[i].style.display = "block"
    i = (i==0) ? 1 : 0
    
}, 5000);

// Gestion des fenêtres modales des pages

function cacheLivres() {
    livres[0].style.display = "none"
    livres[1].style.display = "none"
}

function cacheHome() {
    accueil[0].style.display = "none"
    accueil[1].style.display = "none"
    document.body.classList.add("bg-light")
}

function afficheHome() {
    accueil[0].style.display = "block"
    accueil[1].style.display = "block"
    document.body.classList.remove("bg-light")
}

function afficheLivres() {
    livres[0].style.display = "block"
    livres[1].style.display = "block"
    document.body.classList.remove("bg-light")
}
 
cacheLivres()

livre_lien.onclick = function (e) {
    e.preventDefault()
    
    afficheLivres()
    cacheHome()
}

livre_lien2.onclick = function (e) {
    e.preventDefault()
    
    afficheLivres()
    cacheHome()
}

accueil_lien.onclick = function (e) {
    e.preventDefault()
    
    cacheLivres()
    afficheHome()
}

a_propos_lien.onclick = function (e) {
    e.preventDefault()
    
    afficheHome()
    cacheLivres()

    scrollTo(0, 1500)
}
a_propos_lien2.onclick = function (e) {
    e.preventDefault()
    
    afficheHome()
    cacheLivres()

    scrollTo(0, 1500)
}