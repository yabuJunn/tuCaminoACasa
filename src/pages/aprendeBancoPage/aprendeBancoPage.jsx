import { AprendeBancoBanner } from "../../components/aprendeBancoBanner/aprendeBancoBanner"
import { GlobalNavBar } from "../../components/GlobalNavBar/GlobalNavBar"
import { UpperNavButtons } from "../../components/UpperNavButtons/UpperNavButtons"



export const AprendeBancoPage = () => {
    return<>

    <section className="aprendeBancoPage">
        <div className="bannerAprendeBanco">
            <GlobalNavBar></GlobalNavBar>
            <UpperNavButtons></UpperNavButtons>


            <AprendeBancoBanner></AprendeBancoBanner>
        </div>

    </section>
    </>
}