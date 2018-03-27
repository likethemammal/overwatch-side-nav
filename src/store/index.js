import { appReducer } from '../reducers'
import general_components from "@likethemammal/general-components"

const configureStore = general_components.store.configure

//used in devtools
const STORE_NAME_App = 'App'

export const appStore = configureStore(appReducer, STORE_NAME_App)
