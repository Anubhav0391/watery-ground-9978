
let pro = document.getElementById("pro");
let sort = document.getElementById("sort");
let filter = document.getElementById("filter");
let box = document.querySelector("#cont>div:nth-child(3)");

let htlarr = [{
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
    name: "The Leela Palace New Delhi",
    city: "New Delhi",
    ratings: 4.5,
    price: 16351
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg",
    name: "FabExpress Ivory Pearl",
    city: "Banglore",
    ratings: 3.8,
    price: 7243
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/63600/63545/w2244h1752x0y56-cfe7840c_b.jpg",
    name: "President - IHCL SeleQtions",
    city: "Mumbai",
    ratings: 4.9,
    price: 12864
}, {
    image: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Bloom Hotel - Bengaluru Airport",
    city: "Banglore",
    ratings: 4.7,
    price: 19890
}, {
    image: "https://images.trvl-media.com/hotels/90000000/89200000/89195000/89194924/121217d1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Hotel Tokas NiwasOpens",
    city: "New Delhi",
    ratings: 3.0,
    price: 9764
}, {
    image: "https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Westin Mumbai Garden City",
    city: "Mumbai",
    ratings: 2.5,
    price: 7890
}, {
    image: "https://images.trvl-media.com/hotels/32000000/31060000/31054200/31054148/fe5729de.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Novotel Mumbai Juhu Beach",
    city: "Mumbai",
    ratings: 1.9,
    price: 5463
}, {
    image: "https://images.trvl-media.com/hotels/77000000/76630000/76629300/76629201/023dd309.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Sulit Whitefield",
    city: "Banglore",
    ratings: 1.7,
    price: 12987
}, {
    image: "https://images.trvl-media.com/hotels/1000000/980000/974100/974008/4aa18282.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Trident Bandra Kurla",
    city: "Mumbai",
    ratings: 2.9,
    price: 8639
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg",
    name: "Z-HEART HOTEL",
    city: "New Delhi",
    ratings: 4.4,
    price: 5324
}, {
    image: "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Sofitel Mumbai BKC",
    city: "Mumbai",
    ratings: 3.7,
    price: 8950
}, {
    image: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Benaka Suites",
    city: "Banglore",
    ratings: 4.5,
    price: 12560
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
    name: "The Leela Palace Mumbai",
    city: "Mumbai",
    ratings: 4.5,
    price: 16351
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg",
    name: "FabExpress Ivory Pearl",
    city: "Banglore",
    ratings: 3.8,
    price: 7243
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/63600/63545/w2244h1752x0y56-cfe7840c_b.jpg",
    name: "President - IHCL SeleQtions",
    city: "Mumbai",
    ratings: 3.9,
    price: 10854
}, {
    image: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Bloom Hotel - Bengaluru Airport",
    city: "Banglore",
    ratings: 4.7,
    price: 15890
}, {
    image: "https://images.trvl-media.com/hotels/90000000/89200000/89195000/89194924/121217d1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Hotel Tokas NiwasOpens",
    city: "Mumbai",
    ratings: 4.0,
    price: 6764
}, {
    image: "https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Westin Mumbai Garden City",
    city: "Mumbai",
    ratings: 3.5,
    price: 6890
}, {
    image: "https://images.trvl-media.com/hotels/32000000/31060000/31054200/31054148/fe5729de.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Novotel Mumbai Juhu Beach",
    city: "Mumbai",
    ratings: 4.9,
    price: 15463
}, {
    image: "https://images.trvl-media.com/hotels/77000000/76630000/76629300/76629201/023dd309.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Sulit Whitefield",
    city: "Banglore",
    ratings: 2.7,
    price: 10987
}, {
    image: "https://images.trvl-media.com/hotels/1000000/980000/974100/974008/4aa18282.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Trident Bandra Kurla",
    city: "Mumbai",
    ratings: 3.9,
    price: 5639
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg",
    name: "Z-HEART HOTEL",
    city: "Mumbai",
    ratings: 3.4,
    price: 9324
}, {
    image: "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Sofitel Mumbai BKC",
    city: "Mumbai",
    ratings: 2.7,
    price: 5950
}, {
    image: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Benaka Suites",
    city: "Banglore",
    ratings: 2.5,
    price: 2560
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
    name: "The Leela Palace Banglore",
    city: "Banglore",
    ratings: 3.5,
    price: 15351
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg",
    name: "FabExpress Ivory Pearl",
    city: "Banglore",
    ratings: 2.8,
    price: 6243
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/63600/63545/w2244h1752x0y56-cfe7840c_b.jpg",
    name: "President - IHCL SeleQtions",
    city: "Mumbai",
    ratings: 4.8,
    price: 20864
}, {
    image: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Bloom Hotel - Bengaluru Airport",
    city: "Banglore",
    ratings: 3.7,
    price: 10890
}, {
    image: "https://images.trvl-media.com/hotels/90000000/89200000/89195000/89194924/121217d1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Hotel Tokas NiwasOpens",
    city: "Banglore",
    ratings: 5.0,
    price: 19764
}, {
    image: "https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Westin Mumbai Garden City",
    city: "Mumbai",
    ratings: 1.5,
    price: 2090
}, {
    image: "https://images.trvl-media.com/hotels/32000000/31060000/31054200/31054148/fe5729de.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Novotel Mumbai Juhu Beach",
    city: "Mumbai",
    ratings: 1.7,
    price: 4463
}, {
    image: "https://images.trvl-media.com/hotels/77000000/76630000/76629300/76629201/023dd309.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Sulit Whitefield",
    city: "Banglore",
    ratings: 2.7,
    price: 11987
}, {
    image: "https://images.trvl-media.com/hotels/1000000/980000/974100/974008/4aa18282.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Trident Bandra Kurla",
    city: "Mumbai",
    ratings: 3.9,
    price: 9639
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg",
    name: "Z-HEART HOTEL",
    city: "Banglore",
    ratings: 3.4,
    price: 10324
}, {
    image: "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Sofitel Mumbai BKC",
    city: "Mumbai",
    ratings: 2.7,
    price: 2250
}, {
    image: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Benaka Suites",
    city: "Banglore",
    ratings: 3.5,
    price: 11160
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
    name: "The Leela Palace Kanpur",
    city: "Kanpur",
    ratings: 2.5,
    price: 16051
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg",
    name: "FabExpress Ivory Pearl",
    city: "Banglore",
    ratings: 4.8,
    price: 17363
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/63600/63545/w2244h1752x0y56-cfe7840c_b.jpg",
    name: "President - IHCL SeleQtions",
    city: "Mumbai",
    ratings: 2.9,
    price: 17964
}, {
    image: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Bloom Hotel - Bengaluru Airport",
    city: "Banglore",
    ratings: 2.7,
    price: 12390
}, {
    image: "https://images.trvl-media.com/hotels/90000000/89200000/89195000/89194924/121217d1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Hotel Tokas NiwasOpens",
    city: "Kanpur",
    ratings: 1.9,
    price: 8764
}, {
    image: "https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Westin Mumbai Garden City",
    city: "Mumbai",
    ratings: 3.5,
    price: 3890
}, {
    image: "https://images.trvl-media.com/hotels/32000000/31060000/31054200/31054148/fe5729de.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Novotel Mumbai Juhu Beach",
    city: "Mumbai",
    ratings: 2.9,
    price: 5450
}, {
    image: "https://images.trvl-media.com/hotels/77000000/76630000/76629300/76629201/023dd309.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Sulit Whitefield",
    city: "Banglore",
    ratings: 1.7,
    price: 12987
}, {
    image: "https://images.trvl-media.com/hotels/1000000/980000/974100/974008/4aa18282.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Trident Bandra Kurla",
    city: "Mumbai",
    ratings: 4.9,
    price: 8939
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg",
    name: "Z-HEART HOTEL",
    city: "Kanpur",
    ratings: 2.4,
    price: 5924
}, {
    image: "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Sofitel Mumbai BKC",
    city: "Mumbai",
    ratings: 1.7,
    price: 8650
}, {
    image: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Benaka Suites",
    city: "Banglore",
    ratings: 2.5,
    price: 18960
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3860000/3851700/3851663/958ad657_b.jpg",
    name: "The Leela Palace Lucknow",
    city: "Lucknow",
    ratings: 4.6,
    price: 16551
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/10000000/9994600/9994586/99a27f9a_b.jpg",
    name: "FabExpress Ivory Pearl",
    city: "Banglore",
    ratings: 4.8,
    price: 7283
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/63600/63545/w2244h1752x0y56-cfe7840c_b.jpg",
    name: "President - IHCL SeleQtions",
    city: "Mumbai",
    ratings: 3.9,
    price: 13864
}, {
    image: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Bloom Hotel - Bengaluru Airport",
    city: "Banglore",
    ratings: 3.7,
    price: 19090
}, {
    image: "https://images.trvl-media.com/hotels/90000000/89200000/89195000/89194924/121217d1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Hotel Tokas NiwasOpens",
    city: "Lucknow",
    ratings: 2.0,
    price: 8564
}, {
    image: "https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Westin Mumbai Garden City",
    city: "Mumbai",
    ratings: 4.5,
    price: 5890
}, {
    image: "https://images.trvl-media.com/hotels/32000000/31060000/31054200/31054148/fe5729de.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Novotel Mumbai Juhu Beach",
    city: "Mumbai",
    ratings: 4.9,
    price: 4463
}, {
    image: "https://images.trvl-media.com/hotels/77000000/76630000/76629300/76629201/023dd309.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "The Sulit Whitefield",
    city: "Lucknow",
    ratings: 1.8,
    price: 12980
}, {
    image: "https://images.trvl-media.com/hotels/1000000/980000/974100/974008/4aa18282.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Trident Bandra Kurla",
    city: "Mumbai",
    ratings: 2.0,
    price: 8631
}, {
    image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg",
    name: "Z-HEART HOTEL",
    city: "Lucknow",
    ratings: 3.1,
    price: 5323
}, {
    image: "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Sofitel Mumbai BKC",
    city: "Mumbai",
    ratings: 4.7,
    price: 8951
}, {
    image: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name: "Benaka Suites",
    city: "Lucknow",
    ratings: 3.5,
    price: 12561
}]

