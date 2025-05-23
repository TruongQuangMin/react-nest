import { useEffect, useState } from 'react';
import axios from 'axios';

// export default function FirebaseTest() {
//   const [status, setStatus] = useState('Đang kiểm tra...');
//   const [projectId, setProjectId] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/firebase/check')
//       .then((res) => {
//         if (res.data.success) {
//           setStatus('✅ Kết nối Firebase thành công!');
//           setProjectId(res.data.projectId);
//         } else {
//           setStatus('❌ Kết nối Firebase thất bại!');
//         }
//       })
//       .catch(() => {
//         setStatus('❌ Không gọi được API!');
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Kiểm tra kết nối Firebase</h2>
//       <p>{status}</p>
//       {projectId && <p>Project ID: {projectId}</p>}
//     </div>
//   );
// }

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email} - {user.age} old</li>
        ))}
      </ul>
    </div>
  );
}
