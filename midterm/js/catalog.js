const catalogRef = document.querySelector("#catalog");
console.log("catalog");
const catalogItems = [
  {
    image:
      "https://fastly.picsum.photos/id/526/200/200.jpg?hmac=lAr0ctK4KPCKm5c3BmdW3ykjKLBb-09TKTK-GKYnrxI",
    name: "My First Fire",
  },
  {
    image:
      "https://fastly.picsum.photos/id/1005/200/200.jpg?hmac=TlSxs8p2lqA8VkV-Kpg7DKnp8BkwK9UDBHrU2UegLzI",
    name: "Handy Hand",
  },
  {
    image:
      "https://fastly.picsum.photos/id/392/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg",
    name: "NapSack",
  },
  {
    image:
      "https://fastly.picsum.photos/id/362/200/200.jpg?hmac=AKqfQ8tnyGapdUtZ1f35ugad3WkJY-g1tn5hi7kF2zY",
    name: "Hot Tub Wildlife Feeder",
  },
  {
    image:
      "https://fastly.picsum.photos/id/960/200/200.jpg?hmac=jBtZLcx2FwawGC7rwl0dNWTD3q1uuB7CjJmALIF9pIg",
    name: "Toilet Meadow",
  },
  {
    image:
      "https://fastly.picsum.photos/id/1027/200/200.jpg?hmac=fiXlkLLwYm7JmmU80uRIj9g21XD4q9v_lM_2Z57UhuA",
    name: "Pudding Pouch",
  },
];

for (let i = 0; i < catalogItems.length; i++) {
  const catalog = catalogItems[i];

  const newSection = document.createElement("section");

  newSection.innerHTML +=
    "<img height='200' src='" + catalog.name + "'alt='" + catalog.image + "'/>";

  newSection.innerHTML += "<h4>" + catalog.name + "</h4>";

  catalogRef.appendChild(newSection);
}
