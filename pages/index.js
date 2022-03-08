import { useEffect, useState } from "react";
import { Button, ProgressBar } from "../nextjs-simple-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [sel, setSel] = useState("1");
	const [loadedColor, setLoadedColor] = useState("red");
	const [sliderVal, setSliderVal] = useState(50);
	const [overlay, setOverlay] = useState(false);
	const [border, setBorder] = useState(true);

	const handleSelected = (e) => {
		// console.log(sel);
		setSel(e.target.value);
		setLoadedColor(e.target.getAttribute("color"));
		console.log(sel);
	};

	const handleChange = () => {
		setSliderVal((sliderVal) => (sliderVal < 100 ? sliderVal + 1 : 0));
	};

	useEffect(() => {
		window.setInterval(handleChange, 75);

		return () => {
			window.clearInterval(handleChange, 75);
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
				<Button.Group>
					<Button
						compact
						emphasis={overlay ? "primary" : "secondary"}
						onClick={() => setOverlay(!overlay)}
					>
						<Button.Label>
							{overlay ? <BsToggle2On /> : <BsToggle2Off />}
						</Button.Label>
						Overlay {!overlay ? "Off" : "On"}
					</Button>
					<Button
						compact
						emphasis={border ? "primary" : "secondary"}
						onClick={() => setBorder(!border)}
					>
						<Button.Label>
							{border ? <BsToggle2On /> : <BsToggle2Off />}
						</Button.Label>
						Border {!border ? "Off" : "On"}
					</Button>
				</Button.Group>
				<ProgressBar
					color={loadedColor}
					value={sliderVal}
					min={0}
					max={100}
					percentage="left"
					border={border}
					overlay={overlay}
				>
					{/* <ProgressBar.Label>Loading... {sliderVal}</ProgressBar.Label> */}
					<ProgressBar.Label>
						Loading...
						{/* {sliderVal % 2 ? "..." : sliderVal % 1 ? ".." : "."} */}
					</ProgressBar.Label>
					<ProgressBar.Spacer invisible={!overlay} />
					<ProgressBar.Label>Done!</ProgressBar.Label>
				</ProgressBar>
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
