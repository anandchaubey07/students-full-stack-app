import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entity/student.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [Student],
            synchronize: true,
            ssl: {
                rejectUnauthorized: false,
            },
        }),
        StudentsModule,
    ],
})
export class AppModule { }