import React, { useEffect, useState, useRef } from "react";
import { Button } from "../index";

// Checkbox
const Checkbox = ({ checked, onToggle }) => (
	<div
		className={`proton checkbox-display ${checked ? "checked" : ""}`}
		onClick={onToggle}
		ischecked={checked ? "true" : "false"}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className="proton input-icon bi bi-check-lg"
			viewBox="0 0 16 16"
		>
			<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
		</svg>
	</div>
);

// Radio
const Radio = ({ checked, onToggle }) => (
	<div
		className={`proton radio-display ${checked ? "checked" : ""}`}
		onClick={onToggle}
		ischecked={checked ? "true" : "false"}
	></div>
);

// Number
const Number = ({ applyProps, props }) => {
	const { placeholder, min, max, step, emphasis, color } = props;

	const inputRef = useRef(null);

	const [value, setValue] = useState(0);

	const handleInput = (val) => {
		if (typeof min === "number" && val < min) val = +min;
		if (typeof max === "number" && val > max) val = +max;

		setValue(+val);
	};

	return (
		<>
			<Button
				noborder
				icon
				onClick={() => handleInput(value - step)}
				emphasis={emphasis}
				color={color}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-dash"
					viewBox="0 0 16 16"
				>
					<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
				</svg>
			</Button>
			<input
				value={value}
				onChange={(e) => handleInput(e.target.value)}
				ref={inputRef}
				placeholder={placeholder ? placeholder : "Number"}
				{...applyProps()}
			/>
			<Button
				noborder
				icon
				onClick={() => handleInput(value + step)}
				emphasis={emphasis}
				color={color}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-plus"
					viewBox="0 0 16 16"
				>
					<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
				</svg>
			</Button>
		</>
	);
};

// Main Input
const Input = (props) => {
	const {
		className,
		type,
		onToggle,
		emphasis,
		color,
		visible,
		placeholder,
		checked,
		value,
	} = props;

	const [error, setError] = useState(null);
	const [warning, setWarning] = useState(null);
	const [extraAttributes, setExtraAttributes] = useState({});

	useEffect(() => {
		let nProps = { ...props };

		delete nProps.className;
		delete nProps.onToggle;
		delete nProps.emphasis;
		delete nProps.color;
		delete nProps.visible;

		setExtraAttributes(nProps);

		// Check for errors.
		setError(null);
		setWarning(null);
		if (props.type === "button") {
			setWarning(
				"WARNING: Use the included Proton Button component. (it's much better :D)"
			);
		}
	}, [props]);

	const applyProps = () => ({
		...extraAttributes,
	});

	const handleTel = () => {};

	// Creates the input HTML based on its type, for inputs that override their own HTML.
	const deployInput = () => {
		switch (type) {
			case "checkbox":
				return (
					<Checkbox
						checked={checked ? checked : false}
						onToggle={onToggle}
					/>
				);
			case "radio":
				return (
					<Radio
						checked={checked ? checked : false}
						onToggle={onToggle}
					/>
				);
			case "email":
				return (
					<input
						placeholder={
							placeholder ? placeholder : "john.doe@email.com"
						}
						{...applyProps()}
					/>
				);
			case "url":
				return (
					<input
						placeholder={
							placeholder ? placeholder : "https://website.com/"
						}
						{...applyProps()}
					/>
				);
			case "tel":
				return (
					<>
						<input
							placeholder={
								placeholder ? placeholder : "(012) 345-6789"
							}
							{...applyProps()}
						/>
					</>
				);
			case "number":
				return (
					<>
						<Number applyProps={applyProps} props={props} />
					</>
				);
			case "password":
				return (
					<>
						<input
							placeholder={placeholder ? placeholder : "Password"}
							{...applyProps()}
							type={visible ? "text" : "password"}
						/>
						<Button
							compact
							emphasis={emphasis}
							color={color}
							hollow
							noborder
							icon
							onClick={onToggle}
						>
							{visible ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="proton input-icon bi bi-eye"
									viewBox="0 0 16 16"
								>
									<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
									<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="proton input-icon bi bi-eye-slash"
									viewBox="0 0 16 16"
								>
									<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
									<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
									<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
								</svg>
							)}
						</Button>
					</>
				);
			default:
				return <input {...applyProps()} />;
		}
	};

	return (
		<div
			type={type && type}
			error={error && "1"}
			warning={warning && "1"}
			emphasis={emphasis || "default"}
			color={color && color}
			ischecked={checked === true ? "true" : undefined}
			className={`proton input${className ? " " + className : ""}`}
		>
			{error && <div className="proton error">{error}</div>}
			{warning && <div className="proton warning">{warning}</div>}
			{!error && !warning && <>{deployInput()}</>}
		</div>
	);
};

export default Input;
