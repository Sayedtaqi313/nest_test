import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const randomNumber = Math.floor(Math.random() * 100000);

    const user = this.userRepository.create({
      username: `user_${randomNumber}`,
      email: `user_${randomNumber}@gmail.com`,
    });

    await this.userRepository.save(user);

    console.log('User inserted:', user);
  }

  getHello(): string {
    return 'Hello World! joon';
  }

  async getData() {
    return await this.userRepository.find();
  }
}
