import * as ReviewerStyles from "../../styles/Reviewer.style";

export const Reviewer = (props) => {
  return (
    <ReviewerStyles.Section>
      <ReviewerStyles.Image
        src={props.imageUrl}
        alt=""
        role="presentation"
        width="28"
        height="28"
        $hasImageStroke={props.hasImageStroke}
        $imageStrokeColor={props.imageStrokeColor}
      />
      <ReviewerStyles.Name>{props.name}</ReviewerStyles.Name>
      <ReviewerStyles.Status>
        {props.isVerifiedGraduate ? "Verified Graduate" : "Unverified User"}
      </ReviewerStyles.Status>
    </ReviewerStyles.Section>
  );
};
