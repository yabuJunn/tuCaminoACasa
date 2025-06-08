import "./generalPropertyTimeline.css"

import checkIcon from "../../../assets/svg/dashboardScreen/checkIcon.svg"

const projectStateMock = [
    {
        id: 0,
        title: "Selección",
        completed: true
    },
    {
        id: 1,
        title: "Separación",
        completed: true
    },
    {
        id: 2,
        title: "Documentación",
        completed: false
    },
    {
        id: 3,
        title: "Construcción",
        completed: false
    },
    {
        id: 4,
        title: "Entrega",
        completed: false
    },
]

export const GeneralPropertyTimeline = () => {
    const firstNotCompletedIndex = projectStateMock.find(stage => stage.completed === false)?.id;

    return <>
        <div id="generalPropertyTimelineContainer">
            <h2>{"Progreso del proyecto >"}</h2>

            <div id="generalPropertyTimelineContent">
                {projectStateMock.map((stage) => {
                    const isFirstIncomplete = firstNotCompletedIndex === stage.id;

                    if (stage.completed) {
                        return (
                            <div className="generalPropertyTimeLineStage completed" key={stage.id}>
                                <div className="generalPropertyTimeLineStageCircle">
                                    <img src={checkIcon} alt="checkIcon" />
                                </div>
                                <p>{stage.title}</p>
                            </div>
                        );
                    }

                    if (!stage.completed && isFirstIncomplete) {
                        return (
                            <div className="generalPropertyTimeLineStage firstNotCompleted" key={stage.id}>
                                <div className="generalPropertyTimeLineStageCircle">
                                    <p>{stage.id + 1}</p>
                                </div>
                                <p>{stage.title}</p>
                            </div>
                        );
                    }

                    return (
                        <div className="generalPropertyTimeLineStage notCompleted" key={stage.id}>
                            <div className="generalPropertyTimeLineStageCircle">
                                <p>{stage.id + 1}</p>
                            </div>
                            <p>{stage.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
}