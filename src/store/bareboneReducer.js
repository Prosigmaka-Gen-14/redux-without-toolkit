export default function bareboneReducer (state, action) {
	if (action.type === 'ubahState') {
		// state = 'yudhoyono' // kode gagal karena immutable
		return 'yudhoyono'
	}

	if (action.type === 'denganData') {
		return action.datanya
	}

	return 'bambang'
}