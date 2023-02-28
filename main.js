const BASE_URL = "https://curiouscat.live/api/v2.1/profile?username=";
const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#search");
const searchForm = document.querySelector(".search");

const loadingSpinner = document.querySelector(".loading");

const userDataWrapper = document.querySelector(".user-data");
const twitterUsername = document.querySelector(".twitter-username");
const userBanner = document.querySelector(".user-banner");
const userAvatar = document.querySelector(".user-avatar");
const userAnswers = document.querySelector(".user-answers");

let isLoadingData = false;
let apiData = {};

const renderData = () => {
  if (!apiData) {
    throw new Error("No data was found.");
  }

  userDataWrapper.classList.add("showing");

  twitterUsername.innerHTML = apiData.userData.username;
  userBanner.src = apiData.userData.banner;
  userAvatar.src = apiData.userData.avatar;
  userAnswers.innerHTML = apiData.userData.answers;
};

const fetchData = async () => {
  const searchedUsername = usernameInput.value;

  loadingSpinner.classList.add("showing");
  userDataWrapper.classList.remove("showing");

  try {
    const res = await fetch(`${BASE_URL}${searchedUsername}`);
    apiData = await res.json();
    renderData();
  } catch (err) {
    console.error(err);
  } finally {
    loadingSpinner.classList.remove("showing");
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetchData();
});
