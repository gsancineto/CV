import Button from 'react-bootstrap/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function Download({lang}){
    const handleDownload = () =>{
        if (lang === "es"){
            window.open("https://docs.google.com/document/d/1BN0i6DKy0QTNPuaqFo_tg7km9eChtrBYZlYFfG1Dm2E/", "_blank");
        } else {
            window.open("https://docs.google.com/document/d/15StPSW5Sd3xO5iQrrGx1puC5OCF9B5N0c50Em27zF4o/", "_blank");
        }
    }
    return(
        <Button variant="primary" onClick={handleDownload} size="sm"><h6><InsertDriveFileIcon /></h6></Button>
    )
}