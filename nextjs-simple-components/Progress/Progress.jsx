import React, { useEffect, useState } from "react";

const Percentage = ({ value }) => {
	return <div className="nsc percentage">{value}</div>;
};

const ProgressBar = (props) => {
	const { children, value, min, max, color, percentage, overlay } = props;

	const [val, setVal] = useState(value);

	useEffect(() => {
		setVal(value);
		if (val < min) setVal(min);
		if (val > max) setVal(max);
	}, [value]);

	const [extraAttributes, setExtraAttributes] = useState({});

	useEffect(() => {
		let nProps = { ...props };

		delete nProps.children;
		delete nProps.value;
		delete nProps.min;
		delete nProps.max;
		delete nProps.color;
		delete nProps.percentage;
		delete nProps.overlay;

		setExtraAttributes(nProps);
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	return (
		<div
			color={color && color}
			min={min}
			max={max}
			value={val}
			overlay={overlay && +overlay ? "1" : undefined}
			className="nsc progress-bar"
			{...applyProps()}
		>
			<div className="nsc fill" style={{ width: `${val}%` }}></div>
			<div className="nsc overlay">
				{percentage === "left" && <Percentage value={`${val}%`} />}
				<div className="nsc children">{children}</div>
				{percentage === "right" && <Percentage value={`${val}%`} />}
			</div>
		</div>
	);
};

const Spacer = () => <div className="nsc spacer"></div>;

ProgressBar.Spacer = Spacer;

export default ProgressBar;
