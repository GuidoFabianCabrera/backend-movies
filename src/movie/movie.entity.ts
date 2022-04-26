import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true, })
  title: string;

  @Prop({ required: true, })
  duration: string;

  @Prop({ required: true, })
  stars: string;

  @Prop({ required: true, })
  reviewsCount: string;

  @Prop({ type: Array, required: true })
  genre: any;

  @Prop({ required: true, })
  age: string;

  @Prop({})
  imageUrl: string;

  @Prop({})
  videoUrl: string;

  @Prop({ required: true, })
  description: string;

  @Prop({ type: Array, required: true })
  casts: any;


}

export const MovieSchema = SchemaFactory.createForClass(Movie);
