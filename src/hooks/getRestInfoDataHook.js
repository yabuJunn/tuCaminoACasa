import { useDispatch } from "react-redux";

import { setUser, setUserDocuments, setUserPayments, setUserProjects } from "../store";
import { getUserData } from "../services/supabase/login";

import { supabase } from "../services/supabase/supabaseKeys";
import { useEffect } from "react";

export const useUserFullData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllData = async () => {

            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData?.session?.user?.id;
            if (!userId) {
                dispatch(setUserDataError("No session found."));
                return;
            }

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

            // 2. Obtener los proyectos con base en user.projects (jsonb: {projectId1: 1, projectId2: 2})
            const projectIds = Object.values(userData.projects || {});

            const { data: projects, error: projectsErr } = await supabase
                .from("projects")
                .select("*")
                .in("id", projectIds);

            if (projectsErr) {
                dispatch(setUserDataError(projectsErr.message));
            } else {
                dispatch(setUserProjects(projects));
            }

            // 3. Obtener documentos del usuario
            const { data: documents, error: docsErr } = await supabase
                .from("documents")
                .select("*")
                .eq("userId", userId);

            if (docsErr) {
                dispatch(setUserDataError(docsErr.message));
            } else {
                dispatch(setUserDocuments(documents));
            }

            // 4. Obtener pagos del usuario
            const { data: payments, error: paymentsErr } = await supabase
                .from("payments")
                .select("*")
                .eq("userId", userId);

            if (paymentsErr) {
                dispatch(setUserDataError(paymentsErr.message));
            } else {
                dispatch(setUserPayments(payments));
            }
        };

        fetchAllData();
    }, [dispatch]);
};
