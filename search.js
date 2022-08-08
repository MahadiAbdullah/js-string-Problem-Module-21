const lyrics = 'tumi bondu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni';
const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);

// console.log(doesExist);

// indexOf 

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kaila'));

if(lyrics.indexOf('kala') !== -1){
    console.log('exits inside the string');
}
else{
    console.log('cannot find it');
}
console.log(lyrics.includes('kala'));

// startsWith


