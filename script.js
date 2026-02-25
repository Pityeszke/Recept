const receptek = [
    {
        nev: "Palacsinta",
        hozzavalok: ["tojás", "liszt", "tej", "cukor"]
    },
    {
        nev: "Rántotta",
        hozzavalok: ["tojás", "sajt"]
    },
    {
        nev: "Sajtos paradicsomos omlett",
        hozzavalok: ["tojás", "sajt", "paradicsom"]
    },
    {
        nev: "Grízes tészta",
        hozzavalok: ["liszt", "cukor", "vaj"]
    },
    {
        nev: "Paradicsomos tészta",
        hozzavalok: ["liszt", "paradicsom", "sajt"]
    },
    {
        nev: "Sajtos melegszendvics",
        hozzavalok: ["sajt", "vaj"]
    },
    {
        nev: "Túrós palacsinta",
        hozzavalok: ["tojás", "liszt", "tej", "cukor", "túró"]
    },
    {
        nev: "Csirkés rizs",
        hozzavalok: ["csirke", "rizs", "só"]
    },
    {
        nev: "Sült krumpli",
        hozzavalok: ["krumpli", "só", "olaj"]
    },
    {
        nev: "Rizses hús",
        hozzavalok: ["csirke", "rizs", "só", "olaj"]
    },
    {
        nev: "Krumplipüré",
        hozzavalok: ["krumpli", "vaj", "tej", "só"]
    },
    {
        nev: "Sajtos tészta",
        hozzavalok: ["liszt", "sajt", "vaj"]
    },
    {
        nev: "Tojásos nokedli",
        hozzavalok: ["tojás", "liszt", "só"]
    },
    {
        nev: "Bundás kenyér",
        hozzavalok: ["tojás", "tej", "só", "olaj"]
    },
    {
        nev: "Tejeskávé",
        hozzavalok: ["tej", "cukor"]
    },
    {
        nev: "Csirkepörkölt",
        hozzavalok: ["csirke", "olaj", "só", "paradicsom"]
    },
    {
        nev: "Sajtos krumpli",
        hozzavalok: ["krumpli", "sajt", "vaj"]
    },
    {
        nev: "Paradicsomleves",
        hozzavalok: ["paradicsom", "só", "cukor"]
    },
    {
        nev: "Rizsfelfújt",
        hozzavalok: ["rizs", "tej", "cukor", "tojás"]
    },
    {
        nev: "Túrós csusza",
        hozzavalok: ["liszt", "túró", "tejföl", "só"]
    },
    {
        nev: "Sajtos omlett",
        hozzavalok: ["tojás", "sajt", "só"]
    }
];

// DOM elemek lekérése
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchBtn = document.querySelector('button');
const eredmenyek = document.getElementById('eredmenyek') || document.createElement('div');

// Recept keresés függvény
function receptekeresChecker() {
    const kivalasztottHozzavalok = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.nextElementSibling?.textContent.trim().toLowerCase());

    if (kivalasztottHozzavalok.length === 0) {
        eredmenyek.textContent = 'Nincs kiválasztott összetevő.';
        return;
    }

    const szurtReceptek = receptek.filter(recept =>
        kivalasztottHozzavalok.every(hozzavalo => 
            recept.hozzavalok.some(h => h.toLowerCase() === hozzavalo)
        )
    );

    if (szurtReceptek.length === 0) {
        eredmenyek.textContent = 'Nincs találat.';
    } else {
        eredmenyek.innerHTML = szurtReceptek
            .map(recept => `<p><strong>${recept.nev}</strong></p>`)
            .join('');
    }
}

// Event listener
if (searchBtn) {
    searchBtn.addEventListener('click', receptekeresChecker);
}