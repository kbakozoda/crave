import { Field, ID, ObjectType } from "type-graphql";
import { Step } from "./step";

@ObjectType()
export class Stage {
    @Field(type => ID)
    id: String;

    @Field()
    title: String;

    @Field()
    isCompleted: Boolean;

    @Field(type => [Step])
    steps: Step[];

    @Field()
    completedAt: Date;
}
