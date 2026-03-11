import { Controller,Get,Post,Body,Param,Delete,Put } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController{

constructor(private service:StudentsService){}

@Get()
getAll(){return this.service.findAll()}

@Post()
create(@Body() body){return this.service.create(body)}

@Put(':id')
update(@Param('id') id,@Body() body){
return this.service.update(id,body)
}

@Delete(':id')
delete(@Param('id') id){
return this.service.remove(id)
}

}
