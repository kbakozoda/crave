import { Query, Resolver } from "type-graphql";

@Resolver()
export class StageResolver {
    @Query(() => String)
    hello(): string {
        return "hello world";
    }
}