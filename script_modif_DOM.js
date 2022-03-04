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

// JBV - Array of images used for exercise "Modification n°4"
const imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

// JBV - Array of text elements replacing those of the 2 first cards
const textsArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web.", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

// JBV - Modification n°1 - Switch page title and sub-title to chosen alternate labels
function changeTitles(my_alternate_title, my_alternate_subtitle) {
  console.log("Modification n°1 :");
  console.log("  > Avant : " + document.getElementsByTagName("h1")[0].innerHTML);
  document.getElementsByTagName("h1")[0].innerHTML = my_alternate_title;
  console.log("  > Après : " + document.getElementsByTagName("h1")[0].innerHTML);
  console.log("  > Avant : " + document.getElementsByTagName("h1")[0].parentNode.getElementsByTagName("p")[0].innerHTML);
  document.getElementsByTagName("h1")[0].parentNode.getElementsByTagName("p")[0].innerHTML = my_alternate_subtitle;
  console.log("  > Après : " + document.getElementsByTagName("h1")[0].parentNode.getElementsByTagName("p")[0].innerHTML);
  console.log("\n");
}

// JBV - Modification n°2 - Modify both calls to action label and hyperlink target URL
function changeCallToActions(label1, link1, label2, link2) {
  call1 = document.getElementsByTagName("section")[0].getElementsByTagName("a")[0];
  call2 = document.getElementsByTagName("section")[0].getElementsByTagName("a")[1];
  console.log("Modification n°2 :");
  console.log("  > Avant : " + call1.textContent + " >> " + call1.href);
  call1.textContent = label1;
  call1.href = link1;
  console.log("  > Après : " + call1.textContent + " >> " + call1.href);
  console.log("  > Avant : " + call2.textContent + " >> " + call2.href);
  call2.textContent = label2;
  call2.href = link2;
  console.log("  > Après : " + call2.textContent + " >> " + call2.href);
  console.log("\n");
}

// JBV - Modification n°3 - Modify up-left corner navigation bar title from "Album" ('<strong>') to "The THP Experience" + Change text size to 2em
function changeLogoName(my_content, size_em) {
  console.log("Modification n°3 :");
  let tmp_strong = document.getElementsByTagName("strong")[0];
  console.log(`  > Avant : ${tmp_strong.textContent} - ${tmp_strong.style.fontSize}`);
  tmp_strong.textContent = my_content;
  tmp_strong.style.fontSize = size_em;
  console.log(`  > Après : ${tmp_strong.textContent} - ${tmp_strong.style.fontSize}`);
  console.log("\n");
}

// JBV - Modification n°4 - Load images from the above array of images URLs into the different cards
function populateImages() {
  let tmp_image_tab = document.getElementsByClassName("card-img-top");
  let tmp_length = tmp_image_tab.length;
  console.log("Modification n°4 :");
  for (let my_index = 0; my_index < tmp_length; my_index++) {
    tmp_image_tab[my_index].src = imagesArray[my_index];
    console.log("  > Source image n°" + my_index + ": " + tmp_image_tab[my_index].src);
  }
  console.log("\n");
}

// JBV - Modification n°5 - Delete the last 3 cards
function deleteThreeLastCards() {
  let my_length = document.querySelectorAll("div.card").length;
  console.log("Modification n°5 :");
  console.log("  > Avant : " + my_length + " cards");
  for (let my_index = 1; my_index <= 3; my_index++) {
    document.querySelectorAll("div.card")[my_length - 1].remove();
    my_length = document.querySelectorAll("div.card").length;
    console.log("  > Pendant (boucle n°" + my_index + "): " + my_length + " cards");
  }
  my_length = document.querySelectorAll("div.card").length;
  console.log("  > Après : " + my_length + " cards");
  console.log("\n");
}


//JBV - Modification n°6 - Modify text of the 3 first cards of the page, based on the array 'textsArray' (see on top of this file)
function changeCardsText() {
  console.log("Modification n°6 :");
  for (let my_index = 0; my_index < 3; my_index++) {
    console.log("  > Avant (carte n°" + my_index + ") : " + document.querySelectorAll('p.card-text')[my_index].innerHTML);
    document.querySelectorAll("p.card-text")[my_index].innerHTML = textsArray[my_index];
    console.log("  > Après (carte n°" + my_index + ") : " + document.querySelectorAll('p.card-text')[my_index].innerHTML);
  }
  console.log("\n");
}

// JBV - Modification n°7 - Change color of cards' "view" buttons to green (use Bootstrap 'btn-success' style)
function changeViewButtons() {
  console.log("Modification n°7 :");
  let tmp_length = document.querySelectorAll("div.btn-group").length;
  for (let my_index = 0; my_index < tmp_length; my_index++) {
    console.log("  > Avant : " + document.querySelectorAll("div.btn-group")[my_index].children[0].classList);
    // Approach #1 below does not work... Do not understand why : read only prop ? "replace" is obsolete ?
    //   document.querySelectorAll("div.btn-group")[my_index].firstChild.classList.replace("btn-outline-secondary", "btn-success");
    // Approach #2 below does not work either... For unknown reasons : read only prop ? "add" or "remove" obsolete ?
    //   document.querySelectorAll("div.btn-group")[my_index].firstChild.classList.add("btn-success");
    //   document.querySelectorAll("div.btn-group")[my_index].firstChild.classList.remove("btn-outline-secondary");
    //   document.getElementsByClassName("btn-group")[my_index].firstChild.className.replace("btn-outline-secondary", "btn-success");
    // Approach #3 below DOES WORK... I don't see the difference between ".children" and ".childNodes", however...
    document.querySelectorAll("div.btn-group")[my_index].children[0].classList.replace("btn-outline-secondary", "btn-success");
    console.log("  > Après : " + document.querySelectorAll("div.btn-group")[my_index].children[0].classList);
  }
  console.log("\n");
}


// JBV - Main program calling all requested functions
// BEGIN
//
// Modification n°1
changeTitles("Ce que j'ai appris durant THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
// Modification n°2
changeCallToActions("OK je veux tester !", "http://www.thehackingproject.org", "Non Merci", "https://www.pole-emploi.fr");
// Modification n°3
changeLogoName("The THP Experience", "2em")
// Modification n°4
populateImages();
// Modification n°5
deleteThreeLastCards();
// Modification n°6
changeCardsText();
// Modification n°7
changeViewButtons();
// Modification n°8

//
// END