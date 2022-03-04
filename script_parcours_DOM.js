/******************************/
/*                            */
/*   Made with love & sweat   */
/*                            */
/*             by             */
/*                            */
/*      -~={ GIBBZ }=~-       */
/*                            */
/*  (c) 2022 Itemacy for THP  */
/******************************/

console.log("QUESTION n°1 - Nombre de tags '<p>' : " + document.getElementsByTagName("p").length);
console.log("QUESTION n°2.a - Contenu HTML du tag portant l'ID 'coucou' : " + document.getElementById("coucou").innerHTML);
console.log("QUESTION n°2.b - Contenu TEXT du tag portant l'ID 'coucou' : " + document.getElementById("coucou").innerText);
console.log("QUESTION n°2.c - Contenu CONTENT du tag portant l'ID 'coucou' : " + document.getElementById("coucou").textContent);
console.log("QUESTION n°3 - TEXTE du 3ème élément '<a>' de la page : " + document.getElementsByTagName("a")[2].innerHTML);
console.log("QUESTION n°3 - URL du 3ème élément '<a>' de la page : " + document.getElementsByTagName("a")[2].href);
console.log("QUESTION n°4 - Nombre d'éléments de la classe 'compte-moi' : " + document.getElementsByClassName("compte-moi").length);
console.log("QUESTION n°5 - Nombre d'éléments '<li>' qui sont de la classe 'compte-moi' : " + document.querySelectorAll("li.compte-moi").length);
console.log("QUESTION n°6 - Nombre d'éléments '<li>' compris dans une '<ol>' et de classe 'compte-moi' : " + document.querySelectorAll("ol > li.compte-moi").length);
console.log("QUESTION n°7 - Résultat du 'jeu de piste' : " + document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].innerHTML);

