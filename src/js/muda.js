
document.querySelectorAll("input").forEach(input => { // seleciona todos os section dinamicamente
    input.value = "";
});


function selecaoSelect() { // select das opçoes (bimestral, geral e recuperação)

    click = 1;
    const p = document.getElementById(`resultP`);
    const p2 = document.getElementById(`resultA`);
    p.style.opacity = 0;
    p2.style.opacity = 0;

    
    const valorOpcao = document.getElementById("opcoes");

    const sectionSelec = document.getElementById(`${valorOpcao.value}`);


    document.querySelectorAll("section").forEach(section => { // seleciona todos os section dinamicamente
        section.style.display = "none";
    });

    sectionSelec.style.display = "block";

}
var click = 1;

function selecaoTipo() { // select tipo ponderado e aritimetica

    click = 1;

    const valorOpcao = document.getElementById("calculo");
    const p = document.getElementById(`resultP`);
    const p2 = document.getElementById(`resultA`);

    const sectionSelec = document.getElementById(`${valorOpcao.value}`);

    const div = document.getElementsByClassName("divBimes") // seleciona todos com clase de divBimes dinamicamente

    div.pon.style.display = "none";
    div.ari.style.display = "none";
    p.style.opacity = 0;
    p2.style.opacity = 0;


    sectionSelec.style.display = "block";
}



function AddInput(tipo) {

    click = click + 1;


    let ul;


    let li = document.createElement("li");
    let input = document.createElement("input");


    input.setAttribute("placeholder", ` ${click}° Nota `);
    input.setAttribute("type", `number`);

    li.appendChild(input);

    let p ;

    if (tipo == "pon") {

        p = document.getElementById("resultP");

        ul = document.getElementById("ul-pon");

        input.setAttribute("id", `BPnota${click}`);

        let inputPon = document.createElement("input");
        inputPon.setAttribute("placeholder", `vale?`);
        inputPon.setAttribute("class", `part`);
        inputPon.setAttribute("type", `number`);

        li.appendChild(inputPon);

    } else {
        p = document.getElementById("resultA");
        input.setAttribute("id", `BAnota${click}`);
        ul = document.getElementById("ul-ari");
    }

    if (ul.children.length < 10) {
        ul.appendChild(li);
    }else{
        click--;
        p.innerText = "no maximo 10";
        p.style.opacity = 5;
        p.style.color = "white";


    }
    

}

function DelInput(tipo) {

    let ul;

    if (tipo == "pon") {
        ul = document.getElementById("ul-pon");
    } else {
        ul = document.getElementById("ul-ari");
    }

    // Verifica se há pelo menos um <li> na lista antes de remover
    if (ul.children.length > 1) {
        click = click - 1;
        ul.removeChild(ul.lastChild);
    }

}

function AbrirIntegrado() {

    let div = document.getElementById("divGeral");
    let Gnota3 = document.getElementById("Gnota3");
    let Gnota4 = document.getElementById("Gnota4");

    if (div.style.display == "block") {

        div.style.display = "none";
        Gnota3.value = "";
        Gnota4.value = "";

    } else {
        div.style.display = "block";
    }



}

function AbrirNota2b() {

    let div = document.getElementById("nota2b");
    let GRnota = document.getElementById("GRnota");

    if (div.style.display == "block") {

        div.style.display = "none";
        GRnota.value = 0;

    } else {
        div.style.display = "block";
    }


}


