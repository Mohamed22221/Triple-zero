import React from 'react';
import Switch from "react-switch";
const SwitchButton = ({id, value, onChange, label}) => {
    return (
         <label className="switch-item" htmlFor={id}>
            <span> {label}</span>
            <Switch
                checked={value}
                onChange={onChange}
                handleDiameter={28}
                offColor="#dfdcdc"
                onColor="#f7d294"
                offHandleColor="#707070"
                onHandleColor="#FB9E00"
                height={30}
                width={70}
                borderRadius={50}
                activeBoxShadow={false}
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={false}
                checkedHandleIcon={false}
                className="react-switch"
                id={id}
            />
        </label>
    );
}

export default SwitchButton;
