import asyncHandler from "express-async-handler";

const getSth = asyncHandler(async (req, res) => {
    // your logic
    res.status(201).json({message: "getSth works"});
});

const putSth = asyncHandler(async (req, res) => {
    // your logic
    res.status(201).json({message: "getSth works"});
});

const postSth = asyncHandler(async (req, res) => {
    // your logic
    res.status(201).json({message: "getSth works"});
});

const deleteSth = asyncHandler(async (req, res) => {
    // your logic
    res.status(201).json({message: "getSth works"});
});



export { getSth, putSth, postSth, deleteSth };
