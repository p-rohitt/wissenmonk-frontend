// authStore.js
import {create} from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  login: async (email, password) => {
    try {
      // Make an API call to authenticate the user
      // const response = await fetch('your_login_api_url', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // if (!response.ok) {
      //   throw new Error('Login failed');
      // }

      // // Assuming the API returns user data and token upon successful login
      // const { user, token } = await response.json();
        const user = {username: "talksikk", email:"talksikk@gmail.com"};
        const token = "sjefnjwnsefjnsekfnksenflskeflkamdla"
      // Update Zustand store with authentication information
      set({ isAuthenticated: true, user, token });
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error if needed
    }
  },
  logout: () => set({ isAuthenticated: false, user: null, token: null }),
  signup : async(username, email,password) => {
    try{
        const response = await fetch('signup_route', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (!response.ok) {
            throw new Error('Login failed');
          }
    
          // Assuming the API returns user data and token upon successful login
          const { user, token } = await response.json();
    
          // Update Zustand store with authentication information
          set({ isAuthenticated: true, user, token });
        } catch (error) {
          console.error('Login error:', error);
          // Handle login error if needed
        }
    }
  }
));

export default useAuthStore;
