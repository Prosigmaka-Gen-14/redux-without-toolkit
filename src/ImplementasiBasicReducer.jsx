import { useDispatch, useSelector } from "react-redux"

export default function ImplementasiBasicReducer () {
	const dispatch = useDispatch()
	const basic = useSelector(state => state.basicReducer)

	return <>
		<h1>Ini Basic Reducer</h1>
		<p>nama di dalam basic reducer: {basic.nama}</p>
		<p>umur di dalam basic reducer: {basic.umur}</p>

		<button onClick={() => dispatch({ type: 'ubahNama' })}>
			ubah nama
		</button>
		<button onClick={() => dispatch({ type: 'ubahCumaNama' })}>
			ubah cuma nama
		</button>
		<button onClick={() => dispatch({
			type: 'ubahUmur',
			payload: 23
		})}>
			ubah umur
		</button>
	</>
}