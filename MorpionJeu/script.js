//variables globales :

var nombreTour;
var alternanceOX = 0;
var scoreO = 0;
var scoreX = 0;


function init()
{
    nombreTour = 1;
    $('td').html('');

    if (scoreO == 0 && scoreX == 0)
    {
        $("#resultat").html("<strong>Scores :</strong><br> O -> 0<br> X -> 0");
    }

    if (scoreO > 0 && scoreO == scoreX)
    {
        $("#resultat").html("<strong>Scores :</strong><br> O -> "+scoreO+"<br> X -> "+scoreX);
    }

    else if (scoreO > scoreX)
    {
        $("#resultat").html("<strong>Scores :</strong><br> O -> "+scoreO+"<br> X -> "+scoreX);
    }

    else if (scoreO < scoreX)
    {
        $("#resultat").html("<strong>Scores :</strong><br> O -> "+scoreO+"<br> X -> "+scoreX);
    }
    
}

$("#init").click(init);

//affichage O ou X au clic sur une case :
function caseClick()
{
    //récupération de la cellule cliquée
    var cell = $(this);
    //uniquement si la cellule est vide
    if (cell.html() == '')
    {
        //affichage du O ou du X en fonction du tour
        if (alternanceOX%2 == 0)
        {
           cell.html("X"); 
        }
        else
        {
            cell.html("O"); 
        }
        alternanceOX++;
        nombreTour++;

        //conditions de victoire
        if (
            ($('#case1').html() == $('#case2').html() && $('#case1').html() == $('#case3').html() && $('#case1').html() != '') ||
            ($('#case4').html() == $('#case5').html() && $('#case4').html() == $('#case6').html() && $('#case4').html() != '') ||
            ($('#case7').html() == $('#case8').html() && $('#case7').html() == $('#case9').html() && $('#case7').html() != '') ||
            ($('#case1').html() == $('#case4').html() && $('#case1').html() == $('#case7').html() && $('#case1').html() != '') ||
            ($('#case2').html() == $('#case5').html() && $('#case2').html() == $('#case8').html() && $('#case2').html() != '') ||
            ($('#case3').html() == $('#case6').html() && $('#case3').html() == $('#case9').html() && $('#case3').html() != '') ||
            ($('#case3').html() == $('#case5').html() && $('#case3').html() == $('#case7').html() && $('#case3').html() != '') ||
            ($('#case1').html() == $('#case5').html() && $('#case1').html() == $('#case9').html() && $('#case1').html() != ''))
        {
            //définition du vainqueur de la manche
            if (alternanceOX % 2 == 0)
            {
                scoreO++;
                alert("O a gagné ! \n \nScores :\n O -> "+scoreO+"\n X -> "+scoreX);
            }
            else
            {
                scoreX++;
                alert("X a gagné ! \n \nScores :\n O -> "+scoreO+"\n X -> "+scoreX);
            }

            init();
        }

        // conditions d'égalité
        else if (nombreTour > 9)
        {
            alert("Egalité ! \n \nScores :\n O > "+scoreO+"\n X > "+scoreX);
            init();
        }
    }
}

$('td').click(caseClick);