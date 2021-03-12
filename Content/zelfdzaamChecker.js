$('#SearchByName').click(function() {
   if($('#SearchByName').is(':checked')) 
    { 
      $('#inputText').get(0).type = 'text';
       document.getElementById("searchByLabel").innerHTML = "Zoek computer op naam:";
    }
});

$('#SearchByBrand').click(function() {
   if($('#SearchByBrand').is(':checked'))
    { 
      $('#inputText').get(0).type = 'text';
       document.getElementById("searchByLabel").innerHTML = "Zoek computer op merk:";
    }
});

$('#SearchByYear').click(function() {
   if($('#SearchByYear').is(':checked')) 
    { 
      $('#inputText').get(0).type = 'number';
       document.getElementById("searchByLabel").innerHTML = "Zoek computer op jaartal:";
    }
});

$( "#SearchComputer" ).click(function() 
{
   var buttonText = $( "#SearchComputer" ).text();
   var inputText = $("#inputText").val();
   if (inputText != "")
   {
      if (buttonText == "Ga terug")
      {
         $("#title2").css("visibility","visible");
         $("#computersSection").css("visibility","visible");
         $("#goToTop").css("visibility","visible");
         $("#ComputerSearched").css("visibility","hidden");
         $("#SearchComputer").text("Zoek waarde");
         $("input:text").val("");
      }
   
      else if (buttonText == "Zoek waarde")
      {
         var FoumdRandom = Math.floor(Math.random() * 7);

         if (FoumdRandom != 1)
         {
            var Random = Math.floor(Math.random() * 16);
            var Name = ['CoBra Z8',' Lynoxovia Z100','Coleco Adam A21','PET V19','Addarno A45 Plus','Amiga V199','Cardanos KV9','VTech Antom','Dittik VA','Dantom V2','Exitiy Loktov','Furious Adarom','Katari VK','Lonovia 1000','Katari V2','HoneyWell V2'];
            $("#computerName").text(Name[Random]);
            Random = Math.floor(Math.random() * 16);

            var Brands = ['Electron', 'BBC', 'Acorn', 'Amstrad', 'Apple','Atari','Maingear','System76','TriGem','Meebox','Acer','HP','Compaq','IBM','Amiga','Brasov'];
            $("#searchComputerBrand").text(Brands[Random]);
            Random = Math.floor(Math.random() * 16);

            var Years = [1940, 1945, 1950, 1955, 1958, 1964, 1967, 1970, 2000, 2002, 2003, 2004, 2005, 2006, 2007, 2008];
            $("#searchComputerRelease").text(Years[Random]);
            Random = Math.floor(Math.random() * 16);

            var limitedEditon = ['Nee','Nee','Nee','Nee','Nee','Nee','Nee','Nee','Nee','Nee','Nee','Nee','Ja','Ja','Ja','Ja'];
            $("#searchComputerLimitedEdition").text(limitedEditon[Random]);
            Random = Math.floor(Math.random() * 16);

            var totalProduced = [400, 560, 1000, 1300, 1500, 1600, 2000, 2200, 2400, 2600, 3000, 5600, 7000, 7900, 8400, 10300];
            $("#searchComputerTotalProduced").text(totalProduced[Random]);

            // 1 - 25
            var SecondRandom = Math.floor(Math.random() * 25) + 1;
            var pathImage = "Content/oldPC" + SecondRandom + ".jpg";
            $("#ImageSearched").attr("src", pathImage);



            var selectedSearch = $('input[name="searchBy"]:checked').val();        
            if (selectedSearch == "name")
            {
               $("#computerName").text(inputText);
            }

            else if (selectedSearch == "brand")
            {
               $("#searchComputerBrand").text(inputText);
            }
      
            else if (selectedSearch == "year")
            {
               $("#searchComputerRelease").text(inputText);
            }
      
      
            $("#title2").css("visibility","hidden");
            $("#computersSection").css("visibility","hidden");
            $("#goToTop").css("visibility","hidden");
            $("#ComputerSearched").css("visibility","visible");
            $("#SearchComputer").text("Ga terug");

            var computerbrand = $( "#searchComputerBrand" ).first().text();
            var computerRelease = $( "#searchComputerRelease" ).first().text();
            var computerLimitedEdition = $( "#searchComputerLimitedEdition" ).first().text();
            setRarity(computerbrand, computerRelease, computerLimitedEdition, "searchComputerRarity");
         }
         else
         {
            alert("Er is geen computer gevonden met de ingevoerde gegevens.");
         }

         FoumdRandom = Math.floor(Math.random() * 4);
      }
   }
   else
   {
      alert("Vul alstublieft een zoekterm in.");
   }
});

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

// Special Computer 9
var computerbrand9 = $( "#computerBrand9" ).first().text();
var computerRelease9 = $( "#computerRelease9" ).first().text();
var computerLimitedEdition9 = $( "#computerLimitedEdition9" ).first().text();
setRarity(computerbrand9, computerRelease9, computerLimitedEdition9, "computerRarity9");

