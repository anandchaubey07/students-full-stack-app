import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entity/student.entity';

@Module({
imports:[
TypeOrmModule.forRoot({
type:'postgres',
host:'localhost',
port:5432,
 username: 'postgres',
 password: 'postgres',
 database: 'studentsdb',
entities:[Student],
synchronize:true
}),
StudentsModule
]
})
export class AppModule {}
