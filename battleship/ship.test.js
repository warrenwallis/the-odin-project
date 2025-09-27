// Ship.test.js
import Ship from "./Ship";

describe("Ship", () => {
	it("initializes with correct length, 0 hitCount, and sunk false", () => {
		const ship = Ship(3);
		expect(ship.length).toBe(3);
		expect(ship.hitCount).toBe(0);
		expect(ship.sunk).toBe(false);
	});

	it("increments hitCount when hit() is called once", () => {
		const ship = Ship(3);
		ship.hit();
		expect(ship.hitCount).toBe(1);
	});

	it("increments hitCount correctly with multiple hits", () => {
		const ship = Ship(3);
		ship.hit();
		ship.hit();
		ship.hit();
		expect(ship.hitCount).toBe(3);
	});

	it("does not auto-sink the ship when hitCount equals length (because sunk logic not implemented yet)", () => {
		const ship = Ship(3);
		ship.hit();
		ship.hit();
		ship.hit();
		expect(ship.sunk).toBe(false);
	});
});
