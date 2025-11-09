/* ============================================ */
/* ABOUT SECTION JAVASCRIPT */
/* Created by: Person 3 */
/* Only edit this file for about functionality */
/* ============================================ */

let aboutReviewsVisible = false;

function aboutToggleReviews() {
  const container = document.getElementById("testimonials-container");
  const button = document.getElementById("show-more-btn");

  if (!aboutReviewsVisible) {
    const review1 = document.createElement("div");
    review1.className = "testimonial extra-review";
    review1.innerHTML = `
            <p class="testimonial-text">"Great service and friendly staff!"</p>
            <p class="testimonial-author">— Mike R.</p>
        `;
    container.appendChild(review1);

    const review2 = document.createElement("div");
    review2.className = "testimonial extra-review";
    review2.innerHTML = `
            <p class="testimonial-text">"Will definitely come again!"</p>
            <p class="testimonial-author">— Emma L.</p>
        `;
    container.appendChild(review2);

    button.textContent = "Show Less Reviews";
    aboutReviewsVisible = true;
  } else {
    const extraReviews = document.querySelectorAll(".extra-review");
    extraReviews.forEach(function (review) {
      review.remove();
    });

    button.textContent = "Show More Reviews";
    aboutReviewsVisible = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("show-more-btn");

  if (showMoreButton) {
    showMoreButton.addEventListener("click", function () {
      aboutToggleReviews();
    });
  }

  console.log("About section initialized");
});
