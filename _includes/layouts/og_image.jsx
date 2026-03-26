export default ({ title, description }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "1200px",
      height: "600px",
      backgroundColor: "#1a1a2e",
      padding: "60px 80px",
      fontFamily: "Noto Sans JP, sans-serif",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <div
        style={{
          fontSize: title && title.length > 30 ? "42px" : "52px",
          fontWeight: 700,
          color: "#e8e8e8",
          lineHeight: 1.3,
          marginBottom: "20px",
        }}
      >
        {title || ""}
      </div>
      {description && (
        <div
          style={{
            fontSize: "22px",
            color: "#a0a0b8",
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      )}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "2px solid #e8a87c",
        paddingTop: "24px",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          color: "#e8a87c",
          fontWeight: 700,
        }}
      >
        ねおのらしいのAIブログ
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#a0a0b8",
        }}
      >
        5beneono.github.io/blog
      </div>
    </div>
  </div>
);
