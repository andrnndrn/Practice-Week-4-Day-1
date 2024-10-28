
const teamMembers = [
  {
    name: "Larry F. Burnett",
    role: "CEO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Meghan J. Webb",
    role: "CTO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Yvonne J. Cullum",
    role: "CFO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Diana H. Williams",
    role: "COO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Larry F. Burnett",
    role: "CEO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Meghan J. Webb",
    role: "CTO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Yvonne J. Cullum",
    role: "CFO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
  {
    name: "Diana H. Williams",
    role: "COO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <h3>\Team\</h3>
      <h2>Our Leaders</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
