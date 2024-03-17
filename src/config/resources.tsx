import   { IResourceItem } from "@refinedev/core"
import { DashboardOutlined, ProjectOutlined, UserOutlined, UserSwitchOutlined, FundOutlined, SunOutlined, FormOutlined } from "@ant-design/icons"

export const resources: IResourceItem[] = [
    {
        name: "Dashboard",
        list: '/',
        meta: {
            label: "Dashboard",
            icon: <DashboardOutlined/>
        }
    },
    {
        name: "Adviser",
        list: '/adviser',
         meta: {
            label: "Adviser",
            icon: <SunOutlined />
        }
    },

    {
        name: "Companies",
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/edit/:id',
        meta: {
            label: "Projects",
            icon: <ProjectOutlined/>
        }
    },

    {
        name: "Clients",
        list: '/clients',
        show: '/clients/:id',
        create: '/clients/new',
        edit: '/clients/edit/:id',
        meta: {
            label: "Clients",
            icon: <UserOutlined/>
        }
    },

    {
        name: "Staffs",
        list: '/staffs',
        show: '/staffs/:id',
        create: '/staffs/new',
        edit: '/staffs/edit/:id',
        meta: {
            label: "Staff",
            icon: <UserSwitchOutlined />
        }
    },

    {
        name: "Sales",
        list: '/sales',
        show: '/sales/:id',
        create: '/sales/new',
        edit: '/sales/edit/:id',
        meta: {
            label: "Sales",
            icon: <FundOutlined />
        }
    },
    {
        name: "Tasks",
        list: '/tasks',
        show: '/tasks/:id',
        create: '/tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            label: "Tasks",
            icon: <FormOutlined  />
        }
    },


























]