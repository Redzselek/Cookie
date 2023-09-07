function Ment() 
{
    setCookie("nev", document.getElementById("nev").value, 1);
    document.getElementById("mianaved").style.display = "none"

    document.getElementById("ezaneve").innerHTML = document.getElementById("nev").value

    document.getElementById("vanneve").style.display = "block"
}

function Ellenoriz()
{
    var n = getCookie("nev")
    if (n == "") 
    {
        document.getElementById("mianave").style.display = "block"    
        document.getElementById("vanneve").style.display = "none"    
    }
    else
    {
        document.getElementById("mianave").style.display = "block"    
        document.getElementById("ezaneve").innerHTML = n;    
        document.getElementById("vanneve").style.display = "none"    
    }
}
