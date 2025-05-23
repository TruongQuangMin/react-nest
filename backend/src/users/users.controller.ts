import { Controller, Get } from '@nestjs/common';
import admin from '../key-firebase/firebase.config'; // hoặc đường dẫn đúng của bạn

@Controller('users')
export class UserController {
  @Get()
  async getUsers() {
    try {
      const snapshot = await admin.firestore().collection('users').get();
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return {
        success: true,
        users,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Lỗi khi lấy dữ liệu từ Firebase',
        error: error.message,
      };
    }
  }
}
