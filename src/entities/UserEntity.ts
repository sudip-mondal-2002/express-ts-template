import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id = 0;

    @Index({unique: true})
    @Column('varchar', {length: 50, nullable: false})
    email: string

    @Column('varchar', {length: 1000, nullable: false})
    password: string

    @Column('varchar', {length: 50})
    name: string

    @Column({type: "timestamp", default: "now()"})
    created_at: Date = new Date();

    @Column({type: "timestamp"})
    updated_at: Date = new Date();

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}
