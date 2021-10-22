import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => () => {
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setIsAuth(Boolean(localStorage.getItem("user")));
    }, []);

    const handleLogin = () => {
        localStorage.setItem("user", JSON.stringify(true));
        setIsAuth(true);
    };
    const handleLogOut = () => {
        localStorage.setItem("user", JSON.stringify(false));
        setIsAuth(false);
    };
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withAuth;
