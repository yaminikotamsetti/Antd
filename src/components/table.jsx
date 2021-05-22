import React from 'react'
import './table.css'
import {Table} from 'antd'
import 'antd/dist/antd.css';

const data = [
  {
    name:'BCG',
    age: 'At birth or as early as possible till 1 year of age',
    dose: '0.1ml',
    route: 'Intra-decimal',
    site:'Left Upper Arm',
    key:1
  },
  {
    name:'Hepatitis B Birth dose',
    age:'At birth or as early as possible within 24hrs',
    dose:'0.5ml',
    route:'Intramuscular',
    site:'Anterolateral side of mid thigh-LEFT',
    key:2
  },
  {
    name:'OPV Birth dose ',
    age:'At birth or as early as possible within the first 15 days ',
    dose:'2 drops ',
    route:'Oral',
    site:'-',
    key:3
  },{
    name:'IPV (inactivated Polio Vaccine)',
    age:'14 weeks ',
    dose:'0.5 ml ',
    route:'Intramuscular',
    site:'Anterolateral side of mid thigh-RIGHT',
    key:4
  },{
    name:'Pentavelant  1,2 & 3',
    age:' At 6 weeks, 10 weeks & 14 weeks ',
    dose:'0.5 ml',
    route:'Intramuscular',
    site:'Anterolateral side of mid thigh-LEFT',
    key:5
  },{
    name:'Rota Virus Vaccine',
    age:' At 6 weeks, 10 weeks & 14 weeks ',
    dose:'5 drops',
    route:'Oral',
    site:'-',
    key:6
  },{
    name:'Measles 1st Dose ',
    age:'9 completed months-12 months',
    dose:'0.5 ml ',
    route:'Subcutaneous',
    site:'Right Upper Arm',
    key:7
  },{
    name:'Vitamin A, 1st Dose',
    age:'At 9 months with measles ',
    dose:'1 ml(1 lakh IU)',
    route:'Oral',
    site:'-',
    key:8
  },
 ]

 const columns = [
   {
     title: <div style={{color:'Dodgerblue'}}><b><u>Vaccine</u></b></div>,
     dataIndex: 'name',
     key:'key',
     render: name =>{
       return <a>{name}</a>
     }
   },
   {
     title:<div style={{color:'Dodgerblue'}}><b><u>When to give</u></b></div> ,
     dataIndex: 'age',
     key:'key',
     sorter: (a,b) => a.age - b.age
   },
   {
     title: <div style={{color:'Dodgerblue'}}><b><u>Dose</u></b></div>,
     dataIndex: 'dose',
     key:'key'
   },
   {
     title:<div style={{color:'Dodgerblue'}}><b><u>Route</u></b></div>,
     dataIndex:'route',
     key:'key'
   },
   {
     title:<div style={{color:'Dodgerblue'}}><b><u>Site</u></b></div>,
     dataIndex:'site',
     key:'key'
   },
 ]

  class Tables extends React.Component{
      render(){
          return ( 
            <div className="App-header"> 
            <h1 className='primary'> National Immunization Schedule</h1>
            
            
           <Table
            dataSource={data}
            columns={columns}>
            </Table>
            </div>
            )
      }
  }
 
 
 


export default Tables