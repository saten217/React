import http from "../http-common";
class uploadfileservice{
    upload(file, onUploadProgress){
        let formData= new FormData();
        formData.append("file",file);
        return http.post("./upload", formData,{
            headers:{
                "Content-type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }
    getFiles(){
        return http.get("files");
    }
}
 export default new uploadfileservice();