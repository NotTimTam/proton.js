import { useEffect, useState } from "react";
import { Button, Pagination, ProgressBar } from "../proton.js";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [passwordHidden, setPasswordHidden] = useState(true);
	const toggle = () => {
		setCheckbox(!checkbox);
		console.log("toggling clientside");
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		></div>
	);
}
