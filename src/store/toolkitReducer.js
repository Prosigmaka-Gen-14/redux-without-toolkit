import { createSlice } from "@reduxjs/toolkit"

const initialState = { nama: 'Pablo', umur: 32 }

const toolkitSlice = createSlice({
	name: 'toolkit',
	initialState,
	reducers: {
		ubahNama (state, action) {
			state.nama = action.payload
		},
		ubahUmur (state, action) {
			return { ...state, umur: action.payload }
		},
	}
})

export const { ubahNama, ubahUmur } = toolkitSlice.actions

export default toolkitSlice.reducer