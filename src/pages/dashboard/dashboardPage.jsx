import './dashboardPage.css'

import { GlobalNavBar } from '../../components/globalNavBar/globalNavBar'
import { UpperNavButtons } from '../../components/upperNavButtons/upperNavButtons'

const mockUserName = "Carolina"

export const DashboardPage = () => {
	return <>
		<main className='page' id='dashboardPage'>
			<GlobalNavBar></GlobalNavBar>
			{/* <UpperNavButtons></UpperNavButtons> */}

			<div id='dashboardPagePresentation'>
				<h1>¡Hola, {mockUserName}!</h1>
				<p>Bienvenida a tu proyecto <strong>Violet</strong>. !Ve, qué alegría tenerte por acá!</p>
			</div>

			<div id="dashboardPageCards">

			</div>
		</main>
	</>
}