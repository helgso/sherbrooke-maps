$(document).ready(function () {
    $('#search_button').bind('click', function(event) {
        var query = $("input[type=text][name=search]").val();
        var text = query
        query = query.replace(' ', '+') + ',Sherbrooke,Canada'
        if ($('input[id="pin_location"]:checked').val() == 'on') {
            query = query
        }
        if ($('input[id="parks"]:checked').val() == 'on') {
            query = "parks+near+" + query
            text = "Parks near " + text
        }
        if ($('input[id="schools"]:checked').val() == 'on') {
            query = "schools+near+" + query
            text = "Schools near " + text
        }
        text = text + ", Sherbrooke"
        document.getElementById('googlemaps').src = "https://maps.google.com/maps?q=" + query + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
        document.getElementById('address_header').innerText = text;
    });
});
