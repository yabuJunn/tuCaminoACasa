import './dashboardPage.css'

import { useEffect } from 'react'
import { isUserLoggedIn } from '../../services/supabase/login'
import { NavigationHook } from '../../hooks/navigationHook'
import { useGetUserData } from '../../hooks/getUserDataHook.js'
import { useSelector } from "react-redux";

import { GlobalNavBar } from '../../components/navigation/globalNavBar/globalNavBar'
import { UpperNavButtons } from '../../components/navigation/upperNavButtons/upperNavButtons'
import { PropertySummmary } from '../../components/dashboardScreen/propertySummary/propertySummary'
import { PropertyProjectDetails } from '../../components/dashboardScreen/propertyProjectDetails/propertyProjectDetails'
import { GeneralPropertyTimeline } from '../../components/dashboardScreen/generalPropertyTimeline/generalPropertyTimeline'
import { ConstructionProgress } from '../../components/dashboardScreen/constructionProgress/constructionProgress'
import { DocumentsState } from '../../components/dashboardScreen/documentsState/documentsState'
import { AccruedPayment } from '../../components/dashboardScreen/accruedPayment/accruedPayment'
import { NextInstalment } from '../../components/dashboardScreen/nextInstalment/nextInstalment'

export const DashboardPage = () => {
	const { handleNavigation } = NavigationHook();
	const userStore = useSelector((state) => state.main.user);

	useEffect(() => {
		async function checkAuth() {
			const isLoggedIn = await isUserLoggedIn();
			if (!isLoggedIn) {
				handleNavigation.navigateToLogin()
			}
		}

		checkAuth();
	}, []);

	useGetUserData();

	return <>
		<main className='page' id='dashboardPage'>
			<GlobalNavBar></GlobalNavBar>
			<UpperNavButtons></UpperNavButtons>

			<div id='dashboardPageContent'>
				<div id='dashboardPagePresentation'>
					<h1>¡Que mas vé, {userStore.name}!</h1>
					<p>Bienvenida a tu proyecto <strong>Violet</strong>. ¡Qué alegría tenerte por acá!</p>
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