import './dashboardPage.css'

import { useCheckAuth } from '../../hooks/useCheckAuth.js';
import { useSelector } from "react-redux";
import { useUserFullData } from '../../hooks/getRestInfoDataHook.js'

import { GlobalNavBar } from '../../components/navigation/globalNavBar/globalNavBar'
import { UpperNavButtons } from '../../components/navigation/upperNavButtons/upperNavButtons'
import { PropertySummary } from '../../components/dashboardScreen/propertySummary/propertySummary'
import { PropertyProjectDetails } from '../../components/dashboardScreen/propertyProjectDetails/propertyProjectDetails'
import { GeneralPropertyTimeline } from '../../components/dashboardScreen/generalPropertyTimeline/generalPropertyTimeline'
import { ConstructionProgress } from '../../components/dashboardScreen/constructionProgress/constructionProgress'
import { DocumentsState } from '../../components/dashboardScreen/documentsState/documentsState'
import { AccruedPayment } from '../../components/dashboardScreen/accruedPayment/accruedPayment'
import { NextInstalment } from '../../components/dashboardScreen/nextInstalment/nextInstalment'
import { fallbackProject } from '../../utils/fallbakcProject.js';
import { BotComponente } from '../../components/botonesChatScreen/botComponente/botComponente.jsx';

export const DashboardPage = () => {
	useCheckAuth();

	useUserFullData();

	const userStore = useSelector((state) => state.main.user);
	// const mainStore = useSelector((state) => state.main);
	// console.log(mainStore);

	const selectedProjectId = useSelector((state) => state.main.projectSelected);
	const allProjects = useSelector((state) => state.main.projects || []);

	const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

	// Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
	const project = selectedProject || fallbackProject;


	return <>
		<main className='page' id='dashboardPage'>
			<GlobalNavBar></GlobalNavBar>
			<UpperNavButtons></UpperNavButtons>

			<div id='dashboardPageContent'>
				<div id='dashboardPagePresentation'>
					<h1>¡Que mas vé, {userStore.name}!</h1>
					<p>Bienvenida a tu proyecto <strong>{project.name}</strong>. ¡Qué alegría tenerte por acá!</p>
				</div>

				<div id="dashboardPageCards" className='dashboardCard'>
					<div id='dashboardContentColumn1'>
						<PropertySummary></PropertySummary>
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
			<BotComponente/>
		</main>
	</>
}