import Characteristic from '../assets/characteristic'

//variable

//Function HTML section
function AllCharacteristics() {
  return (
    <section
      id="CharacteristicStats"
      className="Main-Content"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="2000"
    // data-aos-offset="0"
    >
      <h1>Characteristics</h1>
      <div className="container-grid">
        <div className="Weapon-Skill-\(WS\)">
          <Characteristic skillNo={"0"} />
        </div>
        <div className="Ballistic-Skill-\(BS\)">
          <Characteristic skillNo={"1"} />
        </div>
        <div className="Strength-\(S\)">
          <Characteristic skillNo={"2"} />
        </div>
        <div className="Toughness-\(T\)">
          <Characteristic skillNo={"3"} />
        </div>
        <div className="Agility-\(Ag\)">
          <Characteristic skillNo={"4"} />
        </div>
        <div className="Intelligence-\(Int\)">
          <Characteristic skillNo={"5"} />
        </div>
        <div className="Perception-\(Per\)">
          <Characteristic skillNo={"6"} />
        </div>
        <div className="Willpower-\(WP\)">
          <Characteristic skillNo={"7"} />
        </div>
        <div className="Fellowship-\(Fel\)">
          <Characteristic skillNo={"8"} />
        </div>
      </div>
    </section>
  );
}

export default AllCharacteristics;