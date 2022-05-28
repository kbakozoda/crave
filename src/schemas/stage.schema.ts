import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Step } from "./step.schema";

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

    @Field({ nullable: true })
    completedAt: Date;
}

@InputType()
export class GetStageInput {
    @Field(type => ID)
    id: String;
}