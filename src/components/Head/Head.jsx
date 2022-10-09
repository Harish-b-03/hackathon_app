import "./Head.css"

function Head() {
  return (
    <div className="HeadContainer">
        <div className="Layer1">
            <div className="HeadingContainer">
                <h1 className="Heading">
                    Accelerate Innovation <br/>
                    with Global AI Challenges 
                </h1>
                <p className="Description">
                    AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                </p>
                <button className="createChallengeButton">
                    Create Challenge
                </button>
            </div>
            <div className="HeadLogoContainer">
                <img src="/assets/icons/Rocket.svg" alt="Rocket Logo" />
            </div>    
        </div>

        <div className="StatisticsContainer">
            <div className="SubmissionsContainer">
                <img src="/assets/icons/AI_Logo.svg" alt="AI Logo" className="AI_Logo" />
                <div>
                    <span>100k+</span>
                    <div>AI model submissions</div>
                </div>
            </div>
            <div className="DataScientistsContainer">
                <img src="/assets/icons/DataScientists_Logo.svg" alt="DataScientists Logo" className="DataScientists_Logo" />
                <div>
                <span>50k+</span>
                <div>Data Scientists</div>
                </div>
            </div>
            <div className="ChallengesHostedContainer">
                <img src="/assets/icons/Challenges_Logo.svg" alt="Challenges Logo" className="Challenges_Logo" />
                <div>
                <span>100+</span>
                <div>AI Challenges hosted</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Head