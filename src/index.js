import "./index.scss";

/**
 * @template {HTMLElement} E
 * @param {string} id
 * @param {{ new (): E }} type
 * @returns {E}
 */
function $idOfType(id, type) {
  const $element = document.getElementById(id);
  if (!($element instanceof type)) {
    throw new Error(`#${id} is not a ${type}`);
  }
  return $element;
}

/**
 * @param {string} id
 * @returns {HTMLElement}
 */
function $id(id) {
  return $idOfType(id, HTMLElement);
}

const $rating = $idOfType("rating", HTMLFormElement);
const $ratingResult = $id("rating-result");
const $ratingResultDisplay = $id("rating-result__rating");

/**
 * @typedef {1 | 2 | 3 | 4 | 5} Rating
 * @typedef { never
 *  | { currentStage: "rating", rating: Rating | null }
 *  | { currentStage: "result", rating: Rating}
 * } Model
 */

let model = /** @type {Model} */ ({ currentStage: "rating", rating: null });

/** @type {(model: Model, rating: Rating) => Model} */
const updateRating = (model, rating) => ({ ...model, rating });

/** @type {(model: Model) => Model} */
const submitRating = (model) => {
  const rating = model.rating ?? 5;
  return { currentStage: "result", rating };
};

/**
 * @type {(model: Model) => void}
 */
const render = (model) => {
  // Select which card to render.
  switch (model.currentStage) {
    case "rating":
      $rating.dataset.active = "";
      delete $ratingResult.dataset.active;
      break;
    case "result":
      delete $rating.dataset.active;
      $ratingResult.dataset.active = "";
      break;
  }

  // Render data
  switch (model.currentStage) {
    case "rating":
      const formData = new FormData($rating);
      const rating = model.rating === null ? "" : model.rating.toString();
      formData.set("rating", rating);
      break;
    case "result":
      $ratingResultDisplay.dataset.rating = model.rating.toString();
      break;
  }
};

$rating.addEventListener("change", (e) => {
  // @ts-ignore
  const ratingString = /** @type {string} */ (e.target.value);
  /** @type {Rating | null} */
  let ratingNumber;
  switch (ratingString) {
    case "1":
      ratingNumber = 1;
      break;
    case "2":
      ratingNumber = 2;
      break;
    case "3":
      ratingNumber = 3;
      break;
    case "4":
      ratingNumber = 4;
      break;
    case "5":
      ratingNumber = 5;
      break;
    default:
      ratingNumber = null;
      break;
  }

  if (ratingNumber !== null) {
    model = updateRating(model, ratingNumber);
    render(model);
  }
});

$rating.addEventListener("submit", (e) => {
  e.preventDefault();
  model = submitRating(model);
  render(model);
});
