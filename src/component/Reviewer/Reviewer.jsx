import * as ReviewerStyles from "../../styles/Reviewer.style";

export const Reviewer = (props) => {
  return (
    <section>
      <ReviewerStyles.Image
        src={props.imageUrl}
        alt=""
        role="presentation"
        $hasImageStroke={props.hasImageStroke}
      />
      <p>{props.name}</p>
      <p>
        {props.isVerifiedGraduate ? "Verified Graduate" : "Unverified user"}
      </p>
    </section>
  );
};
