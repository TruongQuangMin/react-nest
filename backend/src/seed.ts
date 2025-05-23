import admin from './key-firebase/firebase.config';

async function seedUsers() {
  const db = admin.firestore();
  const usersRef = db.collection('users');

  const users = [
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 30 },
    { name: 'Charlie', email: 'charlie@example.com', age: 28 },
  ];

  for (const user of users) {
    await usersRef.add(user);
  }

  console.log('✅ Seed dữ liệu users thành công!');
}

seedUsers()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Lỗi khi seed:', err);
    process.exit(1);
  });
