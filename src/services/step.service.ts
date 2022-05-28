import { Step } from "../schemas/step.schema";
import stageService from "./stage.service";

class StepService {
    async getOne(id: String): Promise<Step> {
        const stages = await stageService.getStages();

        stages.forEach((stage) => {
            const foundStep = stage.steps.find((step) => step.id === id);
            if (foundStep) {
                return foundStep;
            }
        })

        throw new Error(`Step with id ${id} does not exist`);
    }
}

const stepService = new StepService();

export default stepService;