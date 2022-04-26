import data from '../../DATA.json';

const main = () => {
    let restaurantElement = '';

    data.restaurants.forEach(restaurant => {
        restaurantElement += `
        <section class="box" tabindex="0">
            <img src="${restaurant.pictureId}" alt="${restaurant.name} Image">
            <p class="location"> ${restaurant.city} <b>(${restaurant.rating})</b></p>
            <h3 class="namaResto">${restaurant.name}</h3>
            <hr>
            <p>${restaurant.description}</p>
        </section>`;
    });

    document.querySelector(".wrapper").innerHTML = restaurantElement;
    document.querySelector(".jumbotron").style.backgroundImage = "url('./images/heros/hero-image_3.jpg')";
}

export default main;
