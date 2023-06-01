import { useDispatch, useSelector } from "react-redux"
import { ubahNama, ubahUmur } from "./store/toolkitReducer"

export default function ImplementasiToolkitReducer () {
	const dispatch = useDispatch()
	const toolkit = useSelector(state => state.toolkitReducer)

	return <>
		<h1>Ini Toolkit Reducer</h1>
		<p>nama: {toolkit.nama}</p>
		<p>umur: {toolkit.umur}</p>
		<button onClick={() => dispatch(ubahNama('Pedro'))}>
			ubah nama
		</button>
		<button onClick={() => dispatch(ubahUmur(39))}>
			ubah umur
		</button>
	</>
}