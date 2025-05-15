import { BelongsToMany } from "sequelize-typescript";
import { Column, Model, Table, DataType } from "sequelize-typescript"
import { User } from '../users/users.model'
import { UserRoles } from "./user-roles.model"

interface RolesCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RolesCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    declare id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}