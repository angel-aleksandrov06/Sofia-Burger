import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const isAuth = (InnerOuterComponent) =>{

    const OuterComponent = (props) => {
        const  { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (!isAuthenticated) {
            history.push('login');

            return null;
        }

        return <InnerOuterComponent {...props} />
    }

    return OuterComponent;
}

export default isAuth;