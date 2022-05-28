import { Stage } from "../schemas/stage.schema";

// methods are made this async intentionally
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
}

const stageRepository = new StageRepository();

export default stageRepository;
