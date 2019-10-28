function skutecna_vzdalenost() 
    {
	
    let meritko = document.getElementById("meritko").value;
    let vzdalenost = document.getElementById("vzdalenost").value;
    let vysledek = meritko * vzdalenost /100000;
    if (meritko < 0)  {
        alert("Byla zadána záporná hodnota")
    } 
    else if (vzdalenost < 0)  {
        alert("Byla zadána záporná hodnota")
    }
        else{ 
    document.getElementById("vysledek").innerHTML = "Skutečná vzdálenost = " + vysledek + " km" ; }
    }
    
    function vzdalenost_na_mape() 
    {
	
    let meritko1 = document.getElementById("meritko1").value;
    let vzdalenost1 = document.getElementById("vzdalenost1").value;
    let vysledek1 =(vzdalenost1*100000)/meritko1;
     if (meritko1 < 0)  {
        alert("Byla zadána záporná hodnota")
    } 
    else if (vzdalenost1 < 0)  {
        alert("Byla zadána záporná hodnota")
    }
        else{
    document.getElementById("vysledek1").innerHTML = "Vzdálenost na mapě = " + vysledek1 + " cm" ;  }
    }
    
    function vypocet_meritka() 
    {
	
    let vzdalenost2 = document.getElementById("vzdalenost2").value;
    let vzdalenost_mapa = document.getElementById("vzdalenost_mapa").value;
    let vysledek2 = (vzdalenost2*100000)/vzdalenost_mapa;
        
         if (vzdalenost2 < 0)  {
        alert("Byla zadána záporná hodnota")
    } 
    else if (vzdalenost_mapa < 0)  {
        alert("Byla zadána záporná hodnota")
    }
        else{
    document.getElementById("vysledek2").innerHTML = "Měřítko mapy = 1:"  + vysledek2;  }
    }
    
    