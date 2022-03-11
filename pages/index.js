import { useEffect, useState } from "react";
import { Button, Input, Pagination, ProgressBar } from "../proton.js";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [checkbox, setCheckbox] = useState(false);
	const [radio, setRadio] = useState(false);

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
				emphasis="primary"
				type="password"
				visible={!passwordHidden}
				onToggle={() => {
					setPasswordHidden(!passwordHidden);
					console.log("toggled if password was hidden");
				}}
			/>
			<Input
				type="radio"
				color="red"
				checked={radio}
				onToggle={() => setRadio(true)}
			/>
			<Input color="yellow" type="url" />
			<Input color="red" type="tel" />
			<Input
				color="purple"
				type="number"
				placeholder={"0 eee"}
				min={0}
				max={500000000000000000}
				step={1}
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
			<Input color="yellow" type="range" />
			<Input color="green" type="reset" />
			<Input color="blue" type="search" />
			<Input color="purple" type="submit" />
			<Input color="orange" type="time" />
			<Input color="green" type="week" />
		</div>
	);
}
