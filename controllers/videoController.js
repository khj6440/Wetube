import routes from "../routes";
//Database 의 element 아니고 단지 model 
import Video from "../models/Video";
//videos:videos  == videos
export const home= async(req,res)=>{
    try{
        const videos = await Video.find({});
        res.render("Home",{pageTitle: "Home",videos});
    }catch(error){
        console.log(error);
        res.render("Home",{pageTitle: "Home",videos:[]});

    }
}
export const search= (req,res)=>{
    
    /*const searchingBy = req.query.term;     ---->ES5
    const{query:{term:searchingBy}} = req;    ---->ES6   */
    
    const{query:{term:searchingBy}} = req;
    res.render("Search",{pageTitle: "Search",searchingBy: searchingBy,videos});
}

export const getUpload= (req,res)=>res.render("Upload",{pageTitle: "Upload"});
export const postUpload= async(req,res)=>{
    const{
        body:{
            title,description
        },
        file :{
            path
        }
    }=req;
    const newVideo = await Video.create({
        fileUrl:path,
        title: title,
        description: description
    });
    console.log(newVideo);
    //To Do : Upload and sava video
    res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail= (req,res)=>res.render("VideoDetail",{pageTitle: "Video Detail"});

export const editVideo= (req,res)=>res.render("EditVideo",{pageTitle: "Edit Video"});

export const deleteVideo= (req,res)=>res.render("DeleteVideo",{pageTitle: "Delete Video"});