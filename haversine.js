// Haversine
// formula:	
// a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
// c = 2 ⋅ atan2( √a, √(1−a) )
// d = R ⋅ c

//input lon/lats are in radians
function haversine(lon1, lat1, lon2, lat2) {
    var earthRadius = 637100,
        deltaLat = lat2 - lat1,
        deltaLon = lon2 - lon1,
        deltaLatSin = Math.sin(deltaLat/2),
        deltaLonSin = Math.sin(deltaLon/2);
        a = Math.pow(deltaLonSin, 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(deltaLonSin, 2);

    return earthRadius * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
}