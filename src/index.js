import "./index.scss";

const $rating = document.getElementById("rating");
if (!($rating instanceof HTMLFormElement)) {
  throw new Error("Element #rating is not a form element.");
}

const $ratingResult = document.getElementById("rating-result");
if ($ratingResult === undefined || $ratingResult === null) {
  throw new Error("Element #rating-result does not exist");
}

const $ratingResultDisplay = document.getElementById("rating-result__rating");
if ($ratingResultDisplay === undefined || $ratingResultDisplay === null) {
  throw new Error("Element #rating-result__rating does not exist");
}

$rating.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData($rating));
  const rating = /** @type {string} */ (formData.rating);
  delete $rating.dataset.active;
  $ratingResult.dataset.active = "";
  $ratingResultDisplay.dataset.rating = rating;
});