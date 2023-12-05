
//-------------------------MINDEN OLDALON, OLDAL TETEJERE VEZETO NYIL **SAJAT**-------------------------
let felgomb = document.getElementById("felfele_nyil")
let kepernyomagassag = Number(screen.height) / 2
window.onscroll = function () {
    megjelenik()
}

function megjelenik() {
    if (document.body.scrollTop > kepernyomagassag || document.documentElement.scrollTop > kepernyomagassag) {
        felgomb.style.display = "block";
    }
    else {
        felgomb.style.display = "none";
    }
}
function felugrik() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//-------------------------KEZDOLAP OLDALON, TUDTAD GOMB **RESZBEN SAJAT**-------------------------
document.addEventListener("DOMContentLoaded", function () {
    let tgomb = document.getElementById("tudtad_gomb");
    if (tgomb) {
        tgomb.addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = null;
            } else {
                content.style.maxHeight = content.scrollHeight * 1.5 + "px";
                content.style.padding = "2vh";
            }

        });
    }
})

//-------------------------TANCSTILUSOK OLDALON, GALERIA JQUERY-VEL-------------------------
$(document).ready(function () {
    $('#galeria').galleria(
        width = 500,
        height = 500
    );
});

//-------------------------TANCSTILUSOK OLDALON, URLAPVIZSGAAT JAVASCRIPT-EL **SAJAT**------------------------
document.addEventListener("DOMContentLoaded", function () {
    function kalk() {
        const elso_valasz = Number(document.getElementById("kedvenc_kep").value);
        const masodik_valasz = Number(document.getElementById("valasztos").value);
        const harmadik_valasz = document.getElementById("sajat_valasz").value;
        const tancok = ["Argentin tangó", "Bécsi keringő", "Cha-cha-cha", "Jive", "Mambó", "Paso doble", "Quickstep", "Rumba", "Szamba", "Salsa"];

        if (harmadik_valasz == "") {
            document.getElementById("teszt_visszajelzes").innerHTML = `Kérlek válaszolj a harmadik kérdésre (is)!`;

        } else {
            if (masodik_valasz == 0 || masodik_valasz == NaN) {
                if (isNaN(elso_valasz) || elso_valasz == 0) {
                    document.getElementById("teszt_visszajelzes").innerText = "Sajnos a megadott adatok hiányosak/ helytelenek. Próbálkozz újra!";
                } else {
                    document.getElementById("teszt_visszajelzes").innerHTML = `A hozzád legjobban illő táncstílus: <strong>${tancok[elso_valasz - 1]}<br></strong> (Sajnos a második válaszodat nem tudjuk értelmezni. Ha pontosabb képet szeretnél kapni, akkor próbálkozz újra!)`;
                }
            }
            else {
                if (isNaN(elso_valasz) || elso_valasz == 0 && masodik_valasz !== 0) {
                    document.getElementById("teszt_visszajelzes").innerHTML = `A hozzád legjobban illő táncstílus: <strong>${tancok[masodik_valasz]}<br></strong> (Sajnos az első válaszod nem egy szám 1 és 8 között. Ha pontosabb képet szeretnél kapni, akkor próbálkozz újra!)`;
                } else {
                    const valasz_ossz = elso_valasz - 1 + masodik_valasz;
                    megoldas = tancok[valasz_ossz];
                    document.getElementById("teszt_visszajelzes").innerHTML = `A hozzád legjobban illő táncstílus: <strong>${megoldas}</strong>`;
                }
            }
        }
    }
    document.getElementById("teszt_bekuldo").addEventListener("click", kalk);
    document.getElementById("myform").addEventListener("submit", function (e) {
        e.preventDefault();
    });
});

//-------------------------JELENTKEZÉS OLDAON, URLAP UJRA (RESET) GOMB **SAJAT**-------------------------
function elorol() {
    document.getElementById("vezetek").focus()
}

//-------------------------JELENTKEZES OLDALON, URLAP VALIDALAS JQUERY-VEL-------------------------
$(document).ready(function () {
    $("#jelentkezes_urlap").validate({
        rules: {
            vnev: "required",
            knev: "required",
            szul_datum: "required",
            email: {
                required: true,
                email: true
            },
            elfogad_check: {
                required: true,
            },
        },
        messages: {
            vnev: "Kérlek add meg a vezetékneved!",
            knev: "Kérlek add meg az utónevedet!",
            szul_datum: {
                required: "Kérlek válaszd ki a születési dátumodat!",

            },
            email: "Kérlek add meg az email címedet!",
            elfogad_check: "Kérem fogadja el a felhasználási feltételeket!",
        },

    });
});