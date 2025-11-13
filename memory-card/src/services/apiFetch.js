const { VITE_GIPHY_API_KEY, VITE_GIPHY_BASE_URL } = import.meta.env;

const apiFetch = (path) => {
	return fetch(
		`${VITE_GIPHY_BASE_URL + path}?api_key=${VITE_GIPHY_API_KEY}&limit=20`
	);
};

export default apiFetch;

// https://api.giphy.com/v2/emoji?api_key=H5OGThT1nbBs0rxOfV7BFSweBAJPm6XV&limit=10&offset=0
