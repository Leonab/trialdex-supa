import { Box } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

const QRCode = (props) => {
	return (
		<Box padding={5}>
			<QRCodeSVG value={props.value} level={"L"} size={256} />
		</Box>
	);
};

export default QRCode;
