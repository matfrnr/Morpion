// Variables globales
var nombreTour;
var alternanceOX = 0;
var scoreO = 0;
var scoreX = 0;
var jeuTermine = false; // Ajoutez cette variable


function init() {
    nombreTour = 1;
    alternanceOX = 0;
    jeuTermine = false;
    $("td").html("");
  
    if (scoreO == 0 && scoreX == 0) {
      $("#resultat").html("<strong>Scores :</strong><br> O -> 0<br> X -> 0");
    }
  }
  
  $("#init").click(init);

// Fonction pour vérifier le match nul
function estMatchNul() {
  var casesRemplies = 0;
  $("td").each(function () {
    if ($(this).html() !== "") {
      casesRemplies++;
    }
  });
  return casesRemplies === 9; // Il y a 9 cases au total
}

// Affichage O ou X au clic sur une case
function caseClick() {
  // Récupération de la cellule cliquée
  var cell = $(this);
  // Uniquement si la cellule est vide
  if (cell.html() == "" && !jeuTermine) {
    // Affichage du O ou du X en fonction du tour
    if (alternanceOX % 2 == 0) {
      cell.html("X");
    } else {
      cell.html("O");
    }
    alternanceOX++;
    nombreTour++;

    // Conditions de victoire
    if (
      ($("#case1").html() == $("#case2").html() &&
        $("#case1").html() == $("#case3").html() &&
        $("#case1").html() != "") ||
      ($("#case4").html() == $("#case5").html() &&
        $("#case4").html() == $("#case6").html() &&
        $("#case4").html() != "") ||
      ($("#case7").html() == $("#case8").html() &&
        $("#case7").html() == $("#case9").html() &&
        $("#case7").html() != "") ||
      ($("#case1").html() == $("#case4").html() &&
        $("#case1").html() == $("#case7").html() &&
        $("#case1").html() != "") ||
      ($("#case2").html() == $("#case5").html() &&
        $("#case2").html() == $("#case8").html() &&
        $("#case2").html() != "") ||
      ($("#case3").html() == $("#case6").html() &&
        $("#case3").html() == $("#case9").html() &&
        $("#case3").html() != "") ||
      ($("#case3").html() == $("#case5").html() &&
        $("#case3").html() == $("#case7").html() &&
        $("#case3").html() != "") ||
      ($("#case1").html() == $("#case5").html() &&
        $("#case1").html() == $("#case9").html() &&
        $("#case1").html() != "")
    ) {
      // Définition du vainqueur de la manche
      if (alternanceOX % 2 == 0) {
        scoreO++;
        setTimeout(function () {
          alert(
            "O a gagné ! \n \nScores :\n O -> " + scoreO + "\n X -> " + scoreX
          );
          init();
        }, 1000); // Délai d'une seconde (1000 millisecondes)
      } else {
        scoreX++;
        setTimeout(function () {
          alert(
            "X a gagné ! \n \nScores :\n O -> " + scoreO + "\n X -> " + scoreX
          );
          init();
        }, 1000); // Délai d'une seconde (1000 millisecondes)
      }
      jeuTermine = true; // Le jeu est terminé
    } else if (estMatchNul()) {
      setTimeout(function () {
        alert("Match nul !");
        init();
      }, 1000); // Délai d'une seconde (1000 millisecondes)
      jeuTermine = true; // Le jeu est terminé en cas de match nul
    }
  }
}

$("td").click(caseClick);
