const BASE_URL = "https://curiouscat.live/api/v2.1/profile?username=";
const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#search");

const twitterUsername = document.querySelector(".twitter-username");
const userBanner = document.querySelector(".user-banner");
const userAvatar = document.querySelector(".user-avatar");
const userAnswers = document.querySelector(".user-answers");

let apiData = {};

const renderData = () => {
  if (!apiData) {
    throw new Error("No data was found.");
  }

  twitterUsername.innerHTML = apiData.userData.username;
  userBanner.src = apiData.userData.banner;
  userAvatar.src = apiData.userData.avatar;
  userAnswers.innerHTML = apiData.userData.answers;
};

const fetchData = async () => {
  const searchedUsername = usernameInput.value;
  const res = await fetch(`${BASE_URL}${searchedUsername}`);
  apiData = await res.json();

  renderData();
};

searchButton.addEventListener("click", () => {
  fetchData();
});
