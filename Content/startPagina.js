// Special Computer 1
var computerbrand1 = $( "#computerBrand1" ).first().text();
var computerRelease1 = $( "#computerRelease1" ).first().text();
var computerLimitedEdition1 = $( "#computerLimitedEdition1" ).first().text();
setRarity(computerbrand1, computerRelease1, computerLimitedEdition1, "computerRarity1");

// Special Computer 2
var computerbrand2 = $( "#computerBrand2" ).first().text();
var computerRelease2 = $( "#computerRelease2" ).first().text();
var computerLimitedEdition2 = $( "#computerLimitedEdition2" ).first().text();
setRarity(computerbrand2, computerRelease2, computerLimitedEdition2, "computerRarity2");

// Special Computer 3
var computerbrand3 = $( "#computerBrand3" ).first().text();
var computerRelease3 = $( "#computerRelease3" ).first().text();
var computerLimitedEdition3 = $( "#computerLimitedEdition3" ).first().text();
setRarity(computerbrand3, computerRelease3, computerLimitedEdition3, "computerRarity3");

// Special Computer 4
var computerbrand4 = $( "#computerBrand4" ).first().text();
var computerRelease4 = $( "#computerRelease4" ).first().text();
var computerLimitedEdition4 = $( "#computerLimitedEdition4" ).first().text();
setRarity(computerbrand4, computerRelease4, computerLimitedEdition4, "computerRarity4");

// Special Computer 5
var computerbrand5 = $( "#computerBrand5" ).first().text();
var computerRelease5 = $( "#computerRelease5" ).first().text();
var computerLimitedEdition5 = $( "#computerLimitedEdition5" ).first().text();
setRarity(computerbrand5, computerRelease5, computerLimitedEdition5, "computerRarity5");

// Special Computer 6
var computerbrand6 = $( "#computerBrand6" ).first().text();
var computerRelease6 = $( "#computerRelease6" ).first().text();
var computerLimitedEdition6 = $( "#computerLimitedEdition6" ).first().text();
setRarity(computerbrand6, computerRelease6, computerLimitedEdition6, "computerRarity6");

// Special Computer 7
var computerbrand7 = $( "#computerBrand7" ).first().text();
var computerRelease7 = $( "#computerRelease7" ).first().text();
var computerLimitedEdition7 = $( "#computerLimitedEdition7" ).first().text();
setRarity(computerbrand7, computerRelease7, computerLimitedEdition7, "computerRarity7");

// Special Computer 8
var computerbrand8 = $( "#computerBrand8" ).first().text();
var computerRelease8 = $( "#computerRelease8" ).first().text();
var computerLimitedEdition8 = $( "#computerLimitedEdition8" ).first().text();
setRarity(computerbrand8, computerRelease8, computerLimitedEdition8, "computerRarity8");

function setRarity (Brandname, Release, limitedEdition, idProperty)
{ 
    var rarity = 0;

    if (Brandname == "Maingear" || Brandname == "System76" || Brandname == "TriGem" || Brandname == "Meebox" )
    {
        rarity += 4;
    }

    else if (Brandname == "Acer" || Brandname == "HP" || Brandname == "Compaq" || Brandname == "Asus" )
    {
        rarity += 6;
    }

    else if (Brandname == "Apple" || Brandname == "IBM" || Brandname == "Amiga")
    {
        rarity += 7;
    }
    
    else
    {
        rarity += 5;
    }

    var releaseRarity = (2021 - Release) * 0.1;

    rarity += releaseRarity;

    if  (limitedEdition == "Ja")
    {
        rarity += 5;
    }

    rarity = Math.round(rarity * 10) / 10

    var rareName = "";

    if (rarity <= 10)
    {
        rareName = "Geen waarde";
    }

    else if (rarity > 10 && rarity <= 25)
    {
        rareName = "Gewoon";
    }

    else if (rarity > 25 && rarity <= 35)
    {
        rareName = "Zeldzaam";
    }

    else
    {
        rareName = "Zeer zeldzaam";
    }

    document.getElementById(idProperty).innerHTML = rareName;
}