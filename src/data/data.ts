import { Stage } from "../schemas/stage.schema";

// I assume that stages are inserted into db 
// by the required order of completion
const stagesData: Array<Stage> = [
    {
        title: "Stage 1",
        id: "stg1",
        isCompleted: false,
        steps: [
            {
                title: "step 1.1",
                id: "stp11",
                isCompleted: true,
                completedAt: new Date(),
                stageId: "stg1"
            },
            {
                title: "step 1.2",
                id: "stp12",
                isCompleted: false,
                completedAt: null,
                stageId: "stg1"
            }
        ],
        completedAt: null
    },
    {
        title: "Stage 2",
        id: "stg2",
        isCompleted: false,
        steps: [
            {
                title: "step 2.1",
                id: "stp21",
                isCompleted: false,
                completedAt: null,
                stageId: "stg2"
            },
            {
                title: "step 2.2",
                id: "stp22",
                isCompleted: false,
                completedAt: null,
                stageId: "stg2"
            }
        ],
        completedAt: null
    },
    {
        title: "Stage 3",
        id: "stg3",
        isCompleted: false,
        steps: [
            {
                title: "step 3.1",
                id: "stp31",
                isCompleted: false,
                completedAt: null,
                stageId: "stg3"
            }
        ],
        completedAt: null
    }
];

export default stagesData;
