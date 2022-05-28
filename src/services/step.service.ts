import stepRepository from "../data/stepRepository";
import { Step } from "../schemas/step.schema";
import stageService from "./stage.service";
import { NotAllowedError } from "src/errors/notAllowed.error";
import { NotFoundError } from "src/errors/notFound.error";

class StepService {
    async getOne(id: String): Promise<Step> {
        try {
            return await stepRepository.getById(id);
        } catch (error) {
            throw new NotFoundError(error.message);
        }
    }

    async completeStep(id: String): Promise<Step> {
        const step = await this.getOne(id);
        const isStageUnlocked = await stageService.isStageUnlocked(step.stageId);

        if (!isStageUnlocked)
            throw new NotAllowedError("Action not allowed, please complete previous stages first.");

        if (step.isCompleted) {
            throw new NotAllowedError("Step is already completed.");
        }

        try {
            const updatedStep = await stepRepository.completeStep(id);
            await stageService.handleStepUpdate(step);

            return updatedStep;
        } catch(error) {
            throw new NotAllowedError(error.message);
        }
    }
}

const stepService = new StepService();

export default stepService;