import { signInWidthGoogle, registerUserWidthEmailPassword,  loginWithEmailPassword, logoutfIREBASE } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) =>{
    return async(dispatch) => {
        dispatch( checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch( checkingCredentials());

        const result = await( signInWidthGoogle() )

        if (!result.ok) return dispatch( logout(result.errorMessage) )

        dispatch(login(result))
    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials());
        const {ok, uid, photoURL, errorMessage} = await registerUserWidthEmailPassword({email, password, displayName})

        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutfIREBASE();
        dispatch(clearNotesLogout)
        dispatch( logout({}) );

    }
}


