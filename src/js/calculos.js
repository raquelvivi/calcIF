document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keydown", function (event) {
        if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
            event.preventDefault(); // Impede a entrada de caracteres não numéricos
        }
    });
});


function calcular(tipo) {


    let total = 0;

    if (tipo == "P") {
        let ul = document.getElementById("ul-pon");

        let totalList = [];

        total = 0;
        let totalPond = 0;

        for (let v = 0; v < ul.children.length; v++) {

            const valorUs = ul.children[v].children[0].value;

            const valeUs = ul.children[v].children[1].value;

            totalList.push({ valor: valorUs, vale: valeUs });

            totalPond = totalPond + parseInt(valeUs);

        }

        totalList.forEach(element => {
            total = total + (element.valor * element.vale)
        });

        total = (total) / totalPond
        total = parseInt(Math.round(total))


    } else {
        let ul = document.getElementById("ul-ari");

        total = 0;

        for (let v = 0; v < ul.children.length; v++) {

            const valor = ul.children[v].children[0].value;


            total = total + parseInt(valor)
        }
    }

    const p = document.getElementById(`result${tipo}`);

    resp = resposta(total);

    p.innerText = resp.res;

    p.style.opacity = 5;
    p.style.color = resp.tipo;
    p.style.backgroundColor = "rgba(0, 0, 0, 0.836)";



    console.log(resp.res);


}




function resposta(total) {


    const opcoes = [
        { "res": `você passou com media ${total}`, "tipo": "var(--colorVerde)" },

        { "res": `você reprovou com media ${total}\n Nem Recuperação resolve`, "tipo": "var(--colorRed)" },

        { "res": `Socorro Nerd!!\n Media: ${total}`, "tipo": "var(--colorVerde)" },

        { "res": `você passou para a recuperação parabens :/ \n Media ${total}\n podia ser pior vai por mim`, "tipo": "var(--coloryelon)" },

        { "res": `você sobrevivel esse ano \n com media ${total} da recuperação`, "tipo": "var(--colorVerde)" },

        { "res": `algo errado, algo errado\nResultado: ${total}\nverifique os valores inseridos`, "tipo": "red" },
    ];

    if (total <= 20) {
        return opcoes[1];
    };
    if (total <= 59) {
        return opcoes[3]
    };
    if (total <= 85) {
        return opcoes[0]
    };
    if (total <= 100) {
        return opcoes[2]
    };
    if (total > 100) {
        return opcoes[5]
    };

}


function calcularGe(tipo) {

    let total = 0

    if (tipo == "B2") {

        let b1 = document.getElementById("GRnota").value;

        total = ((60 * 5) - (parseInt(b1) * 2)) / 3

        const p = document.getElementById(`resultGR`);

        p.innerText = `você precisa de ${parseInt(Math.round(total))}\npara passar nessa materia`;

        p.style.opacity = 5;
        p.style.color = "var(--colorVerde)";

    } else {
        let total;

        let G1 = document.getElementById("Gnota1").value;
        let G2 = document.getElementById("Gnota2").value;
        let G3 = document.getElementById("Gnota3").value;
        let G4 = document.getElementById("Gnota4").value;

        const lista = [G1, G2, G3, G4];


            
            if (G3 && G4) {

                total = (parseInt(G1) + parseInt(G2) + parseInt(G3) + parseInt(G4)) / 4;

            } else {
                total = ((parseInt(G1) * 2) + (parseInt(G2) * 3)) / 5;
            }

            total = parseInt(Math.round(total));

            const p = document.getElementById(`resultG`);

            resp = resposta(total);

            p.innerText = resp.res;

            p.style.opacity = 5;
            p.style.color = resp.tipo;


        }



    }

