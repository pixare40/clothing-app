import './button.styles'
import { GoogleSignInButton, InvertedSignInButton, BaseButton } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedSignInButton
    }[buttonType]);
}

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButtom = getButton(buttonType);

    return (
        <CustomButtom {...otherProps}>
            {children}
        </CustomButtom>
    )
}

export default Button;