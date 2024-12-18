import { Admin } from "../layouts/admin";
import { PageLogin } from "../pages/Login/PageLogin";
import { Forbidden } from "../pages/Results/Forbidden";

export interface RouteType {
  path: string;
  component: React.FC;
  protected?: boolean;
  hasPermission?: boolean;
}

export const routes: RouteType[] = [
  { path: '/login', component: PageLogin,protected: false },
  { path: '/403', component: Forbidden },
  { path: '/admin', component: Admin, protected: true, hasPermission: false },
];
