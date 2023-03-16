import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem("user", "");
        navigate("/signIn")
    }, [navigate])

    return (
        null
    );
}

export default Logout;