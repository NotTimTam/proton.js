import React, { useEffect, useState } from "react";

const Button = (props) => {
	const {
		children,
		focusable,
		disabled,
		emphasis,
		icon,
		hollow,
		fill,
		color,
		circular,
		compact,
		loading,
		underline,
		selected,
	} = props;

	return (
		<button
			focusable={focusable && +focusable ? "1" : undefined}
			sel={selected && +selected ? "1" : undefined}
			loading={loading && +loading ? "1" : undefined}
			icon={icon && +icon ? "1" : undefined}
			hollow={hollow && +hollow ? "1" : undefined}
			fill={fill && +fill ? "1" : undefined}
			circular={circular && +circular ? "1" : undefined}
			compact={compact && +compact ? "1" : undefined}
			underline={underline && +underline ? "1" : undefined}
			tabIndex={focusable ? 0 : -1}
			disabled={disabled || !!loading}
			emphasis={emphasis || "default"}
			color={color && color}
			className={`nsc button`}
		>
			<div className="nsc children">{children}</div>
			{loading && (
				<div className="nsc loading">
					<div className="nsc dot"></div>
					<div className="nsc dot"></div>
					<div className="nsc dot"></div>
				</div>
			)}
		</button>
	);
};

const Group = (props) => {
	const { children, split, vertical, className, wrap } = props;

	const [extraAttributes, setExtraAttributes] = useState({});

	useEffect(() => {
		let nProps = { ...props };

		delete nProps.children;
		delete nProps.split;
		delete nProps.vertical;
		delete nProps.className;
		delete nProps.wrap;

		setExtraAttributes(nProps);
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	return (
		<div
			split={split && +split ? "1" : undefined}
			vertical={vertical && +vertical ? "1" : undefined}
			wrap={wrap && +wrap ? "1" : undefined}
			className={`nsc button-group${className ? " " + className : ""}`}
			{...applyProps()}
		>
			{children}
		</div>
	);
};

Button.Group = Group;

const Label = (props) => {
	const { children, icon, className } = props;

	const [extraAttributes, setExtraAttributes] = useState({});

	useEffect(() => {
		let nProps = { ...props };

		delete nProps.children;
		delete nProps.icon;
		delete nProps.className;

		setExtraAttributes(nProps);
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	return (
		<div
			icon={icon && +icon ? "1" : undefined}
			className={`nsc button-label${className ? " " + className : ""}`}
			{...applyProps()}
		>
			{children}
		</div>
	);
};

Button.Label = Label;

export default Button;
