import usedCars from "./usedCars.js";

const collectData = document.querySelector(".collectData");
function GenerateListCar(all_car) {

  collectData.innerHTML = "";
  all_car.forEach((each_car) => {
    
    const createDiv = document.createElement("div");
    
    createDiv.classList.add("cardshape");

    // create html car list with image and name at the top
    createDiv.innerHTML = `
      <h2>${each_car.make} ${each_car.model}</h2>
      <img src="${each_car.image}" alt="${each_car.make} ${each_car.model}" class="car-image">
      <ul>
        <li>year: ${each_car.year}</li>
        <li>model: ${each_car.model}</li>
        <li>mileage: ${each_car.mileage}</li>
        <li>Price: ${each_car.price}</li>
        <li>color: ${each_car.color}</li>
        <li>gasMileage: ${each_car.gasMileage}</li>
      </ul>
    `;
    collectData.append(createDiv);
  });
}
//call func
GenerateListCar(usedCars);

const filter_btn = document.querySelector(".filter-btn");
//filter usedCars.js data func
function filterListCar(all_car) {
  const minYear = parseInt(document.getElementById("minYear").value)|| 0; //parseInt: to avoid our raw data is string and parse
  const maxYear = parseInt(document.getElementById("maxYear").value)|| Infinity;
  const carMake = document.getElementById("make").value;
  const maxMile =
    parseInt(document.getElementById("maxMileage").value) || Infinity;
  const maxPrice =
    parseInt(document.getElementById("maxPrice").value) || Infinity;
  const carColor = Array.from(
    document.querySelectorAll(".filter-color:checked")
  ).map((c) => c.value);

  const filter_car = all_car.filter((each_car) => {
    return (
      (each_car.year >= minYear || minYear==="") &&
      (each_car.year <= maxYear || maxYear==="") &&
      (each_car.make === carMake || carMake === "ALL") &&
      each_car.mileage <= maxMile &&
      each_car.price <= maxPrice &&
      (carColor.includes(each_car.color) || carColor.length === 0)
    );
  });
  return filter_car;
}


filter_btn.addEventListener("click", () => {
  GenerateListCar(filterListCar(usedCars));
});
