import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Step {
    @Field(() => String)
    id: String;

    @Field(() => String)
    title: String;

    @Field(() => Boolean)
    isCompleted: Boolean;

    @Field({nullable: true})
    completedAt: Date;
}