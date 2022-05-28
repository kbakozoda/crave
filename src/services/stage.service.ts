import ErrorCodes from "../constants/errorCodes";
import stageRepository from "../data/stageRepository";
import { Stage } from "../schemas/stage.schema";

class StageService {
    async getStages(): Promise<Stage[]> {
        return await stageRepository.getStages();
    }

    async getFirstStage(): Promise<Stage> {
        const stages = await stageRepository.getStages();
        return stages[0];
    }

    async getOneStage(id: String): Promise<Stage> {
        try {
            return stageRepository.getById(id);
        } catch(error) {
            throw new Error(`Error: ${ErrorCodes.NOT_FOUND} ${error}`);
        }
    }
}

const stageService = new StageService();

export default stageService;