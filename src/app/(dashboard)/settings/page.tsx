import React from 'react';
import Infobar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'

type Props = {}

const Page = (props: Props) => {
    return <>
          <Infobar />
          <BillingSettings />
         </>
}

export default Page