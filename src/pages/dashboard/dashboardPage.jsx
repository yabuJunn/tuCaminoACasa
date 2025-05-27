import './dashboardPage.css'

import { GlobalNavBar } from '../../components/navigation/globalNavBar/globalNavBar'
//import { UpperNavButtons } from '../../components/upperNavButtons/upperNavButtons'
import { PropertySummmary } from '../../components/dashboardScreen/propertySummary/propertySummary'
import { PropertyProjectDetails } from '../../components/dashboardScreen/propertyProjectDetails/propertyProjectDetails'
import { GeneralPropertyTimeline } from '../../components/dashboardScreen/generalPropertyTimeline/generalPropertyTimeline'
import { ConstructionProgress } from '../../components/dashboardScreen/constructionProgress/constructionProgress'
import { DocumentsState } from '../../components/dashboardScreen/documentsState/documentsState'
import { AccruedPayment } from '../../components/dashboardScreen/accruedPayment/accruedPayment'
import { NextInstalment } from '../../components/dashboardScreen/nextInstalment/nextInstalment'

const mockUserName = "Carolina"

export const DashboardPage = () => {
	return <>
		<main className='page' id='dashboardPage'>
			<GlobalNavBar></GlobalNavBar>
			{/* <UpperNavButtons></UpperNavButtons> */}

			<div id='dashboardPageContent'>
				<div id='dashboardPagePresentation'>
					<h1>¡Hola, {mockUserName}!</h1>
					<p>Bienvenida a tu proyecto <strong>Violet</strong>. ¡Ve, qué alegría tenerte por acá!</p>
				</div>

				<div id="dashboardPageCards" className='dashboardCard'>
					<div id='dashboardContentColumn1'>
						<PropertySummmary></PropertySummmary>
						<PropertyProjectDetails></PropertyProjectDetails>
					</div>

					<div id='dashboardContentColumn2'>
						<GeneralPropertyTimeline></GeneralPropertyTimeline>

						<div id="dashboardCardsGrid">
							<ConstructionProgress />
							<AccruedPayment />
							<DocumentsState />
							<NextInstalment />
						</div>

					</div>
				</div>
			</div>

		</main>
	</>
}