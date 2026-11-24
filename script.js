function init() {
    var rj = document.getElementById("questions");
    if (rj) {
        function question() {
            alert("If you have any questions, please contact me at Rjones44@hawks.illinoistech.edu.");
        }
        rj.addEventListener("click", question);
    }
}
/* https://developers.google.com/maps/documentation/javascript/examples/marker-animations#maps_marker_animations-javascript
*/
window.addEventListener("load", init);
const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8335, lng: -87.6255 },
    zoom: 16,
});
const IIT = new google.maps.Marker({
    position: { lat: 41.8343, lng: -87.6293 },
    map: map,
    title: "Illinois Tech",
    animation: google.maps.Animation.DROP
});
const doyouhavemcdonaldsmoney = new google.maps.Marker({
    position: { lat: 41.8310, lng: -87.6215 },
    map: map,
    title: "McDonald's",
    animation: google.maps.Animation.DROP
});
const THEEE_BOOOGGGGGGGGGGGGG = new google.maps.Marker({
    position: { lat: 41.8355, lng: -87.6285 },
    map: map,
    title: "The ITT BOG",
    animation: google.maps.Animation.DROP
});
IIT.addListener("click",function() {
    alert("Welcome to Illinois Tech.");
});
doyouhavemcdonaldsmoney.addListener("click",function() {
    alert("Boy you better not ask me for some McDonald's.");
});
THEEE_BOOOGGGGGGGGGGGGG.addListener("click",function() {
    alert("Welcome to the ITT BOG. Lets go Bowling.");
});
function toggleBounce() {
    if (doyouhavemcdonaldsmoney.getAnimation() !== null) {
        doyouhavemcdonaldsmoney.setAnimation(null);
    } else {
        doyouhavemcdonaldsmoney.setAnimation(google.maps.Animation.BOUNCE);
    }
}