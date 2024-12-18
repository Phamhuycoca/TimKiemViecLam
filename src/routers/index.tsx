import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routers';
import { PrivateRoute } from './private_route';
import { Forbidden } from '../pages/Results/Forbidden';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Lặp qua danh sách routes */}
      {routes.map((route) =>
        route.protected ? (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute hasPermission={route.hasPermission ?? true}>
                {React.createElement(route.component)}
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.component)}
          />
        )
      )}

      {/* Route 403 */}
      <Route path="/403" element={<Forbidden />} />

      {/* Route 404 */}
      <Route path="*" element={<h1>404 - Trang không tồn tại</h1>} />
    </Routes>
  );
};
