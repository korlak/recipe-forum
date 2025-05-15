import { Table, Model, Column, DataType, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface RecipeCreationAttrs {
    title: string;
    recipe_text: string;
    userId: number;
}

@Table({ tableName: 'recipe' })
export class Recipe extends Model<Recipe, RecipeCreationAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    declare title: string;

    @Column({ type: DataType.STRING })
    declare recipe_text: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    author: User

    // @HasMany(() => Post)
    // posts: Post[];

}