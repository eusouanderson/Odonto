import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from './modules/register.module';
import { ToothModule } from './modules/tooth.module';  // Corrigido aqui

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_CLUSTER_URI || 'mongodb://localhost:27017/clinicadb'),
    RegisterModule,
    ToothModule, 
  ],
})
export class AppModule {}
