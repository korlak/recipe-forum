import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    getAll(){
        return this.usersService.getAllUsers()
    }
    
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/add-role')
    addRole(@Body() dto: AddRoleDto){
        return this.usersService.addRole(dto)
    }

}

