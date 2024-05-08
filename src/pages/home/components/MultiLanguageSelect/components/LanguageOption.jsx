import { components } from "react-select";
import { ICONS } from "../../../../../assets";

const LanguageOption = ({ isDisabled, ...props }) => !isDisabled ? (
    <components.Option {...props}>
        <div className="">
            <img src={props?.data?.imageUrl} alt="adimg" /> 
            <span>{props.data?.label}</span>
        </div>
    </components.Option>
) : null;

export default LanguageOption