// Special Computer 10
var computerbrand10 = $( "#computerBrand10" ).first().text();
var computerRelease10 = $( "#computerRelease10" ).first().text();
var computerLimitedEdition10 = $( "#computerLimitedEdition10" ).first().text();
setRarity(computerbrand10, computerRelease10, computerLimitedEdition10, "computerRarity10");

// Special Computer 11
var computerbrand11 = $( "#computerBrand11" ).first().text();
var computerRelease11 = $( "#computerRelease11" ).first().text();
var computerLimitedEdition11 = $( "#computerLimitedEdition11" ).first().text();
setRarity(computerbrand11, computerRelease11, computerLimitedEdition11, "computerRarity11");

// Special Computer 12
var computerbrand12 = $( "#computerBrand12" ).first().text();
var computerRelease12 = $( "#computerRelease12" ).first().text();
var computerLimitedEdition12 = $( "#computerLimitedEdition12" ).first().text();
setRarity(computerbrand12, computerRelease12, computerLimitedEdition12, "computerRarity12");

// Special Computer 13
var computerbrand13 = $( "#computerBrand13" ).first().text();
var computerRelease13 = $( "#computerRelease13" ).first().text();
var computerLimitedEdition13 = $( "#computerLimitedEdition13" ).first().text();
setRarity(computerbrand13, computerRelease13, computerLimitedEdition13, "computerRarity13");

// Special Computer 14
var computerbrand14 = $( "#computerBrand14" ).first().text();
var computerRelease14 = $( "#computerRelease14" ).first().text();
var computerLimitedEdition14 = $( "#computerLimitedEdition14" ).first().text();
setRarity(computerbrand14, computerRelease14, computerLimitedEdition14, "computerRarity14");

// Special Computer 15
var computerbrand15 = $( "#computerBrand15" ).first().text();
var computerRelease15 = $( "#computerRelease15" ).first().text();
var computerLimitedEdition15 = $( "#computerLimitedEdition15" ).first().text();
setRarity(computerbrand15, computerRelease15, computerLimitedEdition15, "computerRarity15");

// Special Computer 16
var computerbrand16 = $( "#computerBrand16" ).first().text();
var computerRelease16 = $( "#computerRelease16" ).first().text();
var computerLimitedEdition16 = $( "#computerLimitedEdition16" ).first().text();
setRarity(computerbrand16, computerRelease16, computerLimitedEdition16, "computerRarity16");

// Special Computer 17
var computerbrand17 = $( "#computerBrand17" ).first().text();
var computerRelease17 = $( "#computerRelease17" ).first().text();
var computerLimitedEdition17 = $( "#computerLimitedEdition17" ).first().text();
setRarity(computerbrand17, computerRelease17, computerLimitedEdition17, "computerRarity17");

// Special Computer 18
var computerbrand18 = $( "#computerBrand18" ).first().text();
var computerRelease18 = $( "#computerRelease18" ).first().text();
var computerLimitedEdition18 = $( "#computerLimitedEdition18" ).first().text();
setRarity(computerbrand18, computerRelease18, computerLimitedEdition18, "computerRarity18");

// Special Computer 19
var computerbrand19 = $( "#computerBrand19" ).first().text();
var computerRelease19 = $( "#computerRelease19" ).first().text();
var computerLimitedEdition19 = $( "#computerLimitedEdition19" ).first().text();
setRarity(computerbrand19, computerRelease19, computerLimitedEdition19, "computerRarity19");

// Special Computer 20
var computerbrand20 = $( "#computerBrand20" ).first().text();
var computerRelease20 = $( "#computerRelease20" ).first().text();
var computerLimitedEdition20 = $( "#computerLimitedEdition20" ).first().text();
setRarity(computerbrand20, computerRelease20, computerLimitedEdition20, "computerRarity20");

// Special Computer 21
var computerbrand21 = $( "#computerBrand21" ).first().text();
var computerRelease21 = $( "#computerRelease21" ).first().text();
var computerLimitedEdition21 = $( "#computerLimitedEdition21" ).first().text();
setRarity(computerbrand21, computerRelease21, computerLimitedEdition21, "computerRarity21");

// Special Computer 22
var computerbrand22 = $( "#computerBrand22" ).first().text();
var computerRelease22 = $( "#computerRelease22" ).first().text();
var computerLimitedEdition22 = $( "#computerLimitedEdition22" ).first().text();
setRarity(computerbrand22, computerRelease22, computerLimitedEdition22, "computerRarity22");

// Special Computer 23
var computerbrand23 = $( "#computerBrand23" ).first().text();
var computerRelease23 = $( "#computerRelease23" ).first().text();
var computerLimitedEdition23 = $( "#computerLimitedEdition23" ).first().text();
setRarity(computerbrand23, computerRelease23, computerLimitedEdition23, "computerRarity23");

// Special Computer 24
var computerbrand24 = $( "#computerBrand24" ).first().text();
var computerRelease24 = $( "#computerRelease24" ).first().text();
var computerLimitedEdition24 = $( "#computerLimitedEdition24" ).first().text();
setRarity(computerbrand24, computerRelease24, computerLimitedEdition24, "computerRarity24");


