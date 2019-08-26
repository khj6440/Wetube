import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest:"uploads/videos/"});

export const localsMiddleware=(req,res,next)=>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    //아직 존재하지않은 허구정보 실제 사용자 정보가 있으면 대체될 코드
    res.locals.user ={
        isAuthenticated:true,
        id: 1
    };
    next();
}

export const uploadVideo = multerVideo.single("videoFile");