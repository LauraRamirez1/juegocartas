import shuffle from 'lodash.shuffle';
import Fontawesome from './Fontawesome';
const NUMBER_CARDS=8;

export default () => {

    const fontClass= Fontawesome();
    const cards =[2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
    let allCards=[];

    while(allCards.length < NUMBER_CARDS){
        const indexIcon = Math.floor(Math.random()*fontClass.length);
        const indexNumber = Math.floor(Math.random()*cards.length);

        const finalCard={
            icon:fontClass.splice(indexIcon, 1)[0],
            number:cards.splice(indexNumber, 1)[0],
            guess: false
        };
        allCards.push(finalCard);    
        allCards.push(finalCard);  
    }

    return shuffle(allCards);
};