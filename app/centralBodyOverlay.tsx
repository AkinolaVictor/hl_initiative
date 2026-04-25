"use client"
import React from 'react'
import { Provider } from 'react-redux'
import OverlayHeader from './components/overlayHeader'
import AdminModal from './components/admin/adminModal'
import Workings from './components/workings'
import OverlayMenu from './components/overlayMenu'
import dataStore from './redux/store'

interface Props {children:any}

function CentralBodyOverlay(props: Props) {
    const {children} = props

    return (
        <Provider store={dataStore}>
          {/* <Header /> */}
          <OverlayHeader />
          <AdminModal />
          <Workings />
          {children}
          <OverlayMenu />
        </Provider>
    )
}

export default CentralBodyOverlay
