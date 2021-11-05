/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  //throw new Error('Implement the getFirstCard function');
  const [first , second, ...all] = deck;
  return first;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  //throw new Error('Implement the getSecondCard function');
  const [first , second, ...all] = deck;
  return second;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  //throw new Error('Implement the swapTopTwoCards function');
  const [first , second, ...all] = deck;
  const newdeck = [second,first,...all];
  return newdeck;
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  //throw new Error('Implement the discardTopCard function');
  const [first ,...all] = deck;
  const newdeck = [first,all];
  console.log(newdeck);
  return newdeck;
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  //throw new Error('Implement the insertFaceCards function');
 console.log(deck);
  const [first ,...all] = deck;
  let newdeck = [first];
  //console.log(newdeck);
  for(let key1 of FACE_CARDS){
     newdeck.push(key1);
  }
  for(let key2 of all){
     newdeck.push(key2);
  }
  console.log(newdeck);
  return newdeck;
}
