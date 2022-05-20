const names = ["Hands", "Stone Pick", "Torch", "Stone Hatchet", "Spear",
    "Wooden Club", "Slingshot", "Bow-Stone", "Bow-Tranq", "Metal Pick", 
    "Metal Hatchet", "Pike", "Crossbow-Stone", "Crossbow-Tranq", "Simple Pistol",
    "Sickle", "Metal Sword", "Longneck-Simple", "Longneck-Tranq Dart", "Longneck-Shocking",
    "Shotgun", "Fabricated Pistol", "Pump-Action", "Assault Rifle", "Compound Bow-Stone",
    "Compound Bow-Tranq", "Compound Bow-Metal", "Fabricated Sniper Rifle",
    "Electric Prod", "Any Ranged Melee Attack", "Tek Gauntlets", "Tek Sword",
    "Tek Sword w Tek Gauntlets", "Tek Rifle", "Tek Railgun"];
const damage = [8, 16, 15, 20, 30, 5, 14, 55, 20, 32, 40, 55, 95, 35, 63,
    50, 90, 280, 26, 26, 640, 50, 644, 47, 74, 27, 202.5, 165, 1, 10, 265,
    200, 280, 240, 935]

function gunDmg(index)
{
    var mod = document.getElementById(names[index] + "mod").value;
    var total = Math.round(((damage[index] * (mod / 100)) + Number.EPSILON) * 100) / 100;

    return document.getElementById(names[index]).innerHTML = "Total: " + total;
}

function pelletDmg(index)
{
    var mod = document.getElementById(names[index] + "mod").value;

    if (names[index] == "Shotgun")
    {
        var pell = 10;
    }
    if (names[index] == "Pump-Action")
    {
        var pell = 14;
    }
    var total = Math.round((((damage[index] / pell) * (mod / 100)) + Number.EPSILON) * 100) / 100;

    return document.getElementById(names[index] + "per").innerHTML = "Per Pellet: " + total;
}

function meleeDmg(index)
{
    var mod = document.getElementById(names[index] + "mod").value;
    var human = document.getElementById(names[index] + "hum").value;

    var total = Math.round(((damage[index] * (mod / 100) * (human / 100)) + Number.EPSILON) * 100) / 100;

    return document.getElementById(names[index]).innerHTML = "Total: " + total;
}