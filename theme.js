
function setDarkTheme(){
    $('body').css({ "background-color": "#212121" });
    $('.header').css({ "background": "#181818" });
    $('.offer').css({ "background": "#181818" });
    $('.title,.offer-title').css({ "color": "white" });
    $('.effects').css({"color" : "white"});
    $('.cart').css({"filter" : "invert()"});
    $('.icon').attr("src","images/logo-white.png");
    $(':root').css({"--textColor":"#D1D0D0"})
    $('.col-3 p').css({"color" : "#D1D0D0"});
    $('#light').prop("checked", true);
}

function setLightTheme(){
    $('body').css({ "background-color": "white" });
    $('.header').css({ "background": "radial-gradient(#fff, #ffd6d6)" });
    $('.offer').css({ "background": "radial-gradient(#fff, #ffd6d6)" });
    $('.title,.offer-title').css({ "color": "#555" });
    $('.cart').css({"filter" : "initial"});
    $('.icon').attr("src","images/logo.png");
    $(':root').css({"--textColor":"#555"})
    $('.col-3 p').css({"color" : "#777"});
    $('#light').prop("checked", false);
}

var prefersDarkThemeMql = window.matchMedia("(prefers-color-scheme: dark)");

prefersDarkThemeMql.addEventListener("change", function(mql) {
    if (localStorage.getItem("darkmode") === null && mql.matches) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
})

$(document).ready(function ()
{

    if (
        localStorage.getItem("darkmode") == "true" ||
        (localStorage.getItem("darkmode") === null && prefersDarkThemeMql.matches)
    )
    {
        setDarkTheme();
    }

    $('#light').on("change paste keyup", function (e)
    {
        if (!e.target.checked)
        {
            setLightTheme();
            localStorage.setItem("darkmode", false);
        }
        else
        {
            setDarkTheme();
            localStorage.setItem("darkmode", true);
        }
    });
});