filter.addEventListener("change", () => {
    let filtered = htlarr.filter((el) => {
        if (el.ratings <= filter.value) { return true } else { return false }
    })
    hotel(filtered);
    if (filter.value === "") { hotel(htlarr) }
})
sort.addEventListener("change", () => {
    let sorted;
    if (sort.value === "descending") {
        sorted = htlarr.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
    } else if (sort.value === "ascending") {
        sorted = htlarr.sort((p1, p2) => (p1.price < p2.price) ? -1 : (p1.price > p2.price) ? +1 : 0)
    } else if (sort.value === "") { hotel(htlarr) }
    hotel(sorted);
})

hotel(htlarr);
function hotel(htlarr) {
    box.innerHTML = null;
    pro.innerText = htlarr.length;
    htlarr.forEach((e, i) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", e.image);
        // image.style.display = "block"
        let div = document.createElement("div");
        let name = document.createElement("h2");
        name.innerText = e.name;
        name.setAttribute("id", "a");
        let city = document.createElement("p");
        city.innerText = e.city;
        city.setAttribute("id", "b");
        let ref = document.createElement("p");
        ref.innerText = "Fully refundable";
        ref.style.color = "teal"
        ref.setAttribute("id", "c");
        let preprice = document.createElement("del");
        preprice.innerText = "₹" + (e.price + 1500);
        preprice.style.color = "grey"
        preprice.setAttribute("id", "d");
        let price = document.createElement("h3");
        price.innerText = "₹" + e.price;
        price.setAttribute("id", "e");
        let rating = document.createElement("p");
        rating.innerText = "⭐ " + e.ratings;
        rating.setAttribute("id", "f");
        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("id", "g");
        btn.addEventListener("click", () => {
            window.location = "updatedSoon.html"
        })
        div.append(name, city, ref, preprice, price, rating, btn)
        card.append(image, div);
        box.append(card);
    })
}