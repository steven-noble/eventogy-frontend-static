import PropTypes from "prop-types";

interface ButtonProps {
    name: string;
    primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, primary }) => {
    return (
        <button
            className={`border px-4 py-2 rounded-md text-sm ${
                primary ? 'bg-[#1a73e8] text-white' : 'bg-white'
            }`}
        >
            {name}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    primary: PropTypes.bool,
};

export default Button;
