import { Controller, Get } from '@nestjs/common';
import admin from '../key-firebase/firebase.config';

@Controller('firebase')
export class FirebaseController {
  @Get('check')
  async checkConnection() {
    try {
      const projectId = admin.app().options.projectId;

      return {
        success: true,
        message: 'Kết nối Firebase thành công!',
        projectId,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Kết nối Firebase thất bại!',
        error: error.message,
      };
    }
  }
}
