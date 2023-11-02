import styles from "./Section5.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';




const Section5 = () => {
// localStorage.getItem("currentUser")

  
    
    const columns = [
        // { field: 'ID', headerName: 'No', width: 130 },

        { field: 'lineitem', headerName: 'Line Item', width: 130 },
        { field: 'description', headerName: 'Description of goods', width:130, },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'physical unit', headerName: 'Physical Unit', width: 130 },
        { field: 'final destination', headerName: 'Final Destination as specified in TDS', width: 130 },
        { field: 'delivery', headerName: 'Delivery (as per Incoterms) Date<', width: 130 },




        {
            field: 'fullName',
            headerName: 'Full name',
            width: 160,
            // valueGetter: getFullName,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
        { id: 4, lastName: 'Stark', firstName: 'Arya' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
    ];


    return (
        <div>
            <h2>SCHEDULE OF REQUIREMENTS</h2>
            <p>
                The  Schedule  of  Requirements  shall  be  included  in  the  Tendering  document  by  the  Procuring  Entity,  and  shall  cover,  at  a  minimum,  a  description  of  the  goods  and  services  to  be  supplied  and  the  delivery  schedule.
            </p>
          


            <p>
                The  objective  of  the  Schedule  of  Requirements  is  to  provide  sufﬁcient  information  to  enable  tenderers  to  prepare  their  Tenders  efﬁciently  and  accurately,  in  particular,  the  Price  Schedule,  for  which  a  form  is  provided  in  Section  IV.  In  addition,  the  Schedule  of  Requirements,  together  with  the  Price  Schedule,  should  serve  as  a  basis  in  the  event  of  quantity  variation  at  the  time  of  award  of  contract  pursuant  to  ITT  42.1.
            </p>
            <p>
                The  date  or  period  for  delivery  should  be  carefully  speciﬁed,  taking  into  account  (a)  the  implications  of  delivery  terms  stipulated  in  the  Instructions  to  tenderers  pursuant  to  the  Incoterms  rules  that  “delivery”  takes  place  when  goods  are  delivered  to  the  ﬁnal  place  of  delivery,  and  (b)  the  date  prescribed  herein  from  which  the  Procuring  Entity's  delivery  obligations  start  (i.e.,  notice  of  award,  contract  signature,  opening  or  conﬁrmation  of  the  letter  of  credit).
            </p>



            <Box className={styles.box} sx={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </Box>




            <table className={styles.table} >
                <tr>
                    <th className={styles.td}>Line ItemN</th>
                    <th className={styles.td}>Description of Goods </th>
                    <th className={styles.td}>Quantity</th>
                    <th className={styles.td}>Physical unit</th>
                    <th className={styles.td}>Final Destination as specified in TDS</th>
                    <th className={styles.td} colSpan={3} >Delivery (as per Incoterms) Date</th>
                </tr>
                <tr>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                    <th className={styles.td}> </th>
                </tr>
                <tr>
                    <th className={styles.td}>[insert item No]</th>
                    <th className={styles.td}>[insert description of Goods]</th>
                    <th className={styles.td}>[insert quantity of item to be supplied]</th>
                    <th className={styles.td}>[insert physical unit for the quantity]</th>
                    <th className={styles.td}>[insert place of Delivery]</th>
                    <th className={styles.td}>[insert the number of days following the date of effectiveness the Contract]</th>
                    <th className={styles.td}>[insert the number of days following the date of effectiveness the Contract]</th>
                    <th className={styles.td}>[insert the number of days following the date of effectiveness the Contract]</th>
                </tr>
                <tr>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                </tr>
                <tr>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                </tr>
                <tr>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                </tr>
                <tr>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                </tr>
            </table>
            <p>List of Related Services and Completion Schedule</p>
            <table>
                <tr>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}><input type="text" className={styles.section5Input} /> </th>
                    <th className={styles.td}> <input type="text" className={styles.section5Input} /></th>
                </tr>
            </table>
        </div>
    )
}
export default Section5