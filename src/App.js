import AssignmentCard from "./components/AssignmentCard";
import styles from "./styles/App.module.css"; 
const App = () => {
    const assignmentData = [
        {
            title: 'A2 Gifs',
            desc: "I just made bunch of gifs involving rotational lines, sideways motion, bouncing ball, shape-changing gif, and a mockup face",
            imgPath: 'a2.png'
        },
        {
            title: 'A3 Drawing Tool',
            desc: "I just made a drawing tool that incorporates fancy bezier curves!",
            imgPath: 'a3.png'
        },
        {
            title: 'A3 Drawing Tool-2',
            desc: "I just made a drawing tool that draws out thick shades of rainbow!",
            imgPath: 'a3-rainbow.png'
        },
        {
            title: 'A5 Latency Space-1',
            desc: "I made bacterial culture that varies widely based on various paramters for exploring the latency space!",
            imgPath: 'a5-bacteria.png'
        },
        {
            title: 'A5 Latency Space-2',
            desc: "I made flower that varies widely based on various paramters for exploring the latency space!",
            imgPath: 'a5-flowers.png'
        },
        {
            title: 'A6 Chatbot-1',
            desc: "I made an interactive chat-bot that feeds back upon user's emotion with Tracery Grammar and is able to generate random story of any topic!",
            imgPath: 'a-6firstbot.png'
        },
        {
            title: 'A6 Chatbot-2',
            desc: "I made an interactive chat-bot that generates similarity score of most recent input to previous user inputs. Also, it is able to detect foreign language in input and generate translation for it.",
            imgPath: 'a-6-nlpheavy.png'
        },
        {
            title: 'A7 Data Visualization-1',
            desc: "I made an appealing data visualization that breaks down most important keywords associated with each tarot card!",
            imgPath: 'a7-tarot-keywords.png'
        },
        {
            title: 'A7 Data Visualization-2',
            desc: "I made an appealing data visualization that emphasizes tarot cards that is most prevalent broken down by prize icons!",
            imgPath: 'a7-trending-carot.png'
        },
        {
            title: 'A7 Data Visualization-3',
            desc: "I made an appealing data visualization that gives user flexbility to ask away any question. Then, based on the input, the most applicable tarot cards will be suggested!",
            imgPath: 'a7-tarot-fortune-teller.png'
        },
    ]
    return (
        <div>
            <h1>Sung Park's CS327 Assignment Tour Page</h1>
            <p>Below, there are some carefully selected 10 of my works throughout the quarter!</p>
            {/*For each assignment data object, map it to AssignmentCard jsx element (a card component with necessary details and image)*/}
            <div className={styles["assignment-cards-div"]}>
                {assignmentData.map(ad => {
                    return <AssignmentCard title={ad.title} desc={ad.desc} imgPath={ad.imgPath} />
                })}
            </div>
        </div>
    ); 
}

export default App;  