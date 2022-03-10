import { useEffect, useState } from "react";
import {
	Button,
	Input,
	Pagination,
	ProgressBar,
} from "../nextjs-simple-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [checkbox, setCheckbox] = useState(false);
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
		>
			<Input color="red" type="button" />
			<Input color="orange" type="text" placeholder="lolol" />
			<Input
				color="yellow"
				type="checkbox"
				checked={checkbox}
				onToggle={toggle}
			/>
			<Input color="red" type="email" />
			<Input
				color="red"
				type="password"
				visible={!passwordHidden}
				onToggle={() => {
					setPasswordHidden(!passwordHidden);
					console.log("toggled if password was hidden");
				}}
			/>

			<br />
			<br />
			<br />
			<br />
			<br />

			<Input color="green" type="color" />
			<Input color="blue" type="date" />
			<Input color="purple" type="datetime-local" />
			<Input color="orange" type="file" />
			<Input color="yellow" type="hidden" />
			<Input color="green" type="image" />
			<Input color="blue" type="month" />
			<Input color="purple" type="number" />
			<Input color="orange" type="radio" />
			<Input color="yellow" type="range" />
			<Input color="green" type="reset" />
			<Input color="blue" type="search" />
			<Input color="purple" type="submit" />
			<Input color="red" type="tel" />
			<Input color="orange" type="time" />
			<Input color="yellow" type="url" />
			<Input color="green" type="week" />
		</div>
	);
}
