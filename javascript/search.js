const form = document.getElementById("searchForm");

window.onload = () => {
  const key = localStorage.getItem("key");
  console.log("KEY:", key);
  if (key) {
    document.getElementById("key-search").value = key;
    document.getElementById("title-search").innerHTML = `Tìm kiếm "${key}"`;

    document.getElementById("key-search-result").innerHTML = `"${key}"`;
  }

  localStorage.removeItem("key");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = document.getElementById("key-search").value;
  localStorage.setItem("key", key);

  if (key.toLowerCase() === "đăng ký") {
    window.open("../searchPage/index.html", "_self");
  } else {
    window.open("../searchNotFoundPage/index.html", "_self");
  }
});
