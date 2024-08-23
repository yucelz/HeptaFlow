// assets
import {
    IconUsersGroup,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable,
    IconFiles,
    IconCashBanknote
} from '@tabler/icons-react'

// constant
const icons = {
    IconUsersGroup,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable,
    IconFiles,
    IconCashBanknote
}

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        // {
        //     id: 'chatflows',
        //     title: 'Chatflows',
        //     type: 'item',
        //     url: '/chatflows',
        //     icon: icons.IconHierarchy,
        //     breadcrumbs: true
        // },
        {
            id: 'agentflows',
            title: 'Project-Flows',
            type: 'item',
            url: '/agentflows',
            icon: icons.IconUsersGroup,
            breadcrumbs: true,
            isBeta: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        // {
        //     id: 'tools',
        //     title: 'Tools',
        //     type: 'item',
        //     url: '/tools',
        //     icon: icons.IconTool,
        //     breadcrumbs: true
        // },
        // {
        //     id: 'assistants',
        //     title: 'Assistants',
        //     type: 'item',
        //     url: '/assistants',
        //     icon: icons.IconRobot,
        //     breadcrumbs: true
        // },
        {
            id: 'credentials',
            title: 'Credentials',
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        {
            id: 'variables',
            title: 'Variables',
            type: 'item',
            url: '/variables',
            icon: icons.IconVariable,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: 'API Keys',
            type: 'item',
            url: '/apikey',
            icon: icons.IconKey,
            breadcrumbs: true
        },
        {
            id: 'document-stores',
            title: 'Database List',
            type: 'item',
            url: '/document-stores',
            icon: icons.IconFiles,
            breadcrumbs: true
        },
        {
            id: 'subscription',
            title: 'Subscription',
            type: 'item',
            url: '/subscription',
            icon: icons.IconCashBanknote,
            breadcrumbs: true
        }
    ]
}

export default dashboard
