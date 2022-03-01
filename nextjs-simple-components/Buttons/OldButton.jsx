import React, { useEffect, useState } from "react";

const Button = (props) => {
	const [newClassName, setNewClassName] = useState("");
	const [newProps, setNewProps] = useState({});

	const {
		style,
		round,
		padding,
		margin,
		fill,
		border,
		underline,
		animated,
		disabled,
		loading,
		shadow,
		color,
		loadingColor,
	} = props;

	useEffect(() => {
		props.class ||
			(props.className &&
				setNewClassName(props.class || props.className));

		let nProps = { ...props };

		delete nProps.round;
		delete nProps.padding;
		delete nProps.margin;
		delete nProps.fill;
		delete nProps.border;
		delete nProps.underline;
		delete nProps.animated;
		delete nProps.disabled;
		delete nProps.loading;
		delete nProps.style;

		setNewProps(nProps);
	}, [props]);

	const applyProps = () => ({
		...newProps,
	});

	return (
		<button
			disabled={disabled || loading ? true : false}
			{...applyProps()}
			className={`
				${newClassName && newClassName} nsc button ${Object.keys(props)
				.filter((propKey) => props[propKey] === true)
				.join(" ")}
			`.trim()}
			style={style}
			color={color}
			loadingColor={loadingColor}
		>
			<div className="children">
				{props.children ? props.children : "undefined"}
			</div>
			{loading && (
				<div className="loading">
					<div
						loadingColor={loadingColor}
						className="loadingDot"
					></div>
					<div
						loadingColor={loadingColor}
						className="loadingDot"
					></div>
					<div
						loadingColor={loadingColor}
						className="loadingDot"
					></div>
				</div>
			)}
		</button>
	);
};

export default Button;
