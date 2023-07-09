Day 3: Perfectly Spherical Houses in a Vacuum
Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting coordinate, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new coordinate.

However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

For example:

> delivers presents to 2 houses: one at the starting coordinate, and one to the east.
> ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending coordinate.
> ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

- infinite two-dimensional grid of houses.
- starting coordinate
- new coordinate
- an elf
- houses receive at least one present?

  ^
  < >
  v

Santa
moveUp()
moveDown()

moveNorth will change the currentLocation of Santa by (+0, +1)
moveSouth will change the currentLocation of Santa by (+0, -1)
moveEast will change the currentLocation of Santa by (-1, 0)
moveWest will change the currentLocation of Santa by (+1, 0)

who will decide what will be the new coordinate of Santa if Santa will move North

this.#currentLocation = currentLocation.north();

this.#currentLocation.x += north.delta.x()
this.#currentLocation.y += north.delta.y()

```js
Santa {
constructor(startingPosition, housesVisited) {
this.#coordinate = startingPosition;
this.#housesVisited = housesVisited;
}

moveNorth() {
const nextLocation = this.#coordinate.nextInNorth();
housesVisited.add(nextLocation);
}

moveSouth() {
const nextCoordinate = this.#coordinate.nextInSouth();
housesVisited.add(nextCoordinate);
}
}
```

```js
Coordinate {

}
```

nextCoordinate = coordinate.nextInNorth();
nextCoordinate = coordinate.nextInSouth();
nextCoordinate = coordinate.nextInEast();
nextCoordinate = coordinate.nextInWest();

```js
main() {
elf.send(signals)
elf.countHousesSantaVisited
}
```

```
1*2*3
```
