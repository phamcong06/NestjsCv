import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CandidateInformationModule } from './candidate-information/candidate-information.module';
import { AllProfessionsModule } from './all-professions/all-professions.module';
import { HintQuestionModule } from './hint-question/hint-question.module';
import { MailService } from './mail/mail.service';
import { MailController } from './mail/mail.controller';
import { MailModule } from './mail/mail.module';
import { QuestionDetailsController } from './question-details/question-details.controller';
import { QuestionDetailsService } from './question-details/question-details.service';
import { QuestionDetailsModule } from './question-details/question-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'cvmaker',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true,
    }),
    UserModule,
    AuthModule,
    CandidateInformationModule,
    AllProfessionsModule,
    HintQuestionModule,
    MailModule,
    QuestionDetailsModule,
  ],
  controllers: [AppController, QuestionDetailsController],
  providers: [AppService, QuestionDetailsService],
})
export class AppModule {}
