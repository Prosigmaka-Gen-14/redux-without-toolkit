import ImplementasiToolkitReducer from './ImplementasiToolkitReducer'
import ImplementasiNormalReducer from './ImplementasiNormalReducer'
import ImplementasiBasicReducer from './ImplementasiBasicReducer'
import ImplementasiBareboneReducer from "./ImplementasiBareboneReducer"

export default function App () {
  return <>
    <ImplementasiToolkitReducer />
    <hr />
    <hr />
    <ImplementasiNormalReducer />
    <hr />
    <hr />
    <ImplementasiBasicReducer />
    <hr />
    <hr />
    <ImplementasiBareboneReducer />
  </>
}