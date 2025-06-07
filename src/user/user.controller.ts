import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
   async getUsers() {
    const users = await this.userService.findAll();
    if(users.length){
        return users;
    } else{
        return 'No user exists';
    }
  }

  @Post('new')
  create(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto)
  }
}
