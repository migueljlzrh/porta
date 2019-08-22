// @flow

import React, {useState} from 'react'

import {ServiceSourceForm, ServiceDiscoveryForm, ServiceManualForm} from 'NewService'
import {createReactWrapper} from 'utilities/createReactWrapper'

type Props = {
  isServiceDiscoveryAccessible: boolean,
  isServiceDiscoveryUsable: boolean,
  serviceDiscoveryAuthenticateUrl: string,
  providerAdminServiceDiscoveryServicesPath: string,
  adminServicesPath: string
}

const NewServiceForm = (props: Props) => {
  const {isServiceDiscoveryAccessible, isServiceDiscoveryUsable, serviceDiscoveryAuthenticateUrl,
    providerAdminServiceDiscoveryServicesPath, adminServicesPath} = props

  const [formMode, setFormMode] = useState('manual')
  const [loadingProjects, setLoadingProjects] = useState(false)

  const handleFormsVisibility = (event: SyntheticEvent<HTMLInputElement>) => {
    setFormMode(event.currentTarget.value)
  }

  const formToRender = () => formMode === 'manual' || !isServiceDiscoveryAccessible
    ? <ServiceManualForm formActionPath={adminServicesPath}/>
    : <ServiceDiscoveryForm formActionPath={providerAdminServiceDiscoveryServicesPath} setLoadingProjects={setLoadingProjects} />

  return (
    <React.Fragment>
      <h1>New API</h1>
      {isServiceDiscoveryAccessible &&
        <ServiceSourceForm
          isServiceDiscoveryUsable={isServiceDiscoveryUsable}
          serviceDiscoveryAuthenticateUrl={serviceDiscoveryAuthenticateUrl}
          handleFormsVisibility={handleFormsVisibility}
          loadingProjects={loadingProjects}
        />
      }
      {formToRender()}
    </React.Fragment>
  )
}

const NewServiceFormWrapper = (props: Props, containerId: string) =>
  createReactWrapper(<NewServiceForm {...props} />, containerId)

export {NewServiceForm, NewServiceFormWrapper}