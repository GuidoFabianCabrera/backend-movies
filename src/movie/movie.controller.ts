import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  SetMetadata
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { MovieService } from './movie.service';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';

import { ApiKeyGuard } from '../auth/guards/api-key.guard'
import { Public } from '../auth/decorators/public.decorator'
import { Roles } from '../auth/decorators/roles.decorator'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Role } from '../auth/models/roles.model'

// @UseGuards(JwtAuthGuard)
@ApiTags('movie')
@Controller('movie')
export class MovieController {
  constructor(private MovieService: MovieService) { }

  // @Public()
  @Get()
  @ApiOperation({
    summary: 'List of movies',
  })
  findAll() {
    return this.MovieService.findAll();
  }

  // @Public()
  @Get(':id')
  get(@Param('id') id: string) {
    return this.MovieService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateMovieDto) {
    return this.MovieService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateMovieDto) {
    return this.MovieService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MovieService.remove(id);
  }
}
