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

// JBV - Switch page title and sub-title to alternate labels
function changeTitles(my_alternate_title, my_alternate_subtitle) {
  console.log("Modification n°1 :");
  console.log("  > Avant : " + document.getElementsByTagName("h1")[0].innerHTML);
  document.getElementsByTagName("h1")[0].innerHTML = my_alternate_title;
  console.log("  > Après : " + document.getElementsByTagName("h1")[0].innerHTML);
  console.log("  > Avant : " + document.getElementsByTagName("h1")[0].parentNode.getElementsByTagName("p")[0].innerHTML);
  document.getElementsByTagName("h1")[0].parentNode.getElementsByTagName("p")[0].innerHTML = my_alternate_subtitle;
  console.log("  > Après : " + document.getElementsByTagName("h1")[0].parentNode.getElementsByTagName("p")[0].innerHTML);
  console.log("\nModification n°2 :");

}

// JBV - Modify up-left corner navigation bar title to titre "Album" de la navbar (en haut à gauche)
function changeCallToActions() {

}






// JBV - Main program calling all requested functions
changeTitles("Ce que j'ai appris durant THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");