const BASE_URL = 'https://thatcopy.pw/catapi/rest';
const catButton = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }
};

const loadImg = async () => {
    const img = document.getElementsByTagName('img'[0]);
  catImg.src = await getCats();
};

loadImg();

catButton.addEventListener("click", loadImg);


