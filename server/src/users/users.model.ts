import { Table, Model, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { Recipe } from "src/recipe/recipe.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
    name: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    declare email: string;

    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    declare name: string;

    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    declare password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    declare roles: Role[];

    @HasMany(() => Recipe)
    posts: Recipe[];

}