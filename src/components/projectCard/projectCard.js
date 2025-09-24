import "./projectCard.css";

function ProjectCard({ title, description, image, href, tags = [] }) {
  return (
    <div className="project-card card">
      {image && <img className="card-img-top" src={image} alt={`${title} preview`} />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((t) => (
              <span className="project-tag" key={t}>{t}</span>
            ))}
          </div>
        )}
        <p className="card-text">{description}</p>
        <a href={href} className="btn btn-primary" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
