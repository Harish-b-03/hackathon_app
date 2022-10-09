import "./About.css";

function About() {
  return (
    <div className="AboutContainer">
        <h1 className="AboutHeading">
            why participate in <span>AI Challenges?</span>
        </h1>
        <div className="SectionsContainer">
            <div className="LevelOneSections">
                <div className="ProveSkills">
                    <div>
                    <img src="/assets/icons/ProveYourSkills_Logo.svg" alt="Prove your skills logo" className="ProveSkillsLogo" />
                    </div>
                    <div>
                    <span className="SectionHeading">Prove your skills</span>
                    </div>
                    <div>
                    <p className="Decription">Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                    </div>                    
                </div>
                <div className="LearnFromCommunity">
                    <div>
                    <img src="/assets/icons/Community_Logo.svg" alt="Learn from Community logo" className="LearnFromCommunityLogo" />
                    </div>
                    <div>

                    <span className="SectionHeading">Learn From Community</span>
                    </div>
                    <div>

                    <p className="Decription">One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                    </div>
                </div>
            </div>
            <div className="LevelTwoSections">
                <div className="ChallengeYourself">
                    <div>
                        <img src="/assets/icons/Challenge_Logo.svg" alt="Challenge Yourself logo" className="ChallengeYourselfLogo" />
                    </div>
                    <div>
                        <span className="SectionHeading">Challenge Yourself</span>
                    </div>
                    <div>
                    <p className="Decription">There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                    </div>
                </div>
                <div className="EarnRecognition">
                    <div>
                        <img src="/assets/icons/Recognition_Logo.svg" alt="Recognition logo" className="RecognitionLogo" />
                    </div>
                    <div>
                        <span className="SectionHeading">Earn Recognition</span>
                    </div>
                    <div>
                        <p className="Decription">You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About