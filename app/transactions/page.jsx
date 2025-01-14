'use client'
import { useGetTenantListQuery } from "../../features/tenants/store/tenant";
import { useGetLeaseListQuery } from "../../features/leases/store/lease";
import { useGetTransactionListQuery } from "../../features/ledgers/store/transaction";
import TransactionManager from "../../components/transaction_manager/transaction_manager";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";


function TransactionPage() {

    const { data } = useGetLeaseListQuery({ pollingInterval: 10000, refetchOnFocus: true, refetchOnReconnect: true })
    return(
        <TransactionManager 
            tenants={data?.data.tenants || []} 
            leases={data?.data.leases || []} 
           
        />
    )
}

export default TransactionPage