import {videos} from "../db";
//videos:videos  == videos
export const home= (req,res)=>res.render("Home",{pageTitle: "Home",videos});

export const search= (req,res)=>{
    
    /*const searchingBy = req.query.term;     ---->ES5
    const{query:{term:searchingBy}} = req;    ---->ES6   */
    
    const{query:{term:searchingBy}} = req;
    res.render("Search",{pageTitle: "Search",searchingBy: searchingBy});
}

export const upload= (req,res)=>res.render("Upload",{pageTitle: "Upload"});

export const videoDetail= (req,res)=>res.render("VideoDetail",{pageTitle: "Video Detail"});

export const editVideo= (req,res)=>res.render("EditVideo",{pageTitle: "Edit Video"});

export const deleteVideo= (req,res)=>res.render("DeleteVideo",{pageTitle: "Delete Video"});