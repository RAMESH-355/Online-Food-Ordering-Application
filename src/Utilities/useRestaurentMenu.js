import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_API_LAST } from "./constant";

const useRestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams(); 

    useEffect(() => {
        fetchedMenu();
    },[]);

    const fetchedMenu = async () => {

        const data = await fetch (MENU_API + resId + MENU_API_LAST);

        const json = await data.json();

        setResInfo(json.data);
    };
    return resInfo;
}

export default useRestaurentMenu;

