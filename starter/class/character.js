class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.health = 100;
    this.strength = 10;

  }

  applyDamage(amount) {
    this.health = this.health - amount;
    if (this.health <= 0) {
      return this.die();
    } else {
      return this.health;
    }
  }

  die() {
    let characterItems = this.items
    this.currentRoom.items.push(...characterItems);
    this.items = [];
    this.currentRoom = null;
  }
}



module.exports = {
  Character,
};
