import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectAdminUser, selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLink, LogoContainer, NavLinks} from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const adminUser = useSelector(selectAdminUser);

    // const { isCartOpen } = useContext(CartContext);
    
    const isCartOpen = useSelector(selectIsCartOpen)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"/>  
                </LogoContainer>
                <NavLinks>
                    {adminUser?.admin && <NavLink to='/panelAdmin'>Panel Admin</NavLink> }
                    <NavLink to='/shop'>
                        COMPRAR
                    </NavLink>
                        {currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                                {' '}
                                SALIR {' '}
                            </NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                INGRESAR
                            </NavLink>
                        )}
                        <CartIcon />
                        </NavLinks>
                        { isCartOpen && <CartDropdown /> }
                    </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;