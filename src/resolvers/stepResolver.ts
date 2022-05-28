import { CompleteStepInput, GetStepInput, Step } from "../schemas/step.schema";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import stepService from "../services/step.service";

@Resolver()
export class StepResolver {
    @Query(() => Step)
    async getOneStep(@Arg("input") input: GetStepInput): Promise<Step> {
        return stepService.getOne(input.id);
    }

    @Mutation(() => Step)
    async completeStep(@Arg("input") input: CompleteStepInput): Promise<Step> {
        return stepService.completeStep(input.id);
    }
}
