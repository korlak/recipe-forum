import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { RecipeModule } from './recipe/recipe.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { Recipe } from './recipe/recipe.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: "localhost",
      port: 5000,
      username: "postgres",
      password: "64hv8FV9034",
      database: "recipe-forum",
      models: [User, Role, UserRoles, Recipe],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    RecipeModule,
    AuthModule
  ]
})
export class AppModule { }
