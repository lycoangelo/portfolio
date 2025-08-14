import styles from "./Loading.styles";

export default function Loading() {
  return (
    <div className={styles.loading}>
      {Array(10)
        .fill(undefined)
        .map((_, index) => (
          <div
            style={{ animationDelay: index * 0.1 + "s" }}
            className={styles.wave}
            key={index}
          />
        ))}
    </div>
  );
}
