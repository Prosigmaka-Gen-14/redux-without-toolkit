const initialState = { nama: 'abid', umur: 17 }

export default function basicReducer(state = initialState, action) {
	if (action.type === 'ubahNama') {
		return { nama: 'ahmad' }
	}

	if (action.type === 'ubahCumaNama') {
		return { ...state, nama: 'abdullah' }
	}

	if (action.type === 'ubahUmur') {
		return { ...state, umur: action.payload }
	}

	return state
}