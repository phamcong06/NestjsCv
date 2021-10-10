import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailEntity } from 'src/mail/entities/mail.entity';
import { MailService } from 'src/mail/mail.service';
import { UserEntity } from 'src/user/models/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    console.log('asd');
    const user = await this.userService.findOne(email);
    console.log(user);
    if (user && (await user.isPass(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async sendMail(user: MailEntity) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    // create user in db
    // ...
    // send confirmation mail
    return await this.mailService.sendUserConfirmation(user, token);
  }
  async login(user: any) {
    const payload = { email: user.email, id: user.userId, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
