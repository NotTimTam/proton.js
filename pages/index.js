import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, ProgressBar } from "../nextjs-simple-components";
import {
	BsAlarm,
	BsBug,
	BsCalendar,
	BsClock,
	BsCurrencyDollar,
	BsCurrencyEuro,
	BsFileEarmarkX,
	BsGlobe,
	BsPerson,
	BsTrash,
} from "react-icons/bs";

export default function Home() {
	const [sel, setSel] = useState(null);
	const [loadedColor, setLoadedColor] = useState("orange");
	const [sliderVal, setSliderVal] = useState(1);

	const handleSelected = (e) => {
		// console.log(sel);
		setSel(e.target.value);
		setLoadedColor(e.target.getAttribute("color"));
		console.log(sel);
	};

	const handleChange = () => {
		setSliderVal((sliderVal) => (sliderVal <= 100 ? sliderVal + 1 : 0));
	};

	useEffect(() => {
		window.addEventListener("keydown", handleChange);

		return () => {
			window.removeEventListener("keydown", handleChange);
		};
	}, []);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Button.Group
				wrap
				style={{ margin: "0 auto", width: "max-content" }}
			>
				<Button
					value="1"
					hollow
					underline
					color="red"
					selected={sel === "1"}
					onClick={handleSelected}
				>
					Red
				</Button>
				<Button
					value="2"
					underline
					hollow
					color="orange"
					selected={sel === "2"}
					onClick={handleSelected}
				>
					Orange
				</Button>
				<Button
					value="3"
					underline
					hollow
					color="yellow"
					selected={sel === "3"}
					onClick={handleSelected}
				>
					Yellow
				</Button>
				<Button
					value="4"
					underline
					hollow
					color="green"
					selected={sel === "4"}
					onClick={handleSelected}
				>
					Green
				</Button>
				<Button
					value="5"
					underline
					hollow
					color="blue"
					selected={sel === "5"}
					onClick={handleSelected}
				>
					Blue
				</Button>
				<Button
					value="6"
					underline
					hollow
					color="purple"
					selected={sel === "6"}
					onClick={handleSelected}
				>
					Purple
				</Button>
			</Button.Group>
			<div>
				<ProgressBar
					color={loadedColor}
					style={{ marginTop: "1rem" }}
					value={sliderVal}
					min={0}
					max={100}
					// percentage="right"
					overlay
				>
					<span>1</span>
					<ProgressBar.Spacer />
					<span>2</span>
					<ProgressBar.Spacer />
					<span>3</span>
					<ProgressBar.Spacer />
					<span>4</span>
					<ProgressBar.Spacer />
					<span>5</span>
					<ProgressBar.Spacer />
					<span>6</span>
					<ProgressBar.Spacer />
					<span>7</span>
					<ProgressBar.Spacer />
					<span>8</span>
					<ProgressBar.Spacer />
					<span>9</span>
					<ProgressBar.Spacer />
					<span>10</span>
				</ProgressBar>
			</div>
		</div>
	);
}
