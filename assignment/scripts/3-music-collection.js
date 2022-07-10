console.log('***** Music Collection *****')

// Creat variable array 'collection'
let collection = [];

/* Create function 'addToCollection'
Include parameters.
Create new object (record) with same properties as the parameters.
Push to end of 'collection' array.
Return 'record' object.
*/
function addToCollection (title, artist, yearPublished){
    let record = {
        title, artist, yearPublished
    }
    collection.push(record);
    return record;
}

// Test addToCollection

