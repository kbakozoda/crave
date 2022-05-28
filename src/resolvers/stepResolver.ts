import { GetStepInput, Step } from "../schemas/step.schema";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class StepResolver {
    @Query(() => Step)
    async getOne(@Arg("input") input: GetStepInput) {

    }
}