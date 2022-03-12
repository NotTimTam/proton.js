import { useEffect, useState } from "react";
import { Button, Card, Pagination, ProgressBar } from "../proton.js";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [passwordHidden, setPasswordHidden] = useState(true);
	const toggle = () => {
		setCheckbox(!checkbox);
		console.log("toggling clientside");
	};

	return (
		<Card.Group
			style={{
				height: "90vh",
			}}
		>
			<Card
				color="red"
				hovereffect
				noborder
				style={{ maxWidth: "20rem" }}
			>
				<Card.Image>
					<img
						src="https://picsum.photos/1000/800"
						style={{ width: "100%", height: "200px" }}
					/>
				</Card.Image>
				{/* <Card.Header>
					<h1>Hello World</h1>
				</Card.Header> */}
				<Card.Content flex>
					<h3>Duis id Cillum</h3>
					Anim duis laborum ullamco cillum qui amet consequat nulla
					culpa amet incididunt sint ex quis.
				</Card.Content>
			</Card>
			<Card
				color="red"
				hovereffect
				dropshadow
				noborder
				style={{ maxWidth: "20rem" }}
			>
				<Card.Image>
					<img
						src="https://picsum.photos/1001/800"
						style={{ width: "100%", height: "200px" }}
					/>
				</Card.Image>
				{/* <Card.Header>
					<h1>Hello World</h1>
				</Card.Header> */}
				<Card.Content flex>
					<h3>Duis id Cillum</h3>
					Anim duis laborum ullamco cillum qui amet consequat nulla
					culpa amet incididunt sint ex quis.
				</Card.Content>
			</Card>
			<Card
				color="red"
				hovereffect
				dropshadow
				noborder
				style={{ maxWidth: "20rem" }}
			>
				<Card.Image>
					<img
						src="https://picsum.photos/1002/800"
						style={{ width: "100%", height: "200px" }}
					/>
				</Card.Image>
				{/* <Card.Header>
					<h1>Hello World</h1>
				</Card.Header> */}
				<Card.Content flex>
					<h3>Duis id Cillum</h3>
					Anim duis laborum ullamco cillum qui amet consequat nulla
					culpa amet incididunt sint ex quis.
				</Card.Content>
			</Card>
			<Card
				color="red"
				hovereffect
				dropshadow
				noborder
				style={{ maxWidth: "20rem" }}
			>
				<Card.Image>
					<img
						src="https://picsum.photos/1003/800"
						style={{ width: "100%", height: "200px" }}
					/>
				</Card.Image>
				{/* <Card.Header>
					<h1>Hello World</h1>
				</Card.Header> */}
				<Card.Content flex>
					<h3>Duis id Cillum</h3>
					Anim duis laborum ullamco cillum qui amet consequat nulla
					culpa amet incididunt sint ex quis.
				</Card.Content>
			</Card>
			<Card
				color="red"
				hovereffect
				dropshadow
				noborder
				style={{ maxWidth: "20rem" }}
			>
				<Card.Image>
					<img
						src="https://picsum.photos/1004/800"
						style={{ width: "100%", height: "200px" }}
					/>
				</Card.Image>
				{/* <Card.Header>
					<h1>Hello World</h1>
				</Card.Header> */}
				<Card.Content flex>
					<h3>Duis id Cillum</h3>
					Anim duis laborum ullamco cillum qui amet consequat nulla
					culpa amet incididunt sint ex quis.
				</Card.Content>
			</Card>
		</Card.Group>
	);
}
