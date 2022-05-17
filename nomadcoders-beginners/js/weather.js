function onGeoOk(position) {
    const lat = position.coords.latitube;
    const lng = position.coords.longitube;
console.log('you live it', lat , lng);
}
function onGeoError() {
 alert("can't find you no weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)