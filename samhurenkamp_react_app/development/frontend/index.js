import React from "react";
import ReactDOM from "react-dom/client";
import Table from "../backend/components/table/table";
import './styles/stylesheet.scss'

var data = new Array();

const App = () => {
    // all tables data has been read into their respective rows
    // next, we generate the mashup data for populating our table
    return <div className="table_container">
        < Table data={data} />
    </div>
}


async function compileData(students, courses, registrations) {
    let rowData = []
    registrations.forEach(reg => {
        let student = students.filter(student => reg.student_id === student._id)[0]
        let course = courses.filter(course => reg.course_code === course.course_code)[0]
        rowData.push({
            s_id: student._id,
            s_name: student.full_name,
            c_code: course.course_code,
            reg: reg.registration_date
        })
    });
    return rowData
}

async function writeData(obj) {
    setTimeout(console.log(), 500) // async function call is needed here because... reasons.
    data.push(obj)
    // lenght === 3 implies that all 3 collections have been added to the preliminary data
    if (data.length === 3) {
        let students = data.filter(subArr => Object.keys(subArr[0]).includes('full_name'))
        let courses = data.filter(subArr => Object.keys(subArr[0]).includes('course_description'))
        let registrations = data.filter(subArr => Object.keys(subArr[0]).includes('registration_date'))

        data = await compileData(students[0], courses[0], registrations[0])
        // now that data is populated, render the App to build the table
        ReactDOM.createRoot(document.getElementById("root")).render(< App />);
    }

}

const setCollectionData = (collection) => {
    fetch(`http://localhost:3000/api/${collection}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(async json => {
            await writeData(json)
        })
        .catch(error => console.log(error.message))
}

async function getData() {
    await setCollectionData('course')
    await setCollectionData('student')
    await setCollectionData('registration')
}

getData()

