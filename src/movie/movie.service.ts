import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Movie } from './movie.entity';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private MovieModel: Model<Movie>,
  ) { }

  findAll() {
    return this.MovieModel.find().exec();
  }

  async findOne(id: string) {
    return this.MovieModel.findById(id);
  }

  create(data: CreateMovieDto) {
    const newModel = new this.MovieModel({ ...data, created: new Date().toJSON() });
    return newModel.save();
  }

  update(id: string, changes: UpdateMovieDto) {
    return this.MovieModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.MovieModel.findByIdAndDelete(id);
  }
}
