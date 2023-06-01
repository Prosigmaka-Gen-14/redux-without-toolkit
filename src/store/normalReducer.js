const initialState = { nama: 'John', umur: 18 }

export default function normalReducer (state = initialState, action) {
	switch (action.type) {
		case 'normal/ubahNama':
			return { ...state, nama: action.payload }
		case 'normal/ubahUmur':
			return { ...state, umur: action.payload }
		default:
			return state
	}
}