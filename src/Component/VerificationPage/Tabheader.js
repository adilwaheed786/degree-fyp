
import React from "react";
import UniqueId from './UniqueeId';
import QrCode  from "./QrCode";
//import homepage from '../../Component/Admin/StudentDetail/StudentCertificate'

export const Tabs =[
    {
        id:0,
        text:'verification via unique id',
        component:<UniqueId></UniqueId>,
        buttonText:'Unique ID'

    },
    {
        id:1,
        text:'Verification via QR-code',
        component: <QrCode></QrCode>,
        buttonText:'QR-Code'

    }
    // {   id:2,
    //     buttonText:'Upload Document',
    //     component:<homepage></homepage>
    // }

];
export const TabButtons = [
    {
        id:1,
        text:'Unique ID',
    },
    {
        id:2,
        text:'QR-Code',
    },
    {
        id:3,
        text:'Upload Document'
    }
        
]
// export default Headings;