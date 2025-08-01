import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AppConfigurationData {
    appName: string;
    isLogin: number;
}

interface User {
    userid: string;
    token: string;
}

interface AuthContextType {
    appData: AppConfigurationData | null;
    userData: User | null;
}

// --- context setup --- //
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- auth provider setup ---- //
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    
    // data constants
    const [appData, setAppData] = useState<AppConfigurationData | null>(null);
    const [userData, setUserData] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{
            appData, userData
        }}>
            {children}
        </AuthContext.Provider>
    );
};
// --- end of auth provider setup ---//

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};