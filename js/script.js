// variabili di appoggio
const submitBtn = document.getElementById("submit-btn"); //buttone invio form
const hiddenTicket = document.getElementById("hidden-ticket"); // tabella nascosta


submitBtn.addEventListener("click", function(){
    //generazione biglietto
    hiddenTicket.classList.remove("d-none");
    
    // selettori del dom
    const userNameInput = document.getElementById("user-name");
    const numberKmtrsInput = document.getElementById("nmbr-kilomtrs");
    const userAgeInput = document.getElementById("user-age");
    let finalPrice = "";
  
    //variabili appoggio della function
    const userName = userNameInput.value; //nome utente
    const numberKmtrs = numberKmtrsInput.value; //kilometr
    const userAge = userAgeInput.value; //offerta
    let userBonus = "";

    console.log(userAgeInput.value, userAge);


    //calcolo prezzo del biglietto e offerta utilizzata
    const price = (numberKmtrs * 0.21);

    if (userAge === "underage") {
        finalPrice = (price * 0.80).toFixed(2);
        userBonus = "Under 18";
    }else if (userAge === "overage") {
        finalPrice = (price * 0.60).toFixed(2);
        userBonus = "Over 65";
    }else {
        finalPrice = price;
        userBonus = "Nessuna offerta";
    }


    //randomizzazione carrozza e codice CP
    let randomCp = Math.floor(Math.random() * 100000);
    let randomCarrozza = Math.floor(Math.random() * 14 + 1);


    //inserimenti dati nella tabella
    document.getElementById("doc-user-name").innerHTML = `${userName}`;
    document.getElementById("offert").innerHTML = `${userBonus}`;
    document.getElementById("carrozza").innerHTML = `${randomCarrozza}`;
    document.getElementById("cp-code").innerHTML = `${randomCp}`;
    document.getElementById("final-price").innerHTML = `${finalPrice}€`;

      
    //pulizia form ticket
    userNameInput.value = "";
    numberKmtrsInput.value = "";
    userAgeInput.value ="none";

});