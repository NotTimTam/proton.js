import { useEffect, useState } from "react";
import { Button, Pagination, ProgressBar } from "../nextjs-simple-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log("page change", page);
	}, [page]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<Pagination
				jumpArrows
				arrows
				emphasis="primary"
				loading={loading}
				activePage={page}
				totalPages={5000}
				boundaryRange={1}
				onPageChange={async (page) => {
					setLoading(true);

					setTimeout(() => {
						setPage(page);
						setLoading(false);
					}, 500);
				}}
			/>
		</div>
	);
}
