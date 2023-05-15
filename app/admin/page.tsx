import React from 'react'
import SalesThisWeek from './components/SalesThisWeek'
import LatestTransactions from './components/LatestTransactions'
import LatestCustomers from './components/LatestCustomers'
import MiniCardsAdmin from './components/MiniCardsAdmin'

type Props = {}

const Page = () => {
  return (
    <div>
      <div className='flex overflow-hidden bg-white '>
        <div
          className='bg-gray-900 opacity-50 hidden fixed inset-0 z-10'
          id='sidebarBackdrop'
        ></div>
        <div
          id='main-content'
          className='h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-0'
        >
          <main>
            <div className='pt-6 px-4'>
              <div className='w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
                {/* SalesThisWeek */}
                <SalesThisWeek />
                {/* Latest Transactions
                 */}
                <LatestTransactions />
              </div>
              {/* mini cards new products this week, visitor this weej, user signups this week */}
              <MiniCardsAdmin />

              {/* Acquisition Overview
and Latest Customers
               */}
              <div className='grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4'>
                {/* Latest Customers
                 */}
                <LatestCustomers />
                {/* Acquisition Overview
                 */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Page
