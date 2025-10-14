/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const EditContext = createContext();

export function EditProvider({ children }) {
	const [edit, setEdit] = useState(true);

	const toggleEdit = () => {
		setEdit((prev) => !prev);
	};

	return (
		<EditContext.Provider value={{ edit, toggleEdit }}>
			{children}
		</EditContext.Provider>
	);
}

export const useEdit = () => useContext(EditContext);
