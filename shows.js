const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resultsDiv.innerHTML = "";

      data.forEach((result) => {
        const name = result.show.name;
        const summary = result.show.summary;
        const image = result.show.image
          ? result.show.image.medium
          : "https://via.placeholder.com/210x295/cccccc/ffffff?text=No+Image";

        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");

        const resultImage = document.createElement("img");
        resultImage.src = image;

        const resultTitle = document.createElement("h2");
        resultTitle.innerText = name;

        const resultSummary = document.createElement("div");
        resultSummary.innerHTML = summary;

        const resultHr = document.createElement("hr");
        resultHr.classList.add("hr");

        resultDiv.appendChild(resultImage);
        resultDiv.appendChild(resultTitle);
        resultDiv.appendChild(resultSummary);
        resultDiv.appendChild(resultHr);

        resultsDiv.appendChild(resultDiv);
      });
    });
});
