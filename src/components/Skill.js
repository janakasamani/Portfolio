
function Skill(props) {
    return ( 
        <div className="skill">
      <img src={`/skills/${props.skill}`} alt="" className="skill-img" />
    </div>
     );
}

export default Skill;

