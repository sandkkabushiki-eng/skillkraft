
export default function ServiceCard({ title, description, badge }) {
    return (
        <div className="service-card">
            <div className="card-badge">{badge}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
        </div>
    );
}
