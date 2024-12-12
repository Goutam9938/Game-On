document.addEventListener("DOMContentLoaded", () => {
    const guiderIcon = document.getElementById("guiderIcon");
    const popup = document.getElementById("popup");
    const districtsContent = document.getElementById("districtsContent");
    const guideDetails = document.getElementById("guideDetails");
    const closePopup = document.getElementById("closePopup");
    const backToDistricts = document.getElementById("backToDistricts");
  
    const guides = {
      east: [
        {
          id: 1,
          name: "Goutam Nayak",
          rating: "⭐ 4.5",
          languages: "English, Hindi,Odia",
          bio: "This guide specializes in cultural tours across East Odisha.",
          reviews: ["“Great guide!” - ⭐ 5", "“Very professional.” - ⭐ 4.5"],
          image: "https://via.placeholder.com/100"
        },
        {
          id: 3,
          name: "Guide 3",
          rating: "⭐ 4.2",
          languages: "English, Bengali",
          bio: "This guide offers unique experiences in wildlife tours.",
          reviews: ["“Enjoyable tour!” - ⭐ 4.2", "“Highly recommended.” - ⭐ 4.5"],
          image: "https://via.placeholder.com/100"
        }
      ],
      south: [
        {
          id: 2,
          name: "Alekha Kumar Swain",
          rating: "⭐ 5.0",
          languages: "English, Odia",
          bio: "This guide focuses on nature and wildlife tours in South Odisha.",
          reviews: ["“Amazing experience!” - ⭐ 5", "“Highly engaging.” - ⭐ 4.8"],
          image: "https://via.placeholder.com/100"
        },
        {
          id: 4,
          name: "Guide 4",
          rating: "⭐ 4.8",
          languages: "English, Telugu",
          bio: "This guide provides insights into the rich cultural heritage.",
          reviews: ["“Excellent guide!” - ⭐ 4.8", "“Very informative.” - ⭐ 5"],
          image: "https://via.placeholder.com/100"
        }
      ]
    };
  
    guiderIcon.addEventListener("click", () => {
      popup.style.display = "block";
      districtsContent.style.display = "block";
      guideDetails.style.display = "none";
    });
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    document.querySelectorAll(".see-details-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const guideId = e.target.closest(".guide").dataset.guide;
        const districtGuides = [...guides.east, ...guides.south];
        const guide = districtGuides.find((g) => g.id == guideId);
        if (guide) {
          document.getElementById("profileImg").src = guide.image;
          document.getElementById("guideName").textContent = guide.name;
          document.getElementById("guideRating").textContent =
            `${guide.rating} | Languages: ${guide.languages}`;
          document.getElementById("guideBio").textContent = guide.bio;
  
          const reviewsList = document.getElementById("reviewsList");
          reviewsList.innerHTML = "";
          guide.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.textContent = review;
            reviewsList.appendChild(li);
          });
  
          districtsContent.style.display = "none";
          guideDetails.style.display = "block";
        }
      });
    });
  
    backToDistricts.addEventListener("click", () => {
      guideDetails.style.display = "none";
      districtsContent.style.display = "block";
    });
  });
  