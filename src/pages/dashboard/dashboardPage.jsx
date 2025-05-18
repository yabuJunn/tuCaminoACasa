import './dashboardPage.css'

import { GlobalNavBar } from '../../components/globalNavBar/globalNavBar'
import { UpperNavButtons } from '../../components/upperNavButtons/upperNavButtons'

export const DashboardPage = () => {
	return <>
		<main className='page' id='dashboardPage'>
			<GlobalNavBar></GlobalNavBar>
			<UpperNavButtons></UpperNavButtons>
		</main>
	</>
}