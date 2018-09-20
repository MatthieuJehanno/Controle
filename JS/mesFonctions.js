function Exo1()
{
    //alert("EXO1");
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesCategories.php",
            success:function(data)
            {
                // On vide la DIV
                $('#divCategories').empty();
                $('#divCategories').append(data);
            },
            error:function()
            {
                alert("Erreur sur les activités");
            }
        }
    );
}

function AfficherLesServices()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getLesServices.php",
            data:"id="+$('#lstCategorie').val(),
            success:function(data)
            {
                // On vide la DIV
                $('#divServices').empty();
                $('#divServices').append(data);
            },
            error:function()
            {
                alert("Erreur sur les activités");
            }
        }
    );
}

function Exo2()
{
    $.ajax
    (
        {
            type:"get",
            url:"PHP/getConnexions.php",
            success:function(data)
            {
                // On vide la DIV
                $('#divCategories').empty();
                $('#divCategories').append(data);
            },
            error:function()
            {
                alert("Erreur sur les activités");
            }
        }
    );
}
