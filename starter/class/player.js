const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    //add item to inventory from the current room
    const item = this.currentRoom.getItemByName(itemName);
    this.items.push(item);
    //filter item from the room;
    this.currentRoom.items = this.currentRoom.items.filter(retainedItems => retainedItems.name !== itemName)
  }

  dropItem(itemName) {

    //add the item from the player inventory to the current room
    const item = this.getItemByName(itemName);
    this.currentRoom.items.push(item);
    //filter item from player inventory
    this.items = this.items.filter(retainedItems => retainedItems.name !== itemName)
  }

  eatItem(itemName) {

    // if item is a food, it is removed from inventory
    // if item isn't a food, get a message saying it can't be eaten

    let item = this.getItemByName(itemName);
    if (item instanceof Food) {
      this.items = this.items.filter(el => el.name !== itemName);
    } else {
      console.log(`${itemName} cannot be eaten!`)
    }

  }

  getItemByName(name) {
    return this.items.filter(item => item.name === name)[0]
  }

  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
