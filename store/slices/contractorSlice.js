import { createAppSlice } from './createAppSlice';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const contractorSlice = createAppSlice({
    name: 'contractors',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase('contractors/add', async (state, action) => {
                const newContractor = await prisma.contractor.create({
                    data: action.payload
                });
                state.push(newContractor);
            })
            .addCase('contractors/remove', async (state, action) => {
                await prisma.contractor.delete({
                    where: { id: action.payload.id }
                });
                return state.filter(contractor => contractor.id !== action.payload.id);
            })
            .addCase('contractors/update', async (state, action) => {
                const updatedContractor = await prisma.contractor.update({
                    where: { id: action.payload.id },
                    data: action.payload
                });
                const index = state.findIndex(contractor => contractor.id === action.payload.id);
                if (index !== -1) {
                    state[index] = updatedContractor;
                }
            });
    }
});

export const { actions } = contractorSlice;
export default contractorSlice.reducer;