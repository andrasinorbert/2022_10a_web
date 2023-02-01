function create_caption(caption_text){
    let start_tag="<caption>";
    let end_tag="</caption>";
    let tartalom=caption_text;
    return start_tag+tartalom+end_tag;
}

function create_th(oszlop_cime){
    let start_tag="<th>";
    let end_tag="</th>";
    let tartalom=oszlop_cime;
    return start_tag+tartalom+end_tag;
}

function create_td(adat){
    let start_tag="<td>";
    let end_tag="</td>";
    let tartalom=adat;
    return start_tag+tartalom+end_tag;
}

function create_tr(adat_lista, th_vagy_td){
    // th_vagy_td = "th" || "td"
    let start_tag="<tr>";
    let end_tag="</tr>";
    let tartalom="";
    for(let i=0;i<adat_lista.length;++i){
        if(th_vagy_td=="th"){
            tartalom+=create_th(adat_lista[i]);
        }else{
            tartalom+=create_td(adat_lista[i]);
        }
    }
    return start_tag+tartalom+end_tag;
}

function create_thead(fejlecek_listaja){
    let start_tag="<thead>";
    let end_tag="</thead>";
    let tartalom=create_tr(fejlecek_listaja, "th");
    return start_tag+tartalom+end_tag;
}

function create_tbody(adatok){
    let start_tag="<tbody>";
    let end_tag="</tbody>";
    let tartalom="";
    for(let i=0;i<adatok.length;++i){
        tartalom+=create_tr(adatok[i], "td");
    }
    return start_tag+tartalom+end_tag;
}

function $(id){
    return document.getElementById(id);
}
function create_tablazat(
        id, 
        caption_text, 
        fejlecek_listaja,
        adatok){
    let start_tag="<table>";
    let end_tag="</table>";
    let tartalom=
        create_caption(caption_text)+
        create_thead(fejlecek_listaja)+
        create_tbody(adatok);
    $(id).innerHTML=start_tag+tartalom+end_tag;
}

