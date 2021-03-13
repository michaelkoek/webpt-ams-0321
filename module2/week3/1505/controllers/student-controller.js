const getUsers = (req, res) => {
    console.log('homepage')
    StudentModel.find({}, (err, stud) => {
        console.log({ stud })
      
    })
    res.send('Courses home page')
}


const saveUserById = async (req, res, next) => {
    const { name, age, hobbies, city } = req.body;
    const studname = name.toUpperCase();
    
    let student
    try {
        student = await StudentModel.Create({
            studname,
            age,
            hobbies,
            city,
            course: '6096937295fca354ae103c3e'
        })
    } catch(err) {
        const error = new Error('error message', err)
        return next(error)
    }

    res.send({ data: student})
}


const sayMyName = (arg) => {
    console.log(arg)
}

exports.saveUserById = saveUserById;
exports.getUsers = getUsers;
