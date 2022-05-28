import ErrorCodes from "../constants/errorCodes";
import stepRepository from "../data/stepRepository";
import { Step } from "../schemas/step.schema";
import stageService from "./stage.service";

class StepService {
    async getOne(id: String): Promise<Step> {
        try {
            return await stepRepository.getById(id);
        } catch (error) {
            throw new Error(`Error: ${ErrorCodes.NOT_FOUND} ${error}`);
        }
    }

    async completeStep(id: String): Promise<Step> {
        const step = await this.getOne(id);
        const isStageUnlocked = await stageService.isStageUnlocked(step.stageId);

        if (!isStageUnlocked)
            throw new Error("Action not allowed, please complete previous stages first.");

        if (step.isCompleted) {
            throw new Error("Step is already completed.");
        }

        try {
            const updatedStep = await stepRepository.completeStep(id);
            await stageService.handleStepUpdate(step);
            
            return updatedStep;
        } catch(error) {
            throw new Error(`Error ${ErrorCodes.NOT_ALLOWED} ${error}`);
        }
    }
}

const stepService = new StepService();

export default stepService;