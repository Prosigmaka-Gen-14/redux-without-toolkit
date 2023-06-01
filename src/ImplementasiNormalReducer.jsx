import { useDispatch, useSelector } from "react-redux"

export default function ImplementasiNormalReducer () {
	const dispatch = useDispatch()
	const normal = useSelector(state => state.normalReducer)

	return <>
		<h1>Ini Normal Reducer</h1>
		<p>nama: {normal.nama}</p>
		<p>umur: {normal.umur}</p>

		<button onClick={() => dispatch({
			type: 'normal/ubahNama',
			payload: 'Cena'
		})}>
			ubah nama
		</button>
		<button onClick={() => dispatch({
			type: 'normal/ubahUmur',
			payload: 25
		})}>
			ubah umur
		</button>
	</>
}