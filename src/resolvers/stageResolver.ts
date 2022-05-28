import { GetStageInput, Stage } from "../schemas/stage.schema";
import { Arg, Query, Resolver } from "type-graphql";
import stageService from "../services/stage.service";

@Resolver()
export class StageResolver {
    @Query(() => String)
    hello(): string {
        return "hello world";
    }

    @Query(() => Stage)
    async getOne(@Arg("input") input: GetStageInput): Promise<Stage> {
        return stageService.getOneStage(input.id);
    }

    @Query(() => [Stage])
    async getStages(): Promise<Stage[]> {
        return stageService.getStages();
    }
}