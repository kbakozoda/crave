import { Step } from "../schemas/step.schema";
import stagesData from "./data";

class StepRepository {
    async getById(id: String): Promise<Step> {
        stagesData.forEach((stage) => {
            const foundStep = stage.steps.find((step) => step.id === id);
            if (foundStep) {
                return foundStep;
            }
        })

        throw new Error(`Step with id ${id} does not exist`);
    }
}

const stepRepository = new StepRepository();

export default stepRepository;