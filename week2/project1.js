
var info =


{
    "response_code": 0,
    "results": [
        {
            "category": "Science - Nature",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In aeronautics, flaps and slats are used to control what on an aircraft.",
            "correct_answer": "Lift",
            "incorrect_answers": [
                "Thrust",
                "Drag",
                "Weight "
            ]
        },
        {
            "category": "Science - Nature",
            "type": "multiple",
            "difficulty": "medium",
            "question": "After which Danish city is the 72th element on the periodic table named.",
            "correct_answer": "Copenhagen",
            "incorrect_answers": [
                "Odense",
                "Herning",
                "Skagen"
            ]
        },
        {
            "category": "Science - Nature",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What does the yellow diamond on the NFPA 704 fire diamond represent.",
            "correct_answer": "Reactivity",
            "incorrect_answers": [
                "Health",
                "Flammability",
                "Radioactivity"
            ]
        },
        {
            "category": "Science - Nature",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which desert is the only desert in the world where the 'Saguaro' cactus grows indigenously.",
            "correct_answer": "The Sonoran Desert",
            "incorrect_answers": [
                "The Gobi Desert",
                "The Yuma Desert",
                "The Arabian Desert"
            ]
        },
        {
            "category": "Science - Nature",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is Hypernatremia.",
            "correct_answer": "Increase in blood sodium",
            "incorrect_answers": [
                "Decrease in blood potassium",
                "Increase in blood glucose",
                "Decrease in blood iron"
            ]
        }
    ]
}
let text=""
for (let i=0; i<info.results.length; i++){
     text += "category:"+ info.results[i].category +"<br></br>"+ "type:"+ info.results[i].type + "<br></br>"+ "difficulty:"+ info.results[i].difficulty +"<br></br>"+ "question:" + info.results[i].question +"<br></br>"+ "correct_answer:" + info.results[i].correct_answer +"<br></br>"+ "incorrect_answers:" + info.results[i].incorrect_answers + "<br></br>"
}
document.getElementById("elements").innerHTML = text 