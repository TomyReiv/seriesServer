import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Auth {
    @Prop({ required: true, unique: true })
    id_saved:string;
    @Prop({ required: true })
    name:string;
    @Prop({ required: true })
    title:string;
    @Prop({ required: true })
    image:string;
    @Prop({ default: false })
    complete:boolean;
}


export const AuthSchema = SchemaFactory.createForClass(Auth);