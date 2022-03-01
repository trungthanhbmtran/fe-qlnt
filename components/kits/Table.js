import React, { memo } from 'react'
import MaterialTable from 'material-table'
import TableIcons from './TableIcons';

const renderTable = (props) =>{
  return (
    <MaterialTable
      icons={TableIcons}
      title={props.title}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          paddingLeft : 30,
          position: 'sticky', 
          top: 0 ,
        },
        rowStyle: {
          backgroundColor: '#EEE',
        },
        search: false,
        paging: false,
        sorting : true,
        grouping : true,
        exportAllData:false,
        exportButton:false,
        selection: false,
        maxBodyHeight: "60vh"
      }}
      columns={props.columns}
      data={props.data}
      actions={props.actions}
    />
  )
}
const Table = memo(renderTable)

export default Table