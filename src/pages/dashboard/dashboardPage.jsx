import './dashboardPage.css'

import { GlobalNavBar } from '../../components/globalNavBar/globalNavBar'
import { UpperNavButtons } from '../../components/upperNavButtons/upperNavButtons'
import { PropertySummmary } from '../../components/propertySummary/propertySummary'
import { PropertyProjectDetails } from '../../components/propertyProjectDetails/propertyProjectDetails'

const mockUserName = "Carolina"

export const DashboardPage = () => {
	return <>
		<main className='page' id='dashboardPage'>
			<GlobalNavBar></GlobalNavBar>
			{/* <UpperNavButtons></UpperNavButtons> */}

			<div id='dashbboardPageContent'>
				<div id='dashboardPagePresentation'>
					<h1>¡Hola, {mockUserName}!</h1>
					<p>Bienvenida a tu proyecto <strong>Violet</strong>. !Ve, qué alegría tenerte por acá!</p>
				</div>

				<div id="dashboardPageCards">
					<div id='dashboardContentColumn1'>
						<PropertySummmary></PropertySummmary>
						<PropertyProjectDetails></PropertyProjectDetails>
					</div>

					<div id='dashboardContentColumn2'>
						{/* Linea de tiempo */}
						<div id='dashboardContentColumn3'>

						</div>

						<div id='dashboardContentColumn4'>

						</div>
					</div>
				</div>
			</div>

		</main>
	</>
}