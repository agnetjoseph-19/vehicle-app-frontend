import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewVehicle = () => {
        const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-booking").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

  return (
            <div className="container">
            <NavBar />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Owner Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Vehicle Registration Number</th>
                                <th>Vehicle Brand</th>
                                <th>Vehicle Model</th>
                                <th>Battery Capacity (kWh)</th>
                                <th>Connector Type</th>
                                <th>Charging Date</th>
                                <th>Time Slot</th>
                                <th>Estimated Units (kWh)</th>
                                <th>Charging Bay Number</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.bookingId}</td>
                                            <td>{value.ownerName}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.vehicleRegistrationNumber}</td>
                                            <td>{value.vehicleBrand}</td>
                                            <td>{value.vehicleModel}</td>
                                            <td>{value.batteryCapacity}</td>
                                            <td>{value.connectorType}</td>
                                            <td>{value.chargingDate}</td>
                                            <td>{value.timeSlot}</td>
                                            <td>{value.estimatedUnits}</td>
                                            <td>{value.chargingBayNumber}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        </div>

  )
}

export default ViewVehicle
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewVehicle = () => {
        const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-booking").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

  return (
            <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Owner Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Vehicle Registration Number</th>
                                <th>Vehicle Brand</th>
                                <th>Vehicle Model</th>
                                <th>Battery Capacity (kWh)</th>
                                <th>Connector Type</th>
                                <th>Charging Date</th>
                                <th>Time Slot</th>
                                <th>Estimated Units (kWh)</th>
                                <th>Charging Bay Number</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.bookingId}</td>
                                            <td>{value.ownerName}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.vehicleRegistrationNumber}</td>
                                            <td>{value.vehicleBrand}</td>
                                            <td>{value.vehicleModel}</td>
                                            <td>{value.batteryCapacity}</td>
                                            <td>{value.connectorType}</td>
                                            <td>{value.chargingDate}</td>
                                            <td>{value.timeSlot}</td>
                                            <td>{value.estimatedUnits}</td>
                                            <td>{value.chargingBayNumber}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        </div>

  )
}

export default ViewVehicle