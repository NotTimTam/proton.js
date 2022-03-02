import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../nextjs-simple-components";
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
	const [sel, setSel] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSel(!sel);
		}, 1000);
	}, [sel]);

	return (
		<div>
			<Button>
				Hello
				<Button.Label icon className="lololool" id="hehe">
					<BsGlobe /> lol
				</Button.Label>
			</Button>

			<Button hollow>
				Hello
				<Button.Label>World</Button.Label>
			</Button>

			<Button.Group split wrap>
				<Button selected={sel} hollow circular color="error">
					<BsCurrencyEuro /> Euros
				</Button>
				<Button hollow underline color="green">
					<BsCurrencyDollar /> Real Money
				</Button>
			</Button.Group>
			<Button.Group wrap>
				<Button compact>Whaoh</Button>
				<Button color="yellow" underline compact>
					<BsFileEarmarkX /> lol
					<Button.Label icon>
						<BsBug /> lol
					</Button.Label>
				</Button>

				<Button compact color="red">
					<BsFileEarmarkX /> Whaoh
				</Button>
			</Button.Group>
			<Button.Group
				vertical
				style={{
					width: "75vw",
					transform: "translate(-50%, -50%)",
					position: "absolute",
					top: "50%",
					left: "50%",
					maxWidth: "250px",
				}}
			>
				<Button emphasis="default">
					<BsClock /> Clock
				</Button>
				<Button emphasis="primary" hollow>
					<BsAlarm /> Alarms
					<Button.Label>World</Button.Label>
				</Button>
				<Button color="yellow">
					<BsFileEarmarkX />
					<Button.Label>World</Button.Label>
				</Button>
				<Button emphasis="secondary">
					<BsCalendar /> Calendar
				</Button>
				<Button color="purple">
					<BsTrash /> Trashcan
				</Button>
				<Button icon color="red">
					<BsPerson />
				</Button>
			</Button.Group>
		</div>
	);
}
