import { useEffect, useState } from "react";
import { Button, ProgressBar } from "../nextjs-simple-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [sel, setSel] = useState("1");
	const [loadedColor, setLoadedColor] = useState("red");
	const [sliderVal, setSliderVal] = useState(50);
	const [overlay, setOverlay] = useState(true);
	const [border, setBorder] = useState(true);

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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<ProgressBar
					color={loadedColor}
					style={{ marginTop: "1rem" }}
					value={sliderVal}
					min={0}
					max={100}
					// percentage="right"
					border={border}
					overlay={overlay}
					backline
				>
					<ProgressBar.Label>
						<ProgressBar.Dot hollow />
					</ProgressBar.Label>

					<ProgressBar.Label>
						<ProgressBar.Dot />
					</ProgressBar.Label>

					<ProgressBar.Label>
						<ProgressBar.Dot hollow />
					</ProgressBar.Label>

					<ProgressBar.Label>
						<ProgressBar.Dot />
					</ProgressBar.Label>

					<ProgressBar.Label>
						<ProgressBar.Dot hollow />
					</ProgressBar.Label>
				</ProgressBar>
				<Button.Group>
					<Button
						hollow
						color={loadedColor}
						onClick={() => setOverlay(!overlay)}
					>
						{overlay ? <BsToggle2On /> : <BsToggle2Off />}
						Toggle Overlay
						<Button.Label>{overlay ? "Off" : "On"}</Button.Label>
					</Button>
					<Button
						color={loadedColor}
						onClick={() => setBorder(!border)}
					>
						{border ? <BsToggle2On /> : <BsToggle2Off />}
						Toggle Border
						<Button.Label>{border ? "Off" : "On"}</Button.Label>
					</Button>
				</Button.Group>
				{/* <input
					type="range"
					min={0}
					max={100}
					step={1}
					onChange={(e) => {
						setSliderVal(e.target.value);
					}}
				/> */}
			</div>
		</div>
	);
}
