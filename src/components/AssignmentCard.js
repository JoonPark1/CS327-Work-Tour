import React, {useEffect, useState} from "react"; 
import styles from "../styles/AssignmentCard.module.css"; 
const AssignmentCard = ({title, imgPath, desc}) => {
    console.log("assignment card rendered!")
    const [imageSrc, setImageSrc] = useState(null); 
    console.log("imageSrc state: \n")
    console.log(imageSrc); 
    const importImage = async () => {
        console.log("importImage called!")
        try {
            const imageSrc = await import(`../assets/${imgPath}`); 
            setImageSrc(imageSrc.default);  
        }
        catch(e){
            console.log(e.message); 
        }
    }
    //useEffect call so before component renders, we dynamically set the image src to use for this component! 
    useEffect(() => {
        importImage(); 
    }, [])
    return (
        <div className={styles["outerCard"]}>
            <p>{title}</p>
            <img src={imageSrc} width="300px" height="200px"></img>
            <p>{desc}</p>
        </div>
    )
}

export default AssignmentCard; 