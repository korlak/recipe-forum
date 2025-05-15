import { forwardRef, Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Recipe } from './recipe.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService],
  imports: [
    SequelizeModule.forFeature([User, Recipe]),
    forwardRef(() => AuthModule)
  ]
})
export class RecipeModule {}
