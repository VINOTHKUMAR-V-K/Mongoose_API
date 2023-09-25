let stuModel = require("../model/basic");

exports.postStuQurey = async (req, res) => {
    try {
        const postStu = await new stuModel({
            studentName: req.body.studentName,
            stuId: req.body.stuId,
            dept: req.body.dept,
            email: req.body.email,
            no: req.body.no
        })
        postStu.save();
        res.status(200).send(postStu)
    }
    catch {
        res.status(400).send(err => err);
    }
}
//find
exports.getStu = async (req, res) => {
    try {
        const result = await stuModel.find();
        res.status(200).send(result)
    } catch {
        res.status(400).send(err => err);
    }
}

//fineOne
exports.findoneStu = async (req, res) => {
    try {
        const { studentName } = req.params;
        var data = await stuModel.findOne({ studentName: studentName });
        if (!data) {
            res.status(404).send(`Student not found`);
        }
        res.status(200).send(data)
    } catch {
        res.status(500).send(err => err)
    }
}
//findbyid
exports.findbyidStu = async (req, res) => {
    try {
        const result = await stuModel.findById(req.params._id);
        res.status(200).send(result)
    }
    catch {
        res.status(404).send(err => err);
    }
}
//findbyidanddelete
// findByIdAndRemove is an older method that does the same as findByIdAndDelete.
// It also finds a single document by its ID and removes it.
// Similar to findByIdAndDelete, it returns the document that was removed as the result of the operation.
// However, findByIdAndRemove is deprecated and not recommended to use. It's recommended to use findByIdAndDelete instead.
exports.findbyidanddelete = async (req, res) => {
    try {
        const result = await stuModel.findByIdAndDelete(req.params._id);
        res.status(200).send(`user deteled`)

    } catch {
        res.status(500).send(`internal error`)
    }
}
//findbyidandupdate
exports.findbyidandupdate = async (req, res) => {
    const { studentName, stuId, dept, email, no } = req.body
    const id = req.params._id
    try {
        const result = await stuModel.findByIdAndUpdate(id, { studentName, stuId, dept, email, no })
        res.status(200).send(`updated success`);
    } catch {
        res.status(500).send(`internal error`)
    }
}
//findoneanddelete
exports.findoneandelete = async (req, res) => {
    try {
        const { studentName } = req.params
        const result = await stuModel.findOneAndDelete({ studentName: studentName });
        res.status(200).send(`data deleted`);
    } catch {
        res.status(500).send(`internal error`);
    }
}
//fineoneandupdate
exports.findoneandupdate = async (req, res) => {
    try {
        const { studentName, stuId, dept, email, no } = req.body
        const result = await stuModel.findOneAndUpdate({ studentName: req.params.studentName }, { studentName, stuId, dept, email, no });
        if (!result) {
            res.status(400).send(`its not a user`);
        }
        res.status(200).send(`updated`);
    } catch {
        res.status(500).send(`internal error`);
    }
}
//deleteOne
exports.deleteone = async (req, res) => {
    try {
        const { studentName } = req.params
        const result = await stuModel.deleteOne({ studentName: studentName });
        res.status(200).send(`deleted`)
    } catch {
        res.status(500).send(`internal server error`)
    }
}
//updateone
exports.updateone = async (req, res) => {
    try {
        const name = req.params.studentName
        const { studentName, stuId, dept, email, no } = req.body
        const result = await stuModel.updateOne({ studentName: name }, { studentName, stuId, dept, email, no });
        res.status(200).send(`updated success`)
    } catch {
        res.status(500).send(`server error`)
    }
}
