import { useSelector, useDispatch } from "react-redux"

export default function ImplementasiBareboneReducer() {
	const dispatch = useDispatch()
	const barebone = useSelector(state => state.bareboneReducer)

	return <>
		<h1>Ini Barebone Reducer</h1>
		<p>isi dari barebone reducer: {barebone}</p>

		<button onClick={() => dispatch({ type: 'ubahState' })}>
			coba dispatch
		</button>
		<button onClick={() => dispatch({
			type: 'denganData',
			datanya: 'susilo'
		})}>
			coba dispatch dengan sebuah data
		</button>
	</>
}