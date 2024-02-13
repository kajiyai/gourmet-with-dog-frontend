// src/api/auth.ts
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface LoginResponse {
  success: boolean;
  email?: string;
  userId?: string;
}

interface LoginError {
  success: false;
  message: string;
}

// 型ガードの定義
export function isLoginResponse(response: any): response is LoginResponse {
  return (response as LoginResponse).success === true;
}

export async function login(email: string, password: string): Promise<LoginResponse | LoginError> {
  try {
    const response = await fetch(`${BACKEND_URL}/v1/auth/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`Login failed with status: ${response.status}`, data);
      // ここでAPIのエラーメッセージのフィールドに合わせて調整
      return { success: false, message: data.error || 'Login failed' };
    }

    console.log('Login successful', data);
    // 応答の構造に基づいてuserIdを設定、実際の応答に応じて調整
    return { success: true, email: data.email, userId: data.userId };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'An error occurred during login.' };
  }
}
