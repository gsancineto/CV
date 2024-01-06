import Button from 'react-bootstrap/Button';
import TranslateIcon from '@mui/icons-material/Translate';

export default function Language({changeLanguage, lang}){
    const handleLanguage = () => {
        if(lang === "es"){
            changeLanguage("en");
        } else {
            changeLanguage("es");
        }
    }
    return(
        <Button variant="success" onClick={handleLanguage} size="sm"><h6><TranslateIcon /></h6></Button>
    )
}