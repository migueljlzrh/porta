// @flow

import { combineReducers } from 'redux'

import UISettingsReducer from 'Policies/reducers/UISettings'
import RegistryReducer from 'Policies/reducers/PolicyRegistry'
import PolicyConfigReducer from 'Policies/reducers/PolicyConfig'
import ChainReducer from 'Policies/reducers/PolicyChain'
import OriginalChainReducer from 'Policies/reducers/OriginalPolicyChain'

// $FlowFixMe: provide type for State, Action after removing createReducer
const rootReducer = combineReducers({
  chain: ChainReducer,
  originalChain: OriginalChainReducer,
  registry: RegistryReducer,
  policyConfig: PolicyConfigReducer,
  ui: UISettingsReducer
})

export default rootReducer
