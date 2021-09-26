// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  //throw new Error('Implement the getItem function');
  //console.log(cards[position]);
  return(cards[position])
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  //throw new Error('Implement the setItem function');
  // var index= cards[position];
  // console.log(index);

   cards[position] =replacementCard;
    //console.log(cards);
    return cards;
   
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  //throw new Error('Implement the insertItemAtTop function');
 //cards.insert(1 , newCard);
  cards.push(newCard);
  //console.log(cards);
  return cards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  //throw new Error('Implement the removeItem function');
  // Test 18 , 17 ,20
  //console.log (cards.shift(position));
  // cards.pop()
  cards.splice(position , 1)
 // console.log(cards);
  return cards
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  //throw new Error('Implement the removeItemFromTop function');
  // test 21 and 22
  cards.pop();
  //console.log(cards );
  return (cards);
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  //throw new Error('Implement the insertItemAtBottom function');
  cards.unshift(newCard);
  //console.log(cards);
  return cards;
}

/**
 * Remove card from the beginning of the cards cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  //throw new Error('Implement the removeItemAtBottom function');

 cards.shift();
  // consol.log(cards);
  return cards
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
 // throw new Error('Implement the checkSizeOfStack function');
  const len= cards.length;
  
   // console.log(stackSize);
//console.log(len)

  if (len === stackSize){
    return true;
  }
  else {
    return false;}
   
  
}
