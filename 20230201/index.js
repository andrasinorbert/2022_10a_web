let tablazat_cime="Ez a táblázat címe";
let id="tablazat";
let fejlecek_listaja=["elso", "masodik"];

let adatok=[
    ["adat1", "adat2"], // ő kerül az első sorba
    ["adat1", "adat2"], // második sor
    ["adat1", "adat2"],
    ["adat1", "adat2"],
    ["adat1", "adat2"],
    ["adat1", "adat2"],
];
create_tablazat(
    id, 
    tablazat_cime,
    fejlecek_listaja,
    adatok);

function change_tablazat_cime(){
    let cim=$("tablazat_cime").value;
    create_tablazat(
        id, 
        cim,
        fejlecek_listaja,
        adatok);
}