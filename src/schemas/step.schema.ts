import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Step {
    @Field((type) => ID)
    id: String;

    @Field()
    title: String;

    @Field()
    stageId: String;

    @Field()
    isCompleted: Boolean;

    @Field({nullable: true})
    completedAt: Date;
}

@InputType()
export class CompleteStepInput {
    @Field(type => ID)
    id: String;
}

@InputType()
export class GetStepInput {
    @Field(type => ID)
    id: String;
}
