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
      <span>{props.name}</span>
      <span>
        {props.isVerifiedGraduate ? "Verified Graduate" : "Unverified user"}
      </span>
    </section>
  );
};
