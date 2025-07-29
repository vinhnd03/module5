import { checkLogin } from "../../service/accountService"

const loginAction = (account) => {
    return {
        type: "LOGIN",
        payload: account
    }
}

const loginAction1 = (accountLogin) => {
    return async (dispatch) => {
        let account = await checkLogin(accountLogin);
        if(account){
            dispatch({
                type: "LOGIN",
                payload: account
            });
            return true;
        }else{
            dispatch({
                type: "FAIL",
                payload: null
            });
            return false;
        }
    }
}

const logoutAction1 = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOGOUT",
            payload: null
        });
    }
}

export {loginAction, loginAction1, logoutAction1}