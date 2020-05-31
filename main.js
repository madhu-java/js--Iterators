let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the very end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
/*1.
In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
2.
Log how many words there are in this story to the console.*/ 
const storyWords= story.split(' ');
storyWords.forEach( word => {
  console.log(word);});
  const numberOfWords =storyWords.length;
  //console.log(storyWords.length);
/*.
There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.*/ 
  const betterWords = storyWords.filter(word => {
   if( !unnecessaryWords.includes(word))
   {
     return word;
   }
    });
  betterWords.forEach( word => {
  console.log(word);});
/*4.
There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.*/ 
//solution method1
   let oWCount=0;
  const overusedWordsCounts = storyWords.forEach(word =>{
  if(overusedWords.includes(word))  {
     oWCount++;
  }
   } );
   //console.log(`overused words count : ${count}`);

//solution method2

 const overUsedWordsByCounts = betterword => {
     let count =0 ;
     storyWords.forEach(word => {
       if( word === betterword){
         count=count +1;
       }
     });
     console.log(`overused word ${betterword} used  ${count} times`);
   };
overUsedWordsByCounts('very');
overUsedWordsByCounts('really');
overUsedWordsByCounts('basically');

//solution method3

const overUsedWordsByCount3 = ()=> {
     let reallycount =0 ,
      verycount=0,
      basicallycount=0 ;
     storyWords.forEach(word => {
       //console.log('i am the word: ' + word);
       overusedWords.filter(betterword => {
        // console.log('comparing with betterword :'+betterword);
         if( word === betterword ){
        
           if(word ==='really'){
              reallycount++;
           }else if(word ==='very'){
              verycount++;
           }
            else
            if(word ==='basically'){
             basicallycount++;
           }
         }
       });
       
     });
     console.log(`  overused word "really" used  ${reallycount} times`);
     console.log(`  overused word "very" used  ${verycount} times`);
     console.log(`  overused word "basically" used  ${basicallycount} times`);
   };
overUsedWordsByCount3();

/*5.Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!).*/
const countSentences = storyWordsCopy =>{
  let sentenceNumber = 0;
storyWordsCopy.forEach(word => {
if(word[word.length-1]  === '.' || word[word.length -1]  === '!'){
  sentenceNumber++;
}
});
//console.log('Number of sentencs in the story are: '+sentenceNumber);
return sentenceNumber;
};
//function call
countSentences(storyWords);
//DISPLAYING  NUMBER OF WORDS AND SENTENCES  IN THE STORTY
/*6.
Log these items to the console:

The word count
The sentence count
The number of times each overused word appears
You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.*/ 
function dispalyInfo( storyWords, countSentences, overUsedWordsByCount3,oWCount){

console.log('------------------')
console.log('Number of WORDS in the story are: '+storyWords.length);
console.log('Number of SENTENCES in the story are: '+countSentences(storyWords));

console.log('Total Number of OVERUSED WORDS in the story are: '+ oWCount );
overUsedWordsByCount3();
}
dispalyInfo(storyWords, countSentences, overUsedWordsByCount3, oWCount);

/*7.
Now, log the betterWords array to the console as a single string.*/
console.log(betterWords.join(' '));