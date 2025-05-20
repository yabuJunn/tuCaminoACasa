import './dashboardPage.css'

import { GlobalNavBar } from '../../components/globalNavBar/globalNavBar'
import { UpperNavButtons } from '../../components/upperNavButtons/upperNavButtons'
import { PropertySummmary } from '../../components/propertySummary/propertySummary'
import { PropertyProjectDetails } from '../../components/propertyProjectDetails/propertyProjectDetails'
import { GeneralPropertyTimeline } from '../../components/generalPropertyTimeline/generalPropertyTimeline'
import { ConstructionProgress } from '../../components/constructionProgress/constructionProgress'
import { DocumentsState } from '../../components/documentsState/documentsState'
import { AccruedPayment } from '../../components/accruedPayment/accruedPayment'
import { NextInstalment } from '../../components/nextInstalment/nextInstalment'

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