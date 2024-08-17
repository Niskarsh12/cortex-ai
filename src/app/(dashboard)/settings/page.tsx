import React from 'react';
import Infobar from '@/components/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import DarkModetoggle from '@/components/settings/dark-mode';
import ChangePassword from '@/components/settings/change-password';

type Props = {}

const Page = (props: Props) => {
    return <>
          <Infobar />
          <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
          <BillingSettings />
          <DarkModetoggle />
          <ChangePassword />
          </div>
         </>
}

export default Page