import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import { useRef } from "react";

export default function TodoGrid(props) {

    const gridRef = useRef();
    console.log(props)

    const c = [{
        headerName: "Description", field: "desctiption", sortable: true, filter: true
    },
    {
        headerName: "Date", field: "date", sortable: true, filter: true,
        cellStyle: params => params.value > 3 ? { color: 'red' } : { color: 'green' }
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
                    rowSelection="single" onGridReady={params => gridRef.current = params.api}>

                </AgGridReact>
            </div>
        </div>
    )
}