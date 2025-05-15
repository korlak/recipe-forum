import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Recipe } from './recipe.model';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipeService {
    constructor(@InjectModel(Recipe) private recipyRepository: typeof Recipe) { }

    async create(dto: CreateRecipeDto) {
        const recipe = await this.recipyRepository.create(dto)
        return recipe
    }
}
