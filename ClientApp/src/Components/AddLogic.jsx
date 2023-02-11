import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { GridRowEditStartReasons } from "@mui/x-data-grid";

function AddSession({jsonData, setJsonData, handleTogglePopup, data}) {
    // constructor() {
    //     super();
    //     this.state = {
    //         id:jsonData.Topic_Item_Activity,
    //         Topic_Item_Activity: "",
    //         items: [],
    //     };
    // }
    // onUpdate = (item) => {
    //     const updateData = this.state.items.map((x) =>
    //     x.id === item.id ? { ...x, Topic_Item_Activity: item:newFirstname} : x
    //     );
    //     this.setState({items: updateData});
    // }

    const [addFormData, setAddFormData] = useState(jsonData)
    console.log(data)

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
        // console.log(event);

    };

    //add -> backend -> grid refresh


    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newSession = {
            id: nanoid(),
            sessionId: addFormData.sessionId,
            Contribution_Type: addFormData.Contribution_Type,
            Date: addFormData.Date,
            Topic_Item_Activity: addFormData.Topic_Item_Activity,
            participantCount: addFormData.participantCount,
            Duration: addFormData.Duration,
            Contributor_Email_Id: addFormData.Contributor_Email_Id,
            EmpID: addFormData.EmpID,
            SessionID: addFormData.SessionID,
            Description: addFormData.Description,
            Training_Type: addFormData.Training_Type,
            Training_Area: addFormData.Training_Area,
            Teams_Invite: addFormData.Teams_Invite
        };
        setJsonData([...data, newSession]);
    };

    // fetch("https://localhost:44477", { 

    //     method: 'POST',
    //     mode: 'cors',
    //     body: JSON.stringify(jsonData) 

    // })


    return (

    <div>
            <form>
                <div class="form-group" id="form-group-1">
                    <h2>Add Session</h2>
                    <hr />
                    <div class="form-control">
                        <label>Training Type</label>
                        <select name="Training_Type" onChange={handleAddFormChange} value = {jsonData?.Training_Type} required="required">
                            <option hidden>Training Type</option>
                            <option value="Bootcamp">Bootcamp</option>
                            <option value="Extended Bootcamp">Extended Bootcamp</option>
                            <option value="Weekly Talk">Weekly Talk</option>
                            <option value="Study Group">Study Group</option>
                            <option value="Pre Bootcamp">Pre Bootcamp</option>
                            <option value="Domain Training">Domain Training</option>
                            <option value="LDP">LDP</option>
                        </select></div><div class="form-control">
                        <label>Training Area</label>
                        <select name="Training_Area" onChange={handleAddFormChange} value = {jsonData?.Training_Area} required="required">
                            <option hidden>Training Area</option>
                            <option value="SQL">SQL</option>
                            <option value="BI">BI</option>
                            <option value="Azure">Azure</option>
                            <option value="ML">ML</option>
                            <option value="Dynamics">Dynamics</option>
                            <option value="SSAS">SSAS</option><option value="Web Development">Web Development</option>
                            <option value="Process">Process</option><option value="Management">Management</option>
                            <option value="Domain">Domain</option>
                            <option value="Power-BI">Power-BI</option>
                            <option value="Others">Others</option> </select>
                    </div>
                    </div>
                <div class="form-group" id="form-group-3">
                <div class="form-control">
                        <label>SessionId</label>
                        <input name="sessionId" value = {addFormData?.sessionId} required="required" id="field2" type="text" placeholder="SessionId" onChange={handleAddFormChange} />
                    </div>
                    <div class="form-control">
                        <label>Date</label>
                        <input name="Date" value = {addFormData?.Date} required="required" id="field2" type="Date" placeholder="Date" onChange={handleAddFormChange} />
                    </div>
                </div>
                <div class="form-group" id="form-group-1"><div class="form-control">
                    <label>Contributor Email Id</label>
                    <input type="text" name="Contributor_Email_Id" value={addFormData?.Contributor_Email_Id} required="required" id="field6" placeholder="Contributor Email Id" onChange={handleAddFormChange} />
                </div>
                    <div class="form-control">
                        <label>Contribution type</label>
                        <select name="Contribution_Type" value={addFormData?.Contribution_Type}id="field1" onChange={handleAddFormChange}>
                            <option hidden>Contribution Type</option><option value="Create/update content">Create/update content</option>
                            <option value="Deliver/Mentor session">Deliver/Mentor session</option>
                            <option value="Review assignments">Review assignments</option>
                            <option value="Coordinate training">Coordinate training</option>
                            <option value="Support user requests">Support user requests</option>
                            <option value="Maintain Tool/System">Maintain Tool/System</option>
                            <option value="Onboard content">Onboard content</option> </select></div>
                </div>
                <div class="form-group" id="form-group-3"><div class="form-control">
                    <label>Topic/Item/Activity</label>
                    <textarea name="Topic_Item_Activity" value = {addFormData?.Topic_Item_Activity} type="text" required="required" placeholder="Topic/Item/Activity" onChange={handleAddFormChange} >
                    </textarea></div>
                    <div class="form-control">
                        <label>Description</label>
                        <textarea name="Description" value={addFormData?.Description} type="text" required="required" placeholder="Description" onChange={handleAddFormChange} ></textarea>
                        <label>No. of participants</label>
                        <textarea name="participantCount" value = {addFormData?.participantCount} type="text" required="required" placeholder="No_of_Participants" onChange={handleAddFormChange} ></textarea>
                    </div>
                    <div class="form-control"><label>Teams Invite</label>
                        <textarea name="Teams_Invite" type="text" value={addFormData?.Teams_Invite} required="required" placeholder="https://msteams" onChange={handleAddFormChange} ></textarea>
                    </div>
                </div>
                <div class="form-group" id="form-group-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <tr>
                        <td colSpan="10">
                            <div>
                                <button class="btn btn-outline-danger m-3" onClick={() => {
                                    handleTogglePopup();
                                }} >CANCEL</button>
                                <input class="btn btn-danger" type="submit" value="SUBMIT" onClick={handleAddFormSubmit} />
                            </div>
                        </td>
                    </tr>
                </div>

            </form>
        </div>
    )
}
export default AddSession