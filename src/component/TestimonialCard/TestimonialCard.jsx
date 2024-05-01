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
        $gridArea={item.gridArea}
      >
        <Reviewer
          isVerifiedGraduate={item.isVerifiedGraduate}
          name={item.name}
          imageUrl={item.imageUrl}
          hasImageStroke={item.hasImageStroke}
        />
        <b>{item.title}</b>
        <q>{item.description}</q>
      </TestimonialCardStyles.Card>
    );
  });

  return (
    <>
      <h1 className="visually-hidden">Testimonials</h1>
      <TestimonialCardStyles.CardList>
        {cardList}
      </TestimonialCardStyles.CardList>
      ;
    </>
  );
};
