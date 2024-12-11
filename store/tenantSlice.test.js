import tenantReducer, { addTenant, removeTenant, fetchTenants, selectTenants } from './tenantSlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { STATUS } from '../lib/utils';
import { configureStore } from '@reduxjs/toolkit';

const mock = new MockAdapter(axios);

describe('tenantSlice', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                tenants: tenantReducer,
            },
        });
    });

    it('should return the initial state', () => {
        const state = store.getState().tenants;
        expect(state.tenantList.length).toBe(5);
        expect(state.status).toBe(STATUS[0]);
        expect(state.error).toBe(null);
    });

    it('should handle addTenant.pending', async () => {
        const tenant = { id: 6, firstName: 'Alice', lastName: 'Wonderland' };
        mock.onPost('/api/tenants/').reply(200, tenant);

        await store.dispatch(addTenant(tenant));
        const state = store.getState().tenants;
        expect(state.status).toBe(STATUS[2]);
        expect(state.tenantList).toContainEqual(tenant);
    });

    it('should handle addTenant.rejected', async () => {
        const tenant = { id: 6, firstName: 'Alice', lastName: 'Wonderland' };
        mock.onPost('/api/tenants/').reply(500);

        await store.dispatch(addTenant(tenant));
        const state = store.getState().tenants;
        expect(state.status).toBe(STATUS[3]);
    });

    it('should handle removeTenant', () => {
        store.dispatch(removeTenant(1));
        const state = store.getState().tenants;
    
        expect(state.find(tenant => tenant.id === 1)).toBeUndefined();
    });

    it('should handle fetchTenants.fulfilled', async () => {
        const tenants = [{ id: 6, firstName: 'Alice', lastName: 'Wonderland' }];
        mock.onGet('/api/tenants').reply(200, { rows: tenants });

        await store.dispatch(fetchTenants());
        const state = store.getState().tenants;
        expect(state.status).toBe(STATUS[2]);
        expect(state.tenantList).toEqual(tenants);
    });

    it('should handle fetchTenants.rejected', async () => {
        mock.onGet('/api/tenants').reply(500);

        await store.dispatch(fetchTenants());
        const state = store.getState().tenants;
        expect(state.status).toBe(STATUS[3]);
    });

    it('should select tenants', () => {
        const state = store.getState()
        const tenants =selectTenants(state);
        expect(tenants).toEqual(state.tenants.tenantList);
    });
});