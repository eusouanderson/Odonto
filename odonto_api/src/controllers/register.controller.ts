import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegisterService } from '../services/register.service';

@Controller('registers')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async createRegister(
    @Body() body: { name: string; cpf: string; phone: string; email: string; address: string }
  ) {
    return this.registerService.createRegister(body.name, body.cpf, body.phone, body.email, body.address);
  }

  @Get()
  async getAllRegisters() {
    return this.registerService.getAllRegisters();
  }
}
