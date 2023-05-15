import React from "react";
import { SectionsContainer, Section } from "react-fullpage";

let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
};

function MainFullPage() {
    return (
        <SectionsContainer {...options}>
          <Section>Page 1</Section>
          <Section>Page 2</Section>
          <Section>Page 3</Section>
        </SectionsContainer>
      );
}

export default MainFullPage