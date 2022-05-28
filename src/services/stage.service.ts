import stageRepository from "../data/stageRepository";
import { Stage } from "../entities/stage";

class StageService {
    async getStages(): Promise<Stage[]> {
        return await stageRepository.getStages();
    }

    async getFirstStage(): Promise<Stage> {
        const stages = await stageRepository.getStages();
        return stages[0];
    }
}

const stageService = new StageService();

export default stageService;