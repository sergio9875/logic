import React, {useEffect} from 'react'
import { Chart } from 'react-charts'


import {getJobs} from "../actions";
import {connect} from "react-redux";

const ChartContainer = ({getJobs, jobs}) => {

    const data = React.useMemo(
        () => [
            {
                label: 'Serichartes 1',
                data: [{ x: 1, y: 0 }, { x: 2, y: 500 }, { x: 3, y: 1500 }]
            },

        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    useEffect(() => {
        getJobs();
    }, []);
    return (

        <div>
            {jobs.jobs.map(u =>
                <h6 key={u.id}>{u.name}</h6>
            )}
            <div style={{
                    width: '400px',
                    height: '300px'
                }}
            >
                <Chart data={data} axes={axes} />
            </div>
        </div>

    )

}


const mapStateToProps = (state => ({jobs: state.jobs}))

export default connect(
    mapStateToProps,
    {getJobs}
)(ChartContainer);

// function ChartContainer() {
//     const data = React.useMemo(
//         () => [
//             {
//                 label: 'Series 1',
//                 data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//             },
//
//         ],
//         []
//     )
//
//     const axes = React.useMemo(
//         () => [
//             { primary: true, type: 'linear', position: 'bottom' },
//             { type: 'linear', position: 'left' }
//         ],
//         []
//     )
//
//     return (
//         <div
//             style={{
//                 width: '400px',
//                 height: '300px'
//             }}
//         >
//             <Chart data={data} axes={axes} />
//         </div>
//     )
// }
// export default ChartContainer

