import { Step } from "../schemas/step.schema";
import stageRepository from "../data/stageRepository";
import { Stage } from "../schemas/stage.schema";
import { NotFoundError } from "../errors/notFound.error";
import { InternalError } from "../errors/internal.error";

class StageService {
    async getStages(): Promise<Stage[]> {
        try {
            return await stageRepository.getStages();
        } catch(error) {
            throw new InternalError(error.message);
        }
    }

    async getOneStage(id: String): Promise<Stage> {
        try {
            return await stageRepository.getById(id);
        } catch(error) {
            throw new NotFoundError(error.message);
        }
    }

    async isStageUnlocked(id: String): Promise<Boolean> {
        const stages = await stageRepository.getStages();
        let stageIndex = stages.findIndex((stage) => stage.id === id);

        if (stageIndex === -1) {
            // Internal Error - because this method is supposed to be called only when
            // looking for a stage that the step belongs to. It means the db has given id saved
            // as stageId for given step, which means the data in db in wrong.
            // Ideally need to alert through rollbar or something else in this case
            throw new InternalError(`Stage with id ${id} does not exist`);
        }

        for (let i = 0; i < stageIndex; i++) {
            if(stages[i].isCompleted === false) {
                return false;
            }
            // not iterating over each step in the stage 
            // because i assume that the data in db 
            // will not be updated manually, so isCompleted
            // property of the stage will be true ONLY if all
            // the steps are completed as well
            // if it's possilbe that data in DB is updated manually
            // then it would be a good idea to check each step as well 
            // and alert if any there's a case when a stage is marked as completed,
            // but has some incmplete step(s)
        }

        return true;
    }

    async handleStepUpdate(updatedStep: Step): Promise<void> {
        const stage = await this.getOneStage(updatedStep.stageId);

        const hasIncompleteSteps = stage.steps.find((step) => !step.isCompleted);

        if (!hasIncompleteSteps) {
            await stageRepository.completeStage(stage.id);
        }
    }
}

const stageService = new StageService();

export default stageService;