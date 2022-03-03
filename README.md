# nextjs-simple-components

A small, easy-to-learn UI library for Next.js/React.js

NSC is not a full UI library, instead it is a collection of highly modifiable components for you to drop into existing projects.

Works well with these libraries:

[`react-icons`](https://react-icons.github.io/react-icons/)
[`bootstrap-icons`](https://icons.getbootstrap.com/)

---

# Documentation

## Importing

All components can be imported with:

```jsx
import { ComponentName } from "nextjs-simple-components";
```

## Applying Modifications

You can apply style/state changes to each component either through attributes. Example:

```jsx
return <Component icon emphasis="primary" />;
```

Style modifications that use booleans are defaulted to true when they exist on components.

```jsx
return <>
	<! -- Effectively the same. -- >
	<Component icon />
	<Component icon={true}>
</>;
```

Any other attributes added to the component will be accepted like normal by React.js/Next.js. (_i.e._ `className`, `style`, `key`)

## <a name="colors">Colors</a>

You can apply colors to most of the components with a `color` attribute.

```jsx
return <Component color="red" />;
```

Here is a list of the available colors. You can always modify the colors in the styles folder to suite your needs.

| Name      | Value                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| `red`     | <span style="color: #ed5564; font-weight: 800; font-family: monospace; text-transform: uppercase;">#ed5564</span> |
| `orange`  | <span style="color: #f1b037; font-weight: 800; font-family: monospace; text-transform: uppercase;">#f1b037</span> |
| `yellow`  | <span style="color: #ffce54; font-weight: 800; font-family: monospace; text-transform: uppercase;">#ffce54</span> |
| `green`   | <span style="color: #a0d568; font-weight: 800; font-family: monospace; text-transform: uppercase;">#a0d568</span> |
| `blue`    | <span style="color: #4fc1e8; font-weight: 800; font-family: monospace; text-transform: uppercase;">#4fc1e8</span> |
| `purple`  | <span style="color: #ac92eb; font-weight: 800; font-family: monospace; text-transform: uppercase;">#ac92eb</span> |
| `warning` | <span style="color: #f8de6b; font-weight: 800; font-family: monospace; text-transform: uppercase;">#F8DE6B</span> |
| `error`   | <span style="color: #EB6383; font-weight: 800; font-family: monospace; text-transform: uppercase;">#EB6383</span> |
| `success` | <span style="color: #90ec90; font-weight: 800; font-family: monospace; text-transform: uppercase;">#90ec90</span> |
| `default` | <span style="color: #c5c5c5; font-weight: 800; font-family: monospace; text-transform: uppercase;">#c5c5c5</span> |

Certain components can have emphasis applied to them. This can be:

-   <span style="color: #c42331; font-weight: 800; font-family: monospace">primary (red)</span>,
-   <span style="color: #4e23c4; font-weight: 800; font-family: monospace">secondary (purple)</span>,
-   or, <span style="color: #c5c5c5; font-weight: 800; font-family: monospace">none (default)</span>

## Components

### Button

The button component has a variety of animations and styles for you to pick from.

```jsx
import { Button } from "nextjs-simple-components";

return <Button>Text/Children Here</Button>;
```

#### States

The button can be in many states that effect its interactivity/appearance. These can be applied as booleans via the button's attributes. Example:

```jsx
return <Button disabled={true}>Text/Children Here</Button>;
// or
return <Button disabled>Text/Children Here</Button>;
```

| Attribute   | Value            | Description                                                                                          |
| ----------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| `focusable` | `true` / `false` | Sets whether or not a button can be focused on. Default `false`.                                     |
| `disabled`  | `true` / `false` | Sets whether or not a button can be clicked on. Default `false`.                                     |
| `loading`   | `true` / `false` | Sets whether or not a button is loading. Default `false`. Buttons with this state are also disabled. |

#### Style Modifications

| Attribute   | Value                                                         | Description                                                                        |
| ----------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `emphasis`  | `"primary"` / `"secondary"` / `"none"`                        | Sets emphasis using the primary/secondary color-scheme. Default `none`.            |
| `color`     | Any value from the [supported list of colors](#colors) above. | Sets the buttons color. Overrides emphasis attribute.                              |
| `icon`      | `true` / `false`                                              | Squares up the button for icon-only.                                               |
| `hollow`    | `true` / `false`                                              | Hollows out the button and gives it a border.                                      |
| `underline` | `true` / `false`                                              | Makes the button's border an underline only. **_Must be a hollow button!_**        |
| `fill`      | `true` / `false`                                              | Makes the button fill all available horizontal space.                              |
| `compact`   | `true` / `false`                                              | Makes the button's padding and font smaller so that it can fit in a smaller space. |

---

### Button Group

The button group holds an unlimited number of `<Button/>`s in a stylish and compact way.

```jsx
import { Button } from "nextjs-simple-components";

return (
	<Button.Group>
		...<Button></Button>
	</Button.Group>
);
```

#### Style Modifications

| Attribute  | Value            | Description                                                                  |
| ---------- | ---------------- | ---------------------------------------------------------------------------- |
| `split`    | `true` / `false` | Puts a gap between the buttons.                                              |
| `wrap`     | `true` / `false` | Stops the group from staying in one line and allows it to fit spaces better. |
| `vertical` | `true` / `false` | Lists the buttons vertically rather than horizontally.                       |

---

### Button Label

A button label goes inside of a button and can be used for icons, to indicate data, or whatever else you what emphasis applied to.

```jsx
import { Button } from "nextjs-simple-components";

return (
	<Button>
		Cart
		<Button.Label>{cart.length}</Button.Label>
	</Button>
);
```

#### Style Modifications

| Attribute | Value            | Description                                                      |
| --------- | ---------------- | ---------------------------------------------------------------- |
| `icon`    | `true` / `false` | Properly displays when only an svg/icon is present in the label. |

---

### Progress Bar

The progress bar allows you to display a percentage value with any text over it.

---

### Pagination

---
