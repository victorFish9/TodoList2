import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import { useRef } from "react";
import { AgGridColumn } from "ag-grid-react";

export default function TodoGrid(props) {

    const gridRef = useRef();

    const gridOptions = {
        animateRows: true,
    }
    console.log(props)

    const c = [{
        headerName: "Description", field: "desctiption", sortable: true, filter: true, floatingFilter: true,
    },
    {
        headerName: "Date", field: "date", sortable: true, filter: true, floatingFilter: true,
    },
    {
        headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true,
        cellStyle: params => params.value == "High" ? { color: 'red' } : { color: 'green' }
    }
    ]

    const deleteSelect = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
            alert("Chooise description")
        } else {
            console.log(gridRef.current.getSelectedNodes()[0])
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id)
            props.handleDelete(removeIndex)
        }
    }

    return (
        <div>
            <h3>TodoGrid is work</h3>
            <button onClick={deleteSelect}>Delete</button>
            <div className="ag-theme-material" style={{ height: '700px', width: '70%', margin: 'auto' }}>
                <AgGridReact rowData={props.todos} columnDefs={c}
                    rowSelection="single" onGridReady={params => gridRef.current = params.api} gridOptions={gridOptions}>


                </AgGridReact>
            </div>
        </div>
    )
}