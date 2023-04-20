import { QRCodeSVG } from "qrcode.react";

const QRCode = (props) => {
	const subject_id = props.value;
	const abs_path = window.location.href;
	const url = `${abs_path}/subjects/${subject_id}`;
	
	return (
		<QRCodeSVG value={url} level={"L"} size={200} />
	);
};

export default QRCode;
