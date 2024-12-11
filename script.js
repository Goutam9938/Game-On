var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()



    document.getElementById("searchButton").addEventListener("click", function() {
        var district = document.getElementById("searchBar").value.trim().toLowerCase();  // Capture and convert to lowercase
        var districtPage = '';  // Variable to store the page URL
        
        // Map 30 districts of Odisha to their respective pages
        const districtMap = {
            "angul": "/angul/angul.html",
            "balangir": "./balangir/balangir.html",
            "balasore": "./balasore dist/balasore.html",
            "baragarh": "./bargarh/bargarh.html",
            "bhadrak": "./Bhadrak Dist/bhadrak.html",
            "bhubaneswar": "bhubaneswar.html",
            "boudh": "boudh.html",
            "cuttack": "./Cuttack Dist/cuttack.html",
            "deogarh": "./deogarh/deogarh.html",
            "dhenkanal": "./dhenkanal/dhenkanal.html",
            "ganjam": "./ganjam/ganjam.html",
            "gajapati": "gajapati.html",
            "jagatsinghpur":"./Jagatsinghpur/jagatsinghpur.html",
            "jajpur": "./Jajpur/jajpur.html",
            "jeypore": "jeypore.html",
            "jharsuguda": "./jharsuguda/jharsuguda.html",
            "kalahandi": "./kalahandi/kalahandi.html",
            "kendrapara": "./kendrapara/kendrapara.html",
            "keonjhar": "./keonjhar/keonjhar.html",
            "khordha": "./khordha/khordha.html",
            "koraput": "./koraput/koraput.html",
            "malkangiri": "malkangiri.html",
            "mayurbhanj": "./Mayurbhanj Dist/mayurbhanj.html",
            "nabarangpur": "./nabarangpur/nabarangpur.html",
            "nayagarh": "./Nayagarh/index.html",
            "nuapada": "nuapada.html",
            "puri": "./Puri Dist/puri.html",
            "rayagada": "./rayagada/rayagada.html",
            "sambalpur": "./sambalpur/sambalpur.html",
            "sonepur": "sonepur.html",
            "subarnapur":"./subarnapur/subarnapur.html",
            "talcher": "talcher.html"
        };

        // Check if the entered district exists in the map
        if (districtMap[district]) {
            // Redirect to the district page
            window.location.href = districtMap[district];
        } else {
            alert("District not found! Please check the spelling.");
        }
    });

    document.getElementById("subscribe-button").addEventListener("click", function () {
        const emailInput = document.getElementById("newsletter1").value;
        const successMessage = document.getElementById("success-message");

        if (emailInput.trim() === "") {
            alert("Please enter a valid email address.");
        } else {
            successMessage.style.display = "block";
        }
    });

    

