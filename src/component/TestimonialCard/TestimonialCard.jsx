import data from "./data.json";
import { Reviewer } from "../Reviewer/Reviewer";
import * as TestimonialCardStyles from "../../styles/TestimonialCard.style";

export const TestimonialCard = () => {
  const cardList = data.map((item) => {
    return (
      <TestimonialCardStyles.Card
        key={item.name}
        $hasQuoteImage={item.hasQuoteImage}
        $isTextLightMode={item.isTextLightMode}
        $backgroundColor={item.backgroundColor}
      >
        <Reviewer
          isVerifiedGraduate={item.isVerifiedGraduate}
          name={item.name}
          imageUrl={item.imageUrl}
          hasImageStroke={item.hasImageStroke}
        />
        <h2>{item.title}</h2>
        <q>{item.description}</q>
      </TestimonialCardStyles.Card>
    );
  });

  return (
    <>
      <h1 class="visually-hidden">Testimonials</h1>
      <div>{cardList}</div>;
    </>
  );
};
