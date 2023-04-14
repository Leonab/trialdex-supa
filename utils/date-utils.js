import { format } from "date-fns";

const defaultDateFormat = "dd MMM, yyyy";

export const prettyDate = (datetime) => {
    if (!datetime) {
        return "";
    }
    return format(new Date(datetime), defaultDateFormat);
}