import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AppProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        let userLocal = localStorage.getItem('user');
        if (userLocal) {
            setUserData(JSON.parse(userLocal));
        }
    }, []);

    const updateUserData = (data) => {
        if (data) {
            const updateLinkAvatar = (link) => {
                let domainLv = process.env.NEXT_PUBLIC_BASE_DOMAIN_LV_IMAGE;
                if (link && link.search('http') === -1 && link.search('cdn.lichviet.org') === -1) {
                    return domainLv + link;
                }else if (link){
                    return link;
                }
                const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE
                return BASE_URL_IMAGE + "/images/icon/default-profile.png";
            }
            let dataLocal = data;
            if (typeof data !== 'string') {
                data.avatar = updateLinkAvatar(data.avatar);
                dataLocal = JSON.stringify(data);
            }
            localStorage.setItem('user', dataLocal);
            setUserData(data);
        }
        return true;
    }
    const userLogout = ({redireact = ''}) => {
        let userLocal = localStorage.getItem('user');
        if (userLocal) {
            localStorage.removeItem('user');
            //call api logout
        }
        setUserData(null);
        if (redireact === 'login') {
            window.location.href = '/login';
        }
    }
    return (
        <AuthContext.Provider value={{userData, updateUserData, userLogout}}>
            {children}
        </AuthContext.Provider>
    )
}