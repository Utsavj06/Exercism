/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  //throw new Error('Please implement the createVisitor function.');
  console.log(name, age, ticketId);
  const obj ={
    "name":name,
    "age":age,
    "ticketId":ticketId
  }
  return obj;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  //throw new Error('Please implement the revokeTicket function.');
  console.log(visitor);
  if(visitor){
    visitor.ticketId=null;
  }
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  //throw new Error('Please implement the ticketStatus function.');
  console.log(tickets[ticketId]);
   if(tickets[ticketId]===undefined) return "unknown ticket id";
   else if (tickets[ticketId]===null) return "not sold" ;
   else return "sold to "+ tickets[ticketId];
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  //throw new Error('Please implement the simpleTicketStatus function.');
  console.log(tickets[ticketId]);
  if(tickets[ticketId]===undefined) return "invalid ticket !!!";
  else if(tickets[ticketId]===null) return "invalid ticket !!!";
  else return tickets[ticketId];
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  //throw new Error('Please implement the gtcVersion function.');
  console.log(visitor.hasOwnProperty("gtc"));
  if(visitor.hasOwnProperty("gtc")===true) return visitor.gtc.version;
}
