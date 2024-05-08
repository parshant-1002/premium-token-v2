import { components } from "react-select";
import { ICONS } from "../../../../../assets";

const CustomSingleValue = ({ isDisabled, ...props }) => !isDisabled ? (
    <components.SingleValue {...props}>
        <div className="">
            <img src={props?.data?.imageUrl} alt="adimg" /> 
            <span>{props.data?.languageCode}</span>
        </div>
    </components.SingleValue>
) : null;

export default CustomSingleValue