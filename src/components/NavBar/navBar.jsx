const NavBar = () => {
    return(
        <>
            <nav>
                <img src="#" alt="logo_tu_camino_a_casa" />
                <select name="project" id="project-user">
                    <option value="project1">Proyecto 1</option>
                    <option value="project2">Proyecto 2</option>
                    <option value="project3">Proyecto 3</option>
                </select>
                <ul>
                    <li><img src="#" alt="icono_dashboard"/>Resumen</li>
                    <li><img src="#" alt="icono_mi_proyecto"/>Mi Proyecto</li>
                    <li><img src="#" alt="icono_en_que_voy"/>¿En que voy?</li>
                    <li><img src="#" alt="icono_documentos"/>Documentos</li>
                    <li><img src="#" alt="icono_estado_de_cuenta"/>Estado de cuenta</li>
                    <li><img src="#" alt="icono_aprende"/>Aprende</li>
                </ul>
            </nav>
        </>
    )
};

export default NavBar;