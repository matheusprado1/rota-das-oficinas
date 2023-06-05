import { StyledButton } from "./styles";

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
