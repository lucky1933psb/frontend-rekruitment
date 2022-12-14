export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
  
    if (user && token) {
      return { authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }