//-- Multiple google.maps.places AutoComplete
function initAutocompleteList() {
    var inputs = document.getElementsByClassName('query');
    var autocompletes = [];

    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], { types: ['geocode'] });
        autocomplete.inputId = inputs[i].id;
        autocomplete.addListener('place_changed', fillIn);
        autocompletes.push(autocomplete);
    }
}

function fillIn() {
    console.log(this.inputId);
    var place = this.getPlace();
    document.getElementById(this.inputId + '_Lng').value = place.geometry.location.lng();
    document.getElementById(this.inputId + '_Lat').value = place.geometry.location.lat();

}


//-- One google.maps.places AutoComplete
var isInitAutocomplete = false;
function initAutocomplete() {
    if (isInitAutocomplete == false) {
        autocomplete = new google.maps.places.Autocomplete(document.getElementById('LocationBaseAutoComplete'), { types: ['geocode'] });
        autocomplete.addListener('place_changed', fillInAddress);
        isInitAutocomplete = true;
    }
}

var autocomplete;
var componentForm = {
    CompanyCountry: 'short_name',
    CompanyState: 'long_name',
    CompanyCity: 'long_name',
    CompanyStreet: 'short_name',
    CompanyHouseNumber: 'long_name',
    CompanyZipCode: 'short_name',
    CompanyLng: 'short_name',
    CompanyLat: 'short_name'
};

function fillInAddress() {
    var place = this.getPlace();
    var address_components = place.address_components;
    var components = {};
    jQuery.each(address_components, function (k, v1) { jQuery.each(v1.types, function (k2, v2) { components[v2] = v1.long_name }); });

    for (var component in componentForm) {
        document.getElementById(component).value = ''
    }

    if (place.formatted_address != null) { document.getElementById('LocationBaseAutoComplete').value = place.formatted_address; }

    if (components.administrative_area_level_1 != null) { document.getElementById('CompanyCountry').value = components.administrative_area_level_1; }
    if (components.political != null) { document.getElementById('CompanyState').value = components.political; }
    if (components.locality != null) { document.getElementById('CompanyCity').value = components.locality; }
    if (components.route != null) { document.getElementById('CompanyStreet').value = components.route; }
    if (components.street_number != null) { document.getElementById('CompanyHouseNumber').value = components.street_number; }
    if (components.postal_code != null) { document.getElementById('CompanyZipCode').value = components.postal_code; }

    if (place.geometry.location.lng() != null) { document.getElementById('CompanyLng').value = place.geometry.location.lng(); }
    if (place.geometry.location.lat() != null) { document.getElementById('CompanyLat').value = place.geometry.location.lat(); }

}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle(
                { center: geolocation, radius: position.coords.accuracy });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}
