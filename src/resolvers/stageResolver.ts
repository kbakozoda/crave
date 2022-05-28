import { Stage } from "../entities/stage";
import { Query, Resolver } from "type-graphql";
import stageService from "../services/stage.service";

@Resolver()
export class StageResolver {
    @Query(() => String)
    hello(): string {
        return "hello world";
    }

    @Query(() => Stage)
    async getOne(): Promise<Stage> {
        return stageService.getFirstStage();
    }

    @Query(() => [Stage])
    async getStage(): Promise<Stage[]> {
        return stageService.getStages();
    }
}