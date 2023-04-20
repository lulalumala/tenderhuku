import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { fetchTenders } from '@/hooks'
import Link from 'next/link'
import Nav from '@/components/Nav/Nav'
import { Context } from '@/states'
import {useTenders} from '@/hooks'

const Tender = () => {
    const context = useContext(Context)
    const {tenders}=context
    const [allTenders, setAllTenders] = tenders
    const router = useRouter()
    const { tender } = router.query
    useTenders()
    return (
        
        <div>
            <Nav />
            {
               allTenders && allTenders.map(tenderItem => {
                    if (tenderItem._id == tender) {
                        return (
                            <div>

                                <img src={tenderItem.company.logo} />
                                <p>{tenderItem.company.name} </p>
                                <p>{tenderItem.tenderName}</p>
                                <p>Category: {tenderItem.category} </p>
                                <p>Reference No. {tenderItem.referenceNo} </p>
                                <p>Description: {tenderItem.tenderDescription} </p>
                                <p>Lots available: { tenderItem.lots}</p>
                                <p>Maximum number of joint ventures: {tenderItem.JVmax} </p>
                                <p>Firms Providing Consultancy: {tenderItem.firmsProvidingConsultancy} </p>
                                <p>Enquiry address: {tenderItem.enquiryAddress} </p>
                                <p>{tenderItem.openingDate} </p>
                                <p>{tenderItem.closingDate} </p>

                                <Link href="../">  <button>PREVIOUS</button>    </Link>

                                <Link href={`./apply/${tenderItem._id}`}>  <button>APPLY</button>    </Link>

                            </div>
                        )
                    }
                })
            }

        </div>
    )

}

export default Tender