fetch("https://restcountries.com/v3.1/region/europe")
  .then((resolve) => resolve.json())
  .then((data) => {
    let items;
    data.forEach((element) => {
      items += element.capital[0] + " ";
    });
    document.getElementById("Capitals").textContent = items;
  });
Ы;
