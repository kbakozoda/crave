import { GetStepInput, Step } from "../schemas/step.schema";
import { Arg, Query, Resolver } from "type-graphql";
import stepService from "../services/step.service";

@Resolver()
export class StepResolver {
    @Query(() => Step)
    async getOneStep(@Arg("input") input: GetStepInput): Promise<Step> {
        return stepService.getOne(input.id);
    }
}
