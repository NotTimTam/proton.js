import { useEffect, useState } from "react";
import { Button, Pagination, ProgressBar } from "../nextjs-simple-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Home() {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(10);
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
				// emphasis="primary"
				loading={loading}
				activePage={page}
				totalPages={totalPages}
				color="red"
				// boundaryRange={1}
				onPageChange={(page) => {
					setPage(page);
				}}
			/>
			<ProgressBar border overlay min={0} max={totalPages} value={page}>
				{[...Array(totalPages)].map((item) => (
					<>
						<ProgressBar.Spacer />
						<ProgressBar.Label>
							<ProgressBar.Dot hollow />
						</ProgressBar.Label>
					</>
				))}
			</ProgressBar>
		</div>
	);
}
