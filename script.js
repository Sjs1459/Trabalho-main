    let icone = document.getElementById("icone");  
    let pesquisa = document.getElementById("pesquisa"); 

   
    icone.addEventListener("click", function() {
       
        if (pesquisa.style.display === "none" || pesquisa.style.display === "") {
            pesquisa.style.display = "inline";  
        } else {
            pesquisa.style.display = "none";  
        }
    });

    document.getElementById("pesquisa").addEventListener("input", function() {
        let query = this.value.toLowerCase(); 
        let noticias = document.querySelectorAll(".card"); 
    
        noticias.forEach(function(card) {
            let texto = card.querySelector(".card-text").textContent.toLowerCase(); 
    
            if (texto.includes(query)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none";
            }
        });
    });
     