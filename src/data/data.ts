import { Stage } from "../schemas/stage.schema";

const stagesData: Array<Stage> = [
    {
        title: "Stage 1",
        id: "stg1",
        isCompleted: true,
        steps: [
            {
                title: "step 1.1",
                id: "stp11",
                isCompleted: true,
                completedAt: new Date()
            },
            {
                title: "step 1.2",
                id: "stp12",
                isCompleted: false,
                completedAt: new Date()
            }
        ],
        completedAt: new Date()
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
                completedAt: new Date()
            },
            {
                title: "step 2.2",
                id: "stp22",
                isCompleted: false,
                completedAt: new Date()
            }
        ],
        completedAt: new Date()
    }
];

export default stagesData;
