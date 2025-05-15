import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Roles("USER")
  @UseGuards(RolesGuard)
  @Post()
  createPost(@Body() dto: CreateRecipeDto){
    return this.recipeService.create(dto)
  }
}
