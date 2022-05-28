import { Stage } from "../schemas/stage.schema";
import stagesData from "./data";

// methods are made this async intentionally
// just to make it closer to real db
class StageRepository {
    async getStages(): Promise<Stage[]> {
        return stagesData;
    }

    async getById(id: String): Promise<Stage> {
        const foundStage = stagesData.find((stage) => stage.id === id);
        if (foundStage)
            return foundStage;

        throw new Error(`Stage with id ${id} not found`);
    }

    async completeStage(id: String): Promise<Stage> {
        const foundStage = await this.getById(id);
        foundStage.isCompleted = true;
        foundStage.completedAt = new Date();

        return foundStage;
    }
}

const stageRepository = new StageRepository();

export default stageRepository;
