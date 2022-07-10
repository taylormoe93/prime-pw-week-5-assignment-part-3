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
	return album;
}

// Test 'addToCollection'
addToCollection('Selected Ambient Works, Volume 2', 'Aphex Twin', 1994);
addToCollection('Selected Ambient Works 85-92', 'Aphex Twin', 1992);
addToCollection('The Campfire Headphase', 'Boards of Canada', 2005);
addToCollection('Blackstar', 'David Bowie', 2016);
addToCollection('Bad Witch', 'Nine Inch Nails', 2018);
addToCollection('The Downward Spiral', 'Nine Inch Nails', 1994);
console.log(collection);
