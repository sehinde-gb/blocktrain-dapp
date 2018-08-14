
import HomePage from './views/Home/Home'
import OriginalPage from './views/Original/OriginalPage'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import Users from './views/Users/UserListing'
import UserDetail from './views/Users/UserDetail'
import UserRegister from './views/Users/UserRegister'
import JourneyListings from './views/Journeys/JourneyListings'
import JourneyDetail from './views/Journeys/JourneyDetail'
import Update from './views/Users/BalanceUpdate.vue'
import Parent from './views/Journeys/Parent'
import Confirmation from './views/Block/Confirmation'
import BlockListings from './views/Block/Listings'


export const routes = [

    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },

    {
        path: '/register',
        name: 'register',
        component: Register

    },

    {
        path: '/original',
        name: 'original',
        component: OriginalPage,
    },

    {
        path: '/users/register',
        name: 'user.register',
        component: UserRegister,
        meta: {
            requiresAuth: true
        },
    },

    {

        path: '/users',
        name: 'users',
        component: Users,
        meta: {
            requiresAuth: true
        },

    },


    {   path: '/users/:id',
        name: 'user.detail',
        component: UserDetail,
        meta: {
            requiresAuth: true
        }
    },


    {   path: '/users/:id/topup',
        name: 'user.update',
        component: Update,
        meta: {
            requiresAuth: true
        }
    },



    {
        path: '/users/:id/journeys',
        name: 'journey.listings',
        props: true,
        component:JourneyListings,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/users/:id/journeys/:journey',
        name: 'journey.detail',
        props: true,
        component: JourneyDetail,
        meta: {
            requiresAuth: true
        }
    },


    {   path: '/users/:id/make/journey',
        name: 'journey.make',
        props: true,
        component: Parent,
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/confirmation',
        name: 'block.confirmation',
        props: true,
        component: Confirmation,
        meta: {
            requiresAuth: true
        }

    },

    {
        path: '/listings',
        name: 'block.listings',
        props: true,
        component: BlockListings,
        meta: {
            requiresAuth: true
        }

    },






];