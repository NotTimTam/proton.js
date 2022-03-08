import React, { useEffect, useRef, useState } from "react";

const Percentage = ({ value }) => {
	return <div className="nsc percentage">{value}</div>;
};

const ProgressBar = (props) => {
	const {
		children,
		className,
		value,
		min,
		max,
		color,
		percentage,
		overlay,
		border,
		backline,
	} = props;

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
		delete nProps.className;
		delete nProps.value;
		delete nProps.min;
		delete nProps.max;
		delete nProps.color;
		delete nProps.percentage;
		delete nProps.overlay;
		delete nProps.border;
		delete nProps.backline;

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
			border={border && +border ? "1" : undefined}
			className={`nsc progress-bar${className ? " " + className : ""}`}
			{...applyProps()}
		>
			<div className="nsc fill" style={{ width: `${val}%` }}></div>
			<div
				backline={backline && +backline ? "1" : undefined}
				className="nsc overlay"
			>
				{percentage === "left" && <Percentage value={`${val}%`} />}
				<div className="nsc children">{children}</div>
				{percentage === "right" && <Percentage value={`${val}%`} />}
			</div>
		</div>
	);
};

const Spacer = (props) => {
	const { className, invisible } = props;

	const [extraAttributes, setExtraAttributes] = useState({});

	useEffect(() => {
		let nProps = { ...props };

		delete nProps.className;
		delete nProps.invisible;

		setExtraAttributes(nProps);
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	return (
		<div
			invisible={invisible && +invisible ? "1" : undefined}
			className={`nsc spacer${className ? " " + className : ""}`}
			{...applyProps()}
		></div>
	);
};

ProgressBar.Spacer = Spacer;

const Label = (props) => {
	const { children, className } = props;

	const [extraAttributes, setExtraAttributes] = useState({});

	useEffect(() => {
		let nProps = { ...props };

		delete nProps.children;
		delete nProps.className;

		setExtraAttributes(nProps);
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	return (
		<div
			className={`nsc label${className ? " " + className : ""}`}
			{...applyProps()}
		>
			{children}
		</div>
	);
};

ProgressBar.Label = Label;

const Dot = (props) => {
	const { className, hollow } = props;

	const [extraAttributes, setExtraAttributes] = useState({});
	useEffect(() => {
		let nProps = { ...props };

		delete nProps.children;
		delete nProps.className;
		delete nProps.hollow;

		setExtraAttributes(nProps);
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	return (
		<div
			hollow={hollow && +hollow ? "1" : undefined}
			className={`nsc dot${className ? " " + className : ""}`}
			{...applyProps()}
		></div>
	);
};

ProgressBar.Dot = Dot;

export default ProgressBar;
