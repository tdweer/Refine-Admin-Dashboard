import { Authenticated, Refine, } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {  authProvider,dataProvider, liveProvider } from "./providers";
import { Home, ForgotPassword, Login, Register, Clients, Staff, Sale, Task, Adviser } from "./pages"


import { ProjectList } from "./pages/project/List";
import { EditProject } from "./pages/project/edit";
import { Create } from "./pages/project/create";


import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { resources } from "./config/resources";


function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
          <AntdApp>

              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "OnQC86-3yKMDg-owql5k",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route 
                      element={
                      <Authenticated
                      key ="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login" />}
                  >
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                   }>
                    <Route index element={<Home />} />
                    <Route path="/companies">
                      <Route index element={<ProjectList/>}/>
                      <Route path="new" element={<Create/>} />
                      <Route path="edit/:id" element={<EditProject/>} />
                    </Route>
                    <Route path="/adviser" element=
                    {<Adviser />} />
                    <Route path="/clients" element=
                    {<Clients />} />
                    <Route path="/staffs" element=
                    {<Staff />} />
                    <Route path="/sales" element=
                    {<Sale />} /> 
                    <Route path="/tasks" element=
                    {<Task />} />
                    
                  </Route>
                </Routes> 
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
