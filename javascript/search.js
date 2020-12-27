const form = document.getElementById("searchForm");

// IFFI
(() => {
  const key = localStorage.getItem("key");

  if (key) {
    document.getElementById("key-search").value = key;
    document.getElementById("title-search").innerHTML = `Tìm kiếm "${key}"`;
    document.getElementById("key-search-result").innerHTML = `"${key}"`;
  }

  localStorage.removeItem("key");
})();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const key = document.getElementById("key-search").value;
  localStorage.setItem("key", key);

  const link =
    key.toLowerCase() === "đăng ký"
      ? "../searchPage/index.html"
      : "../searchNotFoundPage/index.html";

  window.open(link, "_self");
});

document.getElementById("searchSubmitBtn").addEventListener("click", (e) => {
  form.submit();
});
