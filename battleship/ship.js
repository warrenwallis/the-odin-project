const Ship = (length) => {
	return {
		length,
		hitCount: 0,
		sunk: false,
		hit() {
			this.hitCount++;
		},
	};
};

export default Ship;
