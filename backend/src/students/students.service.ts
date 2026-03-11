import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentsService{

constructor(@InjectRepository(Student) private repo:Repository<Student>){}

findAll(){return this.repo.find()}

create(data){return this.repo.save(data)}

update(id,data){
return this.repo.update(id,data)
}

remove(id){
return this.repo.delete(id)
}

}
