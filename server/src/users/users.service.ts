import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleRepository: RolesService
    ) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const role_name = "USER"
        const role = await this.roleRepository.getRoleByValue(role_name)
        if(!role) 
            throw new Error(`Role ${role_name} not found`)
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true }
        })
        return user;
    }
    async getAllUsers() {
        const users = this.userRepository.findAll({ include: { all: true } });
        return users
    }
    async addRole(dto: AddRoleDto) { 
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleRepository.getRoleByValue(dto.value)

        if(role && user) {
            await user.$add('role', role.id)
            return dto
        }
        throw new HttpException('Користувач або роль не знайдені', HttpStatus.NOT_FOUND)
    }

}
