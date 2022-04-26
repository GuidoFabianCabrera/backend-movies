import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Actor } from './actor.entity';
import { CreateActorDto, UpdateActorDto } from './actor.dto';

@Injectable()
export class ActorService {
  constructor(
    @InjectModel(Actor.name) private ActorModel: Model<Actor>,
  ) { }

  findAll() {
    return this.ActorModel.find().exec();
  }

  async findOne(id: string) {
    return this.ActorModel.findById(id);
  }

  create(data: CreateActorDto) {
    const newModel = new this.ActorModel({ ...data, created: new Date().toJSON() });
    return newModel.save();
  }

  update(id: string, changes: UpdateActorDto) {
    return this.ActorModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.ActorModel.findByIdAndDelete(id);
  }
}
