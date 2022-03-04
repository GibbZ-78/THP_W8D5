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

// JBV - Array of images used for exercise "Modification #"
const imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

// JBV - Switch page title and sub-title to alternate labels
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

// JBV - Modify both calls to action label and hyperlink target URL
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

// JBV - Modify up-left corner navigation bar title to 
function changeLogoName() {
  console.log("Modification n°3 :");

  console.log("\n");
}

// JBV - Load images from the above array of images URLs into the different cards
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



// JBV - Main program calling all requested functions
changeTitles("Ce que j'ai appris durant THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
changeCallToActions("OK je veux tester !", "http://www.thehackingproject.org", "Non Merci", "https://www.pole-emploi.fr");
changeLogoName();
populateImages();