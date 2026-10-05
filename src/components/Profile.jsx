function Profile() {

    const student = {
        name: "Rahul Kumar",
        rollNo: "23CS101",
        branch: "Computer Science and Engineering",
        year: "2nd Year",
        email: "rahul@example.com"
    };

    return (
        <div className="page">

            <h1>Student Profile</h1>

            <div className="profile-card">

                <p>
                    <strong>Name:</strong> {student.name}
                </p>

                <p>
                    <strong>Roll Number:</strong> {student.rollNo}
                </p>

                <p>
                    <strong>Branch:</strong> {student.branch}
                </p>

                <p>
                    <strong>Year:</strong> {student.year}
                </p>

                <p>
                    <strong>Email:</strong> {student.email}
                </p>

            </div>

        </div>
    );
}

export default Profile;