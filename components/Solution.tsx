type SolutionProps = {
  title: string
  text: string
}

export default function Solution({ title, text }: SolutionProps) {
  return (
    <section
      style={{
        background: "#f7f7f7",
        padding: "100px 40px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px" }}>{title}</h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          fontSize: "20px",
          color: "#555",
        }}
      >
        {text}
      </p>
    </section>
  )
}