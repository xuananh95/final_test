import { getTranslation } from "./utils";

const Header = ({ length, language }) => {
    return (
        <div className="header">
            {length === 0
                ? getTranslation(language, "headerZero")
                : `${getTranslation(
                      language,
                      "headerFirst"
                  )} ${length} ${getTranslation(language, "headerLast")}`}
        </div>
    );
};

export default Header;
