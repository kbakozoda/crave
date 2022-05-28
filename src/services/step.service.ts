import ErrorCodes from "../constants/errorCodes";
import stepRepository from "../data/stepRepository";
import { Step } from "../schemas/step.schema";

class StepService {
    async getOne(id: String): Promise<Step> {
        try {
            return await stepRepository.getById(id);
        } catch (error) {
            throw new Error(`Error: ${ErrorCodes.NOT_FOUND} ${error}`);
        }
    }

    async completeStep(id: String): Promise<Step> {
        try {
            return await stepRepository.completeStep(id);
        } catch(error) {
            throw new Error(`Error ${ErrorCodes.NOT_ALLOWED} ${error}`);
        }
    }
}

const stepService = new StepService();

export default stepService;