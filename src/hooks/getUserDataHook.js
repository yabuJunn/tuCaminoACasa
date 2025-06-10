import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../services/supabase/login";
import { setUser, setError } from "../store/index";

export const useGetUserData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserData();
                if (userData) {
                    dispatch(setUser({
                        user: {
                            id: userData.id,
                            name: userData.name,
                            email: userData.email,
                            cedula: userData.cedula,
                            cellphone: userData.cellphone,
                            created_at: userData.created_at
                        }
                    }));
                } else {
                    dispatch(setError("No se encontró usuario."));
                }
            } catch (error) {
                dispatch(setError(error.message));
            }
        };

        fetchUser();
    }, [dispatch]);
};
