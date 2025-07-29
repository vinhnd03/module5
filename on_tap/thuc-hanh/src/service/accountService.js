import axios from "axios"

const checkLogin = async (accountInfo) => {
    try {
        const resp = await axios.get("http://localhost:3001/accounts");
        let account = resp.data.find(acc => 
            acc.username === accountInfo.username &&
            acc.password === accountInfo.password
        );

        console.log(account);
        
        return account || null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { checkLogin };