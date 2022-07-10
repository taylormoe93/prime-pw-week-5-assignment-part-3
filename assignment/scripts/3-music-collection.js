console.log('***** Music Collection *****');

// Creat variable array 'collection'
let collection = [];

/* Create function 'addToCollection'
Include parameters.
Create new object (album) with same properties as the parameters.
Push to end of 'collection' array.
Return 'album' object.
*/
function addToCollection(title, artist, yearPublished) {
	let album = {
		title,
		artist,
		yearPublished,
	};
	collection.push(album);
	return console.log(album);
}

// Test 'addToCollection'
addToCollection('Selected Ambient Works, Volume 2', 'Aphex Twin', 1994);
addToCollection('Selected Ambient Works 85-92', 'Aphex Twin', 1992);
addToCollection('The Campfire Headphase', 'Boards of Canada', 2005);
addToCollection('Blackstar', 'David Bowie', 2016);
addToCollection('Bad Witch', 'Nine Inch Nails', 2018);
addToCollection('The Downward Spiral', 'Nine Inch Nails', 1994);
console.log(collection); // Test

/* Add a function 'showCollection'
Array parameter.
Log number of items in array.
Loop over the array and log each albums info.
Test 'showCollection'.
*/
function showCollection(array) {
	console.log(array.length);
	for (album of collection) {
		console.log(
			album.title,
			'by',
			album.artist,
			'published in',
			album.yearPublished
		);
	}
}
showCollection(collection); // Test
console.log(collection); // Test
addToCollection('Souvlaki', 'Slowdive', 1993); // Test
showCollection(collection); // Test
// It actually works! :D

// findByArtist function
function findByArtist(artist) {
    let matchingArtist = []; 
    let emptyArtist = [];
    
    for (album of collection) {
        if (artist === album.artist) {
            matchingArtist.push(artist);
            console.log('Matching artist:', artist);
        } else  {
            emptyArtist.push(artist);
            console.log('No matching artist:', artist);
        }
    }
}
findByArtist('Aphex Twin'); // Test
findByArtist('Mozart'); // Test
/* 
It appears to correctly ID a matching artist or nonmatching artist. 
But then returns additionally a "No matching artist" message for the matching artist.
*/

