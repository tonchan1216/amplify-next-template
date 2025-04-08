'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Session } from 'next-auth';
import { getCurrentUser } from 'aws-amplify/auth';

interface SessionContextType {
  session: Session | null | undefined;
  setSession: React.Dispatch<React.SetStateAction<Session | null | undefined>>;
}

export const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSessionContext = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }
  return context;
};

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const currentUser = await getCurrentUser();
        const sessionData: Session = {
          user: {
            name: currentUser?.username ?? null,
            email: currentUser?.signInDetails?.loginId ?? null,
            image: null,
          },
          expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        };
        setSession(sessionData);
        console.log('Session data:', sessionData);
      } catch (error) {
        console.warn('No authenticated user found');
        setSession(null);
      }
    };

    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
