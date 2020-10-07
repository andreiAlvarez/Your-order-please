// solution 1

const order = (words) => { 
  let arrOne = words.split(" "); let answer = [];
for( let i = 0; i < arrOne.length; i++ ) {
   var num = parseInt(arrOne[i].replace( /^\D+/g, ''));
        answer[num-1]=arrOne[i];
} return answer.join(' ')
};

// solution 2

const order = words => words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
