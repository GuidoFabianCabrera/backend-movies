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

import { ActorService } from './actor.service';
import { CreateActorDto, UpdateActorDto } from './actor.dto';

import { ApiKeyGuard } from '../auth/guards/api-key.guard'
import { Public } from '../auth/decorators/public.decorator'
import { Roles } from '../auth/decorators/roles.decorator'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Role } from '../auth/models/roles.model'

// @UseGuards(JwtAuthGuard)
@ApiTags('actors')
@Controller('actors')
export class ActorController {
  constructor(private ActorService: ActorService) { }

  // @Public()
  @Get()
  @ApiOperation({
    summary: 'List of actors',
  })
  findAll() {
    return this.ActorService.findAll();
  }

  // @Public()
  @Get(':id')
  get(@Param('id') id: string) {
    return this.ActorService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateActorDto) {
    return this.ActorService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateActorDto) {
    return this.ActorService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ActorService.remove(id);
  }
}
