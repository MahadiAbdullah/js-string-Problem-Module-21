const lyrics = 'tumi bondu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni';
const part = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);


const partial = lyrics.slice(5, 8);

// console.log(partial);

const partial2 = lyrics.substring(5, 8);

// console.log(partial2);

const lines = ['tumi bondu kala pakhi', 'ami jeno ki. bosonto kale tomai', 'bolte pari ni'];

const newSentence = lines.join(' : ');
console.log(newSentence);


