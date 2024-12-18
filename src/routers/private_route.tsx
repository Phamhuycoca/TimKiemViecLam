import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  hasPermission?: boolean;
}

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token'); // Kiểm tra token xác thực
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  hasPermission = true,
}) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }else if(!hasPermission){
    return <Navigate to="/403" replace />;
  }
  return <>{children}</>;
};
