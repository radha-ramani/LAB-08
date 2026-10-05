function Dashboard() {

    return (
        <div className="page">

            <h1>Welcome to Student Dashboard</h1>

            <p>
                Welcome, Student!
            </p>

            <div className="dashboard-cards">

                <div className="card">
                    <h3>Attendance</h3>
                    <p>85%</p>
                </div>

                <div className="card">
                    <h3>CGPA</h3>
                    <p>8.5</p>
                </div>

                <div className="card">
                    <h3>Subjects</h3>
                    <p>6</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;