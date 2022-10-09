import "./Challenges.css";

const Challenges= () => {
  return (
    <div className="ChallengesContainer">
        <h2 className="ChallengesHeading">Explore Challenges</h2>
        <div className="ChallengesSearchBarContainer">
            <input type="text" className="ChallengesSearchInput" placeholder="Search"/>
            <select className="FilterSelect" name="ManageProperty" id="ManageProperty">
                <option value="Filter">Filter</option>
            </select>
        </div>

    </div>
  )
}

export default Challenges