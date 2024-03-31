import "../App.css";

// eslint-disable-next-line react/prop-types
export default function Heading({ title, primaryTitle }) {
  return (
    <h2 className="text-[2.8rem] text-center mb-10 max-[600px]:text-3xl max-[1024px]:text-4xl">
      {title}
      <span className="text-[var(--color-primary)]">{primaryTitle}</span>
    </h2>
  );
}
