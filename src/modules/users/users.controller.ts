import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { STATUS_CODES } from 'http';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Action } from '../casl/actions';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    const ability = this.caslAbilityFactory.createForUser(req.user);
    console.log(req.user);
    console.log(ability.can(Action.Manage, 'all'));
    return ability.can(Action.Manage, 'all')
      ? this.usersService.update(+id, updateUserDto)
      : {
          statusCode: STATUS_CODES.UNAUTHORIZED,
          message: 'You are not authorized to perform this action',
        };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
