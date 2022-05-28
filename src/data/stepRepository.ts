import { Step } from "../schemas/step.schema";
import stagesData from "./data";

class StepRepository {
    async getById(id: String): Promise<Step> {
        let foundStep;

        stagesData.forEach((stage) => {
            if (!foundStep)
                foundStep = stage.steps.find((step) => step.id === id);
        });

        if (!foundStep) {
            throw new Error(`Step with id ${id} does not exist`);
        }

        return foundStep;        
    }

    async completeStep(id: String): Promise<Step> {
        const foundStep = await this.getById(id);
        foundStep.isCompleted = true;
        foundStep.completedAt = new Date();

        return foundStep;
    }
}

const stepRepository = new StepRepository();

export default stepRepository;