const ROUTER = require('../apiRouter.js');
const Student = require('../../database/model/student.schema')

ROUTER.post('/student/register', async (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ error: "Name is undefined" })
    }
    else if (!req.body.age) {
        return res.status(400).json({ error: "Age is undefined" })
    }
    let num = 1;
    id = undefined
    do {
        id = req.body.name.slice(0, 3) + '-' + String.format('%4d', num)
        num += 1
    } while (id in Student.find().student_id)

    const student = new Student({
        student_id: id,
        name: req.body.name,
        age: req.body.age
    })
    await student.save();
    res.send(user)
})




module.exports = ROUTER
