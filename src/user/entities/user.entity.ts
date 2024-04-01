import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:number

    @Column({unique:true})
    email: string;

    @Column()
    password:string;

    @Column({default:'user'})
    rol:string
}
