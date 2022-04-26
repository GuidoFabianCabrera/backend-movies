import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Actor extends Document {
  @Prop({ required: true, })
  name: string;

  @Prop({})
  bannerUrl: string;

  @Prop({})
  photoUrl: string;

  @Prop({ required: true })
  birthday: string;

  @Prop({ type: Array, required: true })
  genre: any;

  @Prop({ required: true, })
  country: string;

  @Prop({ type: Array, required: true })
  movies: any;

  @Prop({ required: true, })
  biography: string;
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
