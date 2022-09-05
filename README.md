## Nextjs Image Uploader

Drag and drop image uploader for React.

### Installation

```bash
pnpm add next-image-uploader
```

or

```bash
yarn add next-image-uploader
```

### Usage

```tsx
import React, { useState } from "react";
import ImageUploader from "react-image-uploader";

const App = () => {
	const [photo, setPhoto] = useState(null);

	return (
		<ImageUploader
			photo={photo}
			setPhoto={setPhoto}
			hoverIcon={hoverIcon}
			dropScope="window"
			onError={(error) => console.log(error)}
		/>
	);
};

export default App;

const hoverIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
		/>
	</svg>
);

```

### Props

**Main**

| Name     | Type     | Default | Description                                 |
| -------- | -------- | ------- | ------------------------------------------- |
| photo    | string   | ''      | The preview image to be displayed.          |
| setPhoto | function | null    | The callback function to receive the image. |

**Additional**

| Name            | Type                              | Default   | Description                                                                                                           |
| --------------- | --------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| alt             | string                            | 'image'   | The alt text of the Image.                                                                                            |
| objectFit       | string                            | 'cover'   | The object-fit property.                                                                                              |
| setFileName     | function                          | null      | The callback func to get the file name.                                                                               |
| setSize         | function                          | null      | The callback func to get the file size (width, height)                                                                |
| isFormik        | boolean                           | false     | If true, the **<font style="color: red;">setPhoto</font>** will receive the file object instead of the base64 string. |
| getFileSize     | function                          | null      | The callback func to get the file size                                                                                |
| disabled        | boolean                           | false     | If true, the uploader will be disabled                                                                                |
| inputRef        | React.RefObject<HTMLInputElement> | null      | The ref of the input element, if you want to control the input element                                                |
| className       | string                            | ''        | The class name of the uploader's root                                                                                 |
| hoverIcon       | React.ReactNode                   | null      | The icon to be displayed when hovering the uploader                                                                   |
| dropScope       | string                            | 'element' | The drop area of the uploader. 'element' means the whole uploader, 'window' means the whole window.                   |
| onError         | function                          | null      | The callback func to handle the error.                                                                                |
| onDraggingImage | string                            | null      | The displayed image when dragging the image.                                                                          |
