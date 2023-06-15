type Props = {
  variant: "green" | "yellow" | "red";
};

export const Light: React.FC<Props> = ({ variant = "green" }) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
};
