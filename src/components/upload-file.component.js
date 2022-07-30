import react, {Component} from "react";
import uploadFileServices from "../services/upload-file.services";
export default class uploadfileservice extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedFiles:undefined,
            currentFile: undefined,
            progress:0,
            message:"",
            fileInfos:[],
        };
        }
        selectFile(event){
            this.setState({
                selectedFiles: event.target.files,
            });
        }
    render(){

    }
}