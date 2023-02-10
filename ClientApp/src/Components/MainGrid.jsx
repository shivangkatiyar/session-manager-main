import React, { state,useState,useEffect } from "react";
import { DataGrid, GridEditSingleSelectCell } from '@mui/x-data-grid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MainGridActions from "./MainGridActions";
import AddLogic from "./AddLogic";



function MainGrid({ sessions, setSessions},props) {
    //  const [deletedRows, setDeletedRows] = useState([]);

    //  const handleRowSelection = (e) =>{

    //   setDeletedRows([...deletedRows, ...sessions.filter((r) => r.id === e.data.id)]);
    //   console.log(...deletedRows);
    //  };

    //  const selectDistinct = () => {

    //  }
     const onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
            }
        }
    }

     
  

    const columns = [
        { field: "sessionId", headerName: "sessionId",flex:1, headerClassName: 'super-app-theme--header'},
        { field: "sessionName", headerName: "Session Name",flex:1, headerClassName: 'super-app-theme--header'},
        { field: "participantCount", headerName: "No. of participant",flex:1, headerClassName: 'super-app-theme--header'},
        { field: "sessionDate", headerName: "Date",flex:1, headerClassName: 'super-app-theme--header'},
        { field: "SessionName", headerName: "SessionName",flex:1, headerClassName: 'super-app-theme--header'},
        { field: "Topic_Item_Activity", headerName: "Topic/Item/Activity",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Duration", headerName: "Duration",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Contributor_Email_Id", headerName: "Contributor Email Id", flex:1, headerClassName: 'super-app-theme--header' },
        { field: "EmpID", headerName: "Employee Id",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "SessionID", headerName: "Session Id", flex:1,headerClassName: 'super-app-theme--header' },
        { field: "Description", headerName: "Description",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Training_Area", headerName: "Training Area",flex:1, headerClassName: 'super-app-theme--header' }, 
        { field: "Training_Type", headerName: "Training Type",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Actions", headerName:"Actions", flex:1, headerClassName: 'super-app-theme--header',
        renderCell: (params) => <MainGridActions {...{params}} onClick={onRowClick} setData = {jsonData}/>
      },
    ];
    const [jsonData, setJsonData] = useState([])

      useEffect(() => {
      fetch("https://localhost:44477/session")
        .then((data) => data.json())
        .then((data) => setJsonData(data))
  
    }, [])

    
    const [showPopup, setShowPopup] = useState(false);
    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
    };

    const [finalClickInfo, setFinalClickInfo] = useState(null);

    const handleOnCellClick = (params) => {
        setFinalClickInfo(params);

        console.log(finalClickInfo)
      };

    return (
        <>
            <div className="FirstPage">
                <div className="box-2 container-fluid shadow rounded bg-light">
                    <div>
                        <div className="color-overlay d-flex justify-content-right align-items-center">
                            <Popup trigger={<button className="btn btn-danger" style={{"margin-top":"10px", "margin-bottom":"10px"}} onClick={handleTogglePopup}> Add New Session</button>} position="right center" modal
                                nested>{
                                    close =>
                                    (
                                        <AddLogic jsonData = {jsonData} setJsonData = {setJsonData} handleTogglePopup = {close}/>
                                    )
                                }
                            </Popup>
                        </div>
                    </div>
                    <div style={{ height: 750, width: "100%" }}>
                        <DataGrid  columns={columns} rows={jsonData}  getRowId={(key) =>  key.sessionId}  onCellClick={handleOnCellClick}  />
                        {finalClickInfo &&
                                `Final clicked id = ${finalClickInfo.participantCount}, 
                                 Final clicked field = ${finalClickInfo.participantCount}, 
                                 Final clicked value = ${finalClickInfo.participantCount}`
                        }
                    </div>
                </div>
            </div>
        </>
    );

}
export default MainGrid;


