import { useState } from "react";
import { getTranslation } from "./utils";

const Footer = ({ handleChangeLanguage, language }) => {
    const [value, setValue] = useState("us");
    const handleSelectChange = (e) => {
        setValue(e.target.value);
        handleChangeLanguage(e.target.value);
    };
    return (
        <div>
            <h3>Made by MindX 🔥</h3>
            <div>
                <span style={{ marginRight: 10 }}>
                    {getTranslation(language, "footer")}
                </span>
                <select value={value} onChange={handleSelectChange}>
                    <option value="us">🇺🇸</option>
                    <option value="vn">🇻🇳</option>
                </select>
            </div>
        </div>
    );
};

export default Footer;
