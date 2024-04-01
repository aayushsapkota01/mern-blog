import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="min-h-screen bg-white text-gray-700 dark:bg-[rgb(16,23,42)]">
        {children}
      </div>
    </div>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
