export const useAuth = () => {
  const NAME_TOKEN_IN_COOKIE = 'tapmed_token_access';

  const token = useCookie<string | null>(NAME_TOKEN_IN_COOKIE);
  const showLogin = useState<boolean>('showLogin', () => false);
  const showRegister = useState<boolean>('showRegister', () => false);
  /**
   * Đã đăng nhập hay chưa
   */
  const isAuthenticated = computed(() => !!token.value);

  const setToken = (newToken: string) => {
    token.value = newToken;
  };

  const clearToken = () => {
    token.value = null;
  };

  const togglePopupLogin = () => {
    showLogin.value = !showLogin.value;
  };
  
  const togglePopupRegister = () => {
    showRegister.value = !showRegister.value;
  };

  return {
    isAuthenticated,
    setToken,
    clearToken,
    token,
    showLogin,
    showRegister,
    togglePopupLogin,
    togglePopupRegister,
  };
}
