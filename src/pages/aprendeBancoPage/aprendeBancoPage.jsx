import { AprendeBancoBanner } from "../../components/aprendeBancoBanner/aprendeBancoBanner"
import { GlobalNavBar } from "../../components/GlobalNavBar/GlobalNavBar"


export const AprendeBancoPage = () => {
    return<>

    <section className="aprendeBancoPage">
        <div className="bannerAprendeBanco">
            <GlobalNavBar></GlobalNavBar>
            <GlobalNavBar></GlobalNavBar>


            <AprendeBancoBanner></AprendeBancoBanner>
        </div>

    </section>
    </>
}