import Button from 'react-bootstrap/Button';

export default function Language({changeLanguage, lang}){
    const handleLanguage = () => {
        if(lang === "es"){
            changeLanguage("en");
        } else {
            changeLanguage("es");
        }
    }
    return(
        <Button variant="success" onClick={handleLanguage} size="sm"><h6>{lang.toUpperCase()}</h6></Button>
    )
}