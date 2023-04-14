import { QRCodeSVG } from "qrcode.react";

const QRCode = (props) => {
	return (
		<QRCodeSVG value={props.value} level={"L"} size={200} />
	);
};

export default QRCode;
