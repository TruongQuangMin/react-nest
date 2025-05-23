import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseController } from './firebase/firebase.controller';
import { UserController } from './users/users.controller';
import { ConfigModule } from '@nestjs/config';
// import { UserModule } from './users/users.module';

@Module({
  // imports: [
  //   ConfigModule.forRoot({
  //     isGlobal: true, // để có thể sử dụng ở mọi nơi
  //   }),
  //   // other modules
  // ],
  controllers: [AppController, FirebaseController, UserController],
  providers: [AppService],
})
export class AppModule {}